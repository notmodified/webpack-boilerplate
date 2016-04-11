'use strict';
import styles from './wiggly.scss';

export default ($) => {
  console.log('loading wiggly');

  $('.' + styles['wiggly-jumbo__title']).on('mouseover', function over() {
    $(this).toggleClass(styles['wiggly-jumbo__title--hover']);
  });

  $('.' + styles['wiggly-jumbo__title']).on('mouseout', function out() {
    $(this).toggleClass(styles['wiggly-jumbo__title--hover']);
  });
};
