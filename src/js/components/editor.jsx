import React from 'react';

import store from '../stores/store';
import action from '../actions/action';

export default class Editor extends React.Component {

  static get propTypes() {
    return {
      initialVal: React.PropTypes.string
    };
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    React.findDOMNode(this.refs.textarea).focus();
  }

  handleInputText(ev) {
    action.inputText(ev.target.value);
  }

  render() {
    return (
      <div className="editor-wrapper">
        <textarea
          ref="textarea"
          defaultValue={this.props.initialVal}
          onInput={this.handleInputText.bind(this)}
        ></textarea>
      </div>
    );
  }

}
