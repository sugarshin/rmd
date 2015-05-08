import React from 'react';
import Markdown from 'react-remarkable';

export default class Preview extends React.Component {

  static get propTypes() {
    return {
      body: React.PropTypes.string
    };
  }

  static get defaultProps() {
    return  {
      body: ''
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="preview-wrapper">
        <div className="preview-content">
          <Markdown>{this.props.body}</Markdown>
        </div>
      </div>
    );
  }

}
