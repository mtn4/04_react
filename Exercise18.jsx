import axios from "axios";
import React from "react";

class Input extends React.Component {
  state = {
    value: this.props.data || "",
    name: this.props.name,
  };
  handleInputChange = async (e) => {
    this.setState({ value: e.target.value });
    this.props.onChange(e.target.value);
  };
  render() {
    return (
      <div className="input-wrap">
        <label htmlFor={this.props.name}>{this.props.name}</label>
        <input
          onChange={this.handleInputChange}
          value={this.state.value}
          type={this.props.type}
          name={this.props.name}
          id={this.props.name}
        />
      </div>
    );
  }
}

export class Exercise18 extends React.Component {
  state = { joke: "", categories: [] };
  onClickJoke = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    this.setState({ joke: response.data.value });
  };
  async componentDidMount() {
    const response = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    this.setState({ categories: response.data });
  }
  onClickJokeCategories = async (e) => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${e.currentTarget.name}`
    );
    this.setState({ joke: response.data.value });
  };
  handleInput = async (value) => {
    const { data } = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${value}`
    );
    const joke = data.result[Math.floor(Math.random() * 11)].value;
    this.setState({ joke: joke }, console.log(joke));
  };
  renderButtons = () => {
    return this.state.categories.map((category) => (
      <button
        onClick={this.onClickJokeCategories}
        name={category}
        key={category}
      >
        {category}
      </button>
    ));
  };
  render() {
    return (
      <div>
        <Input onChange={this.handleInput} />
        <button onClick={this.onClickJoke}>Random Joke</button>
        <div>{this.state.categories && this.renderButtons()}</div>
        <div>{this.state.joke}</div>
      </div>
    );
  }
}
