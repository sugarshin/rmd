import React from 'react';

import action from '../actions/action';

export default class Editor extends React.Component {

  static get propTypes() {
    return {
      value: React.PropTypes.string,
      onChange: React.PropTypes.func.isRequired
    };
  }

  handleChangeText(ev) {
    action.inputText(ev.target.value);
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.refs.textarea.getDOMNode().focus();
  }

  render() {
    return (
      <div className="editor-wrapper">
        <textarea
          ref="textarea"
          onChange={this.handleChangeText.bind(this)}
        >{this.props.value}</textarea>
      </div>
    );
  }

}
