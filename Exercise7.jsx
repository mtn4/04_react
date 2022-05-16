import React from "react";

export class Card extends React.Component {
  render() {
    return (
      <div
        style={{
          border: "1px solid black",
          width: 250,
          height: 400,
          marginBottom: 100,
        }}
      >
        <img src={this.props.url} width="100%" height="150" alt="dasds"></img>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export class Exercise7 extends React.Component {
  render() {
    return (
      <div className="container">
        <Card
          url="https://static.timesofisrael.com/www/uploads/2018/07/iStock-467607415.jpg"
          title="dasdsadas"
          description="dasdsa"
          link=""
        />
        <Card
          url="https://static.timesofisrael.com/www/uploads/2018/07/iStock-467607415.jpg"
          title="70dds0"
          description="dasdmnbas"
          link=""
        />
        <Card
          url="https://static.timesofisrael.com/www/uploads/2018/07/iStock-467607415.jpg"
          title="dsd"
          description="dscxadas"
          link=""
        />
      </div>
    );
  }
}
