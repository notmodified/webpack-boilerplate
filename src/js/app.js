'use strict';
import $ from 'jquery';
import 'holderjs';

import wigglyJumbo from './wiggly-jumbo';

$(() => {
  console.log('ready, loading other bits');
  wigglyJumbo($);
});

