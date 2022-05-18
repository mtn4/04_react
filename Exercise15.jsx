import React from "react";

class CustomButton extends React.Component {
  render() {
    return (
      <button
        onClick={() => this.props.handleClick(this.props.color)}
        style={{
          padding: 20,
          backgroundColor: `${this.props.color}`,
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        {this.props.color}
      </button>
    );
  }
}
export class Exercise15 extends React.Component {
  state = { colorName: "" };
  createCustomButtons = () => {
    const colors = ["blue", "red", "yellow"];
    return colors.map((color) => {
      return <CustomButton color={color} handleClick={this.handleClick} />;
    });
  };
  handleClick = (data) => {
    console.log("dsadsa");
    this.setState({ colorName: data });
  };
  render() {
    return (
      <div>
        {this.createCustomButtons()}
        <div style={{ fontSize: 24, fontWeight: 700 }}>
          {`The color selected is: ${this.state.colorName}`}
        </div>
      </div>
    );
  }
}
