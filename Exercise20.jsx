import axios from "axios";
import React from "react";

class Input extends React.Component {
  render() {
    return (
      <div className="searchInput">
        <label className="searchInput--label">{this.props.labelName}</label>
        <input
          className="searchInput--info"
          onChange={this.props.handleInput}
          type="text"
          value={this.props.userValue}
        ></input>
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img
          className="cardImg"
          src={this.props.imgSrc}
          alt={this.props.title}
        ></img>
        <div className="cardInfo">
          <h1>{this.props.title}</h1>
        </div>
      </div>
    );
  }
}

class AvatarList extends React.Component {
  state = { avatars: [] };

  componentDidUpdate(prevProps) {
    if (prevProps.userValue !== this.props.userValue) {
      this.setState({
        avatars: this.filterData(this.props.avatars, this.props.userValue),
      });
    } else if (prevProps.avatars !== this.props.avatars) {
      this.setState({
        avatars: this.props.avatars,
      });
    }
  }

  filterData = (arrOfData, userInput) => {
    return arrOfData.filter((avatar) => {
      return avatar.name.toLowerCase().includes(userInput.toLowerCase());
    });
  };

  displayAvatars = () => {
    return this.state.avatars.map((avatar) => {
      return (
        <Card key={avatar.id} title={avatar.name} imgSrc={avatar.imgUrl} />
      );
    });
  };
  render() {
    return <div className="avatar-list">{this.displayAvatars()}</div>;
  }
}

export class Exercise20 extends React.Component {
  state = {
    data: [],
    value: "",
    isError: false,
    errMsg: "",
  };
  async componentDidMount() {
    const response = await axios.get("https://randomuser.me/api/?results=10");
    const dataLite = response.data.results.map((e) => {
      return {
        name: `${e.name.first} ${e.name.last}`,
        imgUrl: e.picture.medium,
        id: e.login.uuid,
      };
    });
    this.setState({
      data: dataLite,
    });
  }
  handleInput = ({ target: { value } }) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <div className="container">
        <Input
          handleInput={this.handleInput}
          userValue={this.state.value}
          labelName="Search: "
        />
        <AvatarList avatars={this.state.data} userValue={this.state.value} />
      </div>
    );
  }
}
