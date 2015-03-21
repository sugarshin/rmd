// Editor

"use strict";

import React from 'react';

export default React.createClass({
  propTypes: {
    value: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired
  },

  componentDidMount() {
    this.refs.textarea.getDOMNode().focus();
  },

  _onChange(ev) {
    this.props.onChange(ev);
  },

  render() {
    return (
      <div className="editor-wrapper">
        <textarea
          ref="textarea"
          value={this.props.value}
          onChange={this._onChange}
        />
      </div>
    );
  }
});
