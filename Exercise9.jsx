import React from "react";

export class Exercise9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { disp: "none" };
  }
  handleClickBlock = () => {
    this.setState({ disp: "block" });
  };
  handleClickNone = () => {
    this.setState({ disp: "none" });
  };
  render() {
    const disp = this.state.disp;
    let button;
    if (disp === "none") {
      button = <button onClick={this.handleClickBlock}>Show/Hide</button>;
    } else {
      button = <button onClick={this.handleClickNone}>Show/Hide</button>;
    }
    return (
      <div style={{ width: 180, height: 200, border: "1px solid black" }}>
        {button}
        <div
          style={{
            width: 100,
            height: 120,
            border: "1px solid black",
            margin: "15px auto",
            backgroundColor: "yellow",
            display: `${this.state.disp}`,
          }}
        ></div>
      </div>
    );
  }
}
