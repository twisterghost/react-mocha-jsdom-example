import React from 'react';

export default class exampleComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  clickHandler = () => {
    this.setState({
      clicked: true
    });
  };

  render() {
    const clickedStatus = this.state.clicked ? <div ref='clicked'>Clicked!</div> : null;
    return (
      <div onClick={this.clickHandler}>
        Hello world
        {clickedStatus}
      </div>
    );
  }
}

// To allow for ES5 require-style testing for this example.
module.exports = exampleComponent;
