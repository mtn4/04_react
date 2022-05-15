import React from "react";

export class Exercise2 extends React.Component {
  render() {
    const data = ["hello", "world"];
    const number1 = 5;
    const number2 = 6;
    const string = "I love React!";

    return (
      <div className="App">
        <p>{`${data[0].charAt(0).toUpperCase() + data[0].substring(1)} ${
          data[1].charAt(0).toUpperCase() + data[1].substring(1)
        }`}</p>
        <p>{`${number1} + ${number2} = ${number1 + number2}`}</p>
        <p>{`The string’s "${string}" length is ${string.length}`}</p>
      </div>
    );
  }
}
