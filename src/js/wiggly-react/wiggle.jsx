import React from 'react';
import ReactDom from 'react-dom';

import styles from './wiggle.scss';

export default React.createClass({

  over() {
    this.setState({
      className: styles['wiggle-react__title--hover']
    })
  },

  out() {
    this.setState({className: ''})
  },

  getInitialState() {
    return {className: ''};
  },

  render() {
    return (
      <div
        className={styles['wiggle-react']}
        onMouseOut={this.out}
        onMouseOver={this.over}>
        <h1 className={this.state.className}>
          hi there
        </h1>
      </div>);
  }

});
