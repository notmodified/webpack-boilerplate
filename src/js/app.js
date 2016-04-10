'use strict';
import $ from 'jquery';
import 'holderjs';

import wigglyReact from './wiggly-react';
import wigglyJumbo from './wiggly-jumbo';

$(() => {
  console.log('ready, loading other bits');
  wigglyJumbo($);
  wigglyReact();
});
