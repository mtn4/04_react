import React from "react";

export class Exercise11 extends React.Component {
  state = { favoriteColor: "blue" };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        favoriteColor: "green",
      });
    }, 1000);
  }

  componentDidUpdate() {
    const update = document.getElementById("update");
    update.innerText = `The updated favorite color is ${this.state.favoriteColor}`;
  }

  render() {
    return (
      <div>
        <h1 id="update" style={{ color: `${this.state.favoriteColor}` }}>
          My favorite color is {this.state.favoriteColor}
        </h1>
      </div>
    );
  }
}
