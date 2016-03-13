const webpack = require('webpack');
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config.js");

const chokidar = require('chokidar');

config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  contentBase: './src/markup',
  quiet: false,
  noInfo: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  publicPath: "/assets/",
  stats: { colors: true },
});

chokidar.watch('./src/markup/*').on('all', (event, path) => {
  server.sockWrite(server.sockets, "invalid");
  server.sockWrite(server.sockets, "hash", "imaginary");
  server.sockWrite(server.sockets, "ok");
});

server.listeningApp.on('listening', (e) => {
  console.log('listing on 8080');
});

server.listeningApp.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log('You have another dev server running somewhere, shut it down first');
  } else {
    console.log('error', e);
  }
  process.exit();
});

server.listen(8080);
