// App
"use strict";

import React from 'react';
import Editor from './editor';
import Preview from './preview';

export default React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  // init localStorage
  componentWillMount() {
    var initialVal = '# rmd\n\nis markdown editor';
    if (localStorage.getItem('rmd') === null) {
      localStorage.setItem('rmd', JSON.stringify({value: initialVal}));
    }
  },

  componentDidMount() {
    this.setState({
      value: this.fetch().value
    });
  },

  componentDidUpdate(prevProps, prevState) {
    this.save();
  },

  save() {
    localStorage.setItem('rmd', JSON.stringify(this.state));
  },

  fetch() {
    return JSON.parse(localStorage.getItem('rmd'));
  },

  onChangeText(ev) {
    this.setState({
      value: ev.target.value
    });
  },

  render() {
    return (
      <div className="rmd-wrapper">
        <div className="rmd">
          <Editor
            value={this.state.value}
            onChange={this.onChangeText}
          />
          <div className="preview-wrapper">
            <Preview
              body={this.state.value}
            />
          </div>
        </div>
      </div>
    );
  }
});
