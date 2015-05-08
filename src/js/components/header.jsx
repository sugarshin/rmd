import React from 'react';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="g-header">
        <h1>
          <a href="./">rmd</a>
        </h1>
      </header>
    );
  }

}
