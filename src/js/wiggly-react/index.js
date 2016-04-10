import React from 'react';
import ReactDom from 'react-dom';
import Wiggle from './wiggle.jsx';

export default () => ReactDom.render(
  React.createElement(Wiggle),
  document.getElementById('react-wiggler')
);
