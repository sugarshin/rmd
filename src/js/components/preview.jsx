// Preview

"use strict";

import React from 'react';
global.React = React;

import md2react from 'md2react';

export default React.createClass({
  propTypes: {
    body: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      body: ''
    };
  },

  render() {
    var el = md2react(this.props.body, {gfm: true, breaks: true});
    return (
      <div className="preview-content">{el}</div>
    );
  }
});
