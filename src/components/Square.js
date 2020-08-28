import React from "react";

export default class Square extends React.Component {
  constructor(props) {
    // In JavaScript classes, you need to always call super when defining the constructor of a subclass. 
    // All React component classes that have a constructor should start with a super(props) call.
    super(props);
    this.state = { value: null };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => {
          this.setState({value: 'X'});
        }}
      >
        {this.state.value}
      </button>
    );
  }
}
