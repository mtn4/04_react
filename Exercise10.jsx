import React from "react";

export class Exercise10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: 0 };
  }
  handleInc = () => {
    this.setState({ val: this.state.val + 1 });
  };
  handleDec = () => {
    this.setState({ val: this.state.val - 1 });
  };
  render() {
    const val = this.state.val;
    let buttonInc;
    if (val === 10) {
      buttonInc = <button>Increment</button>;
    } else {
      buttonInc = <button onClick={this.handleInc}>Increment</button>;
    }
    let buttonDec;
    if (val === -10) {
      buttonDec = <button>Decrement</button>;
    } else {
      buttonDec = <button onClick={this.handleDec}>Decrement</button>;
    }
    let color = "black";
    if (val > 0) {
      color = "green";
    }
    if (val < 0) {
      color = "red";
    }
    return (
      <div className="container" style={{ color: `${color}` }}>
        {buttonInc}
        {buttonDec}
        <span> {this.state.val}</span>
      </div>
    );
  }
}
