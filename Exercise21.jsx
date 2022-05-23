import React from "react";

export class Exercise21 extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text" />
      </div>
    );
  }
}
