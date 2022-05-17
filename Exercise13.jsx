import React from "react";

export class Exercise13 extends React.Component {
  state = { color: "", type: "box", counter: 0 };
  changeColor = () => {
    const colorArr = ["blue", "red", "green", "yellow", "orange"];
    const colorArrIdx = Math.floor(Math.random() * colorArr.length);

    setTimeout(() => {
      if ((this.state.counter + 1) % 5 === 0) {
        if (this.state.type === "circle") {
          this.setState({
            color: `${colorArr[colorArrIdx]}`,
            counter: this.state.counter + 1,
          });
        } else {
          this.setState({
            color: `${colorArr[colorArrIdx]}`,
            type: "circle",
            counter: this.state.counter + 1,
          });
        }
      } else {
        this.setState({
          color: `${colorArr[colorArrIdx]}`,
          counter: this.state.counter + 1,
        });
      }
    }, 500);
  };
  componentDidMount() {
    this.changeColor();
  }

  componentDidUpdate() {
    this.changeColor();
  }

  render() {
    let type = this.state.type;
    let radius;
    if (type === "circle") {
      radius = "50%";
    } else {
      radius = "0";
    }
    return (
      <div
        style={{
          height: 400,
          width: 400,
          backgroundColor: `${this.state.color}`,
          margin: "20px auto",
          borderRadius: radius,
        }}
      ></div>
    );
  }
}
