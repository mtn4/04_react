import React from "react";

class Input extends React.Component {
  render() {
    return (
      <div className="Input">
        <label className="input-label">{this.props.inputName}</label>
        <input
          onChange={this.props.handleChange}
          type={this.props.inputType}
          name={this.props.inputName}
          checked={this.props.isChecked}
        ></input>
      </div>
    );
  }
}

export class Exercise16 extends React.Component {
  state = { input1: true, input2: false, input3: false, input4: true };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  createInputs = () => {
    const inputs = ["input1", "input2", "input3", "input4"];
    return inputs.map((inputName) => {
      return (
        <Input
          handleChange={this.handleChange}
          inputType="checkbox"
          inputName={inputName}
          isChecked={this.state[inputName]}
        />
      );
    });
  };
  render() {
    return <div className="container">{this.createInputs()}</div>;
  }
}
