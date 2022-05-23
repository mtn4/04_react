import React from "react";
import data from "./data";

export class Card extends React.Component {
  render() {
    return (
      <>
        {this.props.seniors.map((person) => {
          const { name, birthday, favoriteFoods } = person;
          return (
            <p>{`${name} ${birthday} ${favoriteFoods.meats.join(
              ", "
            )} ${favoriteFoods.fish.join(", ")}`}</p>
          );
        })}
      </>
    );
  }
}

export class Name extends React.Component {
  render() {
    return (
      <>
        {this.props.names.map((name) => (
          <p>{name}</p>
        ))}
      </>
    );
  }
}

export class Exercise19 extends React.Component {
  state = { names: [], seniors: [] };
  getNames = (arr) => {
    return arr.map((obj) => obj.name);
  };
  preNineties = (arr) => {
    return arr.filter((obj) => obj.birthday.slice(-4) < 1990);
  };
  componentDidMount() {
    const names = this.getNames(data);
    const seniors = this.preNineties(data);
    this.setState({ names: names, seniors: seniors });
  }
  render() {
    return (
      <div>
        <Name names={this.state.names} />
        <Card seniors={this.state.seniors} />
      </div>
    );
  }
}
