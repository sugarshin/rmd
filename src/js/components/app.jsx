import React from 'react';

import Header from './header';
import Editor from './editor';
import Preview from './preview';

import Store from '../stores/store';
import action from '../actions/action';

let store = new Store;
global.store = store
export default class App extends React.Component {

  constructor(props) {
    super(props);

    action.fetch();

    this.state = {};
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

  // componentWillMount() {
  //   this.setState({
  //     value: store.getText()
  //   });
  // }

  componentDidMount() {
    store.addListener(this._onChangeText.bind(this));
    // this.setState({
    //   value: store.getText()
    // });
    // this.setState({
    //   value: this.fetch().value
    // });
  }

  componentWillUnmount() {
    store.removeListener(this._onChangeText.bind(this));
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
              value={this.state.value}
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
