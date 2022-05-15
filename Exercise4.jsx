import React from "react";

export class Exercise4 extends React.Component {
  render() {
    const QuizTitle = () => {
      return (
        <div className="quizTitle">
          <h3>How do you like frontend</h3>
        </div>
      );
    };
    const Quiz = () => {
      return (
        <div className="quiz">
          <QuizTitle />
          <Q1 />
          <Q2 />
        </div>
      );
    };
    const Q2Title = () => {
      return (
        <div className="q2Title">
          <h5>What is your favourite front end feature/topic?</h5>
        </div>
      );
    };
    const Q2Input = () => {
      return (
        <div className="q2Input">
          <input type="text"></input>
        </div>
      );
    };
    const Q2 = () => {
      return (
        <div className="q2">
          <Q2Title />
          <Q2Input />
        </div>
      );
    };
    const Q1Title = () => {
      return (
        <div className="q1Title">
          <h5>How much do you love frontend</h5>
        </div>
      );
    };
    const Q1 = () => {
      return (
        <div className="q1">
          <Q1Title />
          <Q1Input />
        </div>
      );
    };
    const Q1Input = () => {
      return (
        <div className="q1Input">
          <input type="range"></input>
        </div>
      );
    };
    return (
      <div className="App">
        <Quiz />
      </div>
    );
  }
}
