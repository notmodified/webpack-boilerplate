'use strict';
import $ from 'jquery';
import './wiggly.scss';

export default ($) => {

  console.log('loading wiggly');

  $('.wiggly-jumbo__title').on('mouseover', function() {
    $(this).toggleClass('wiggly-jumbo__title--hover');
  })

  $('.wiggly-jumbo__title').on('mouseout', function() {
    $(this).toggleClass('wiggly-jumbo__title--hover');
  })

}
