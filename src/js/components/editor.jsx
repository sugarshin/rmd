import React from 'react';

export default class Editor extends React.Component {

  static get propTypes() {
    return {
      value: React.PropTypes.string,
      onChange: React.PropTypes.func.isRequired
    };
  }

  _onChange(ev) {
    this.props.onChange(ev);
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
          value={this.props.value}
          onChange={this._onChange.bind(this)}
        />
      </div>
    );
  }

}
