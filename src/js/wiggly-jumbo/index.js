'use strict';
import './wiggly.scss';

export default ($) => {
  console.log('loading wiggly');

  $('.wiggly-jumbo__title').on('mouseover', function over() {
    $(this).toggleClass('wiggly-jumbo__title--hover');
  });

  $('.wiggly-jumbo__title').on('mouseout', function out() {
    $(this).toggleClass('wiggly-jumbo__title--hover');
  });
};
