import React from "react";

export class Exercise22 extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  handleClick = () => {
    this.inputRef.current.select();
    document.execCommand("copy");
  };
  render() {
    return (
      <div>
        <textarea cols="30" rows="10" ref={this.inputRef}></textarea>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}
