import React from "react";
import "./Exercise12.css";

export class Exercise12 extends React.Component {
  state = { clsName: "" };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        clsName: "box",
      });
    }, 1000);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({
        clsName: "",
      });
    }, 4000);
  }

  render() {
    return (
      <div>
        <div className={`${this.state.clsName}`}></div>
        <div className={`${this.state.clsName} box2`}></div>
        <div className={`${this.state.clsName} box3`}></div>
      </div>
    );
  }
}
