import React from 'react';

import Header from './header';
import Editor from './editor';
import Preview from './preview';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  save() {
    localStorage.setItem('rmd', JSON.stringify(this.state));
  }

  fetch() {
    return JSON.parse(localStorage.getItem('rmd'));
  }

  _onChangeText(ev) {
    this.setState({
      value: ev.target.value
    });
  }

  // init localStorage
  componentWillMount() {
    let initialVal = '# rmd\n\nis markdown editor';
    if (localStorage.getItem('rmd') === null) {
      localStorage.setItem('rmd', JSON.stringify({value: initialVal}));
    }
  }

  componentDidMount() {
    this.setState({
      value: this.fetch().value
    });
  }

  componentDidUpdate() {
    this.save();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="rmd-wrapper">
          <div className="rmd">
            <Editor
              value={this.state.value}
              onChange={this._onChangeText.bind(this)}
            />
            <div className="preview-wrapper">
              <Preview
                body={this.state.value}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

}
