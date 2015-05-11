import React from 'react';

import action from '../actions/action';

export default class Editor extends React.Component {

  static get propTypes() {
    return {
      defaultValue: React.PropTypes.string
    };
  }

  handleChangeText(ev) {
    action.inputText(ev.target.value);
    this.setState({
      value: ev.target.value
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue
    };
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
          value={this.state.value}
          defaultValue={this.props.value}
        />
      </div>
    );
  }

}
