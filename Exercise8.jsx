import React from "react";

export class Exercise8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: 0 };
  }
  handleClick = () => {
    this.setState({ val: this.state.val + 1 });
  };
  render() {
    return (
      <div className="container">
        <button onClick={this.handleClick}>Increment</button>
        <span> {this.state.val}</span>
      </div>
    );
  }
}
