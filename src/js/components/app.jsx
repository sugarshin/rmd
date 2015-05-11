import React from 'react';

import Header from './header';
import Editor from './editor';
import Preview from './preview';

import store from '../stores/store';
import action from '../actions/action';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  _onChangeInitialText() {
    this.setState({
      initialVal: store.getInitialText()
    });
  }

  _onChangeText() {
    this.setState({
      value: store.getText()
    });
  }

  // init localStorage
  // componentWillMount() {
  //   let initialVal = '# rmd\n\nis markdown editor';
  //   if (localStorage.getItem('rmd') === null) {
  //     localStorage.setItem('rmd', JSON.stringify({value: initialVal}));
  //   }
  // }

  componentWillMount() {
    action.fetch();
  }

  componentDidMount() {
    store.addListener(this._onChangeText.bind(this));
    store.addListener(this._onChangeInitialText.bind(this));
    // this.setState({
    //   value: store.getText()
    // });
    // this.setState({
    //   value: this.fetch().value
    // });
  }

  componentWillUnmount() {
    store.removeListener(this._onChangeText.bind(this));
    store.removeListener(this._onChangeInitialText.bind(this));
  }

  // componentDidUpdate() {
  //   this.save();
  // }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="rmd-wrapper">
          <div className="rmd">
            <Editor
              defaultValue={this.state.initialVal}
            />
            <Preview
              body={this.state.value}
            />
          </div>
        </div>
      </div>
    );
  }

}
