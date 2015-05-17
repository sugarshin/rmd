import React from 'react';

import Header from './header';
import Editor from './editor';
import Preview from './preview';

import store from '../stores/store';
import action from '../actions/action';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    action.fetchSync();

    this.state = {
      text: store.getText()
    };

    this._boundOnChangeText = this._onChangeText.bind(this);
  }

  _onChangeText() {
    this.setState({
      text: store.getText()
    });
  }

  componentDidMount() {
    store.addChangeListener(this._boundOnChangeText);
  }

  componentWillUnmount() {
    store.removeChangeListener(this._boundOnChangeText);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="rmd-wrapper">
          <div className="rmd">
            <Editor
              initialVal={this.state.text}
            />
            <Preview
              body={this.state.text}
            />
          </div>
        </div>
      </div>
    );
  }

}
