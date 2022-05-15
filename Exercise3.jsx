import React from "react";

export class Exercise3 extends React.Component {
  render() {
    const BoxOneComponent = () => (
      <div className="green-background">
        <BoxTwoComponent />
      </div>
    );

    const BoxTwoComponent = () => (
      <div className="blue-background">
        <BoxThreeComponent />
      </div>
    );

    const BoxThreeComponent = () => (
      <div className="pink-background">
        <BoxFourComponent />
        <BoxFourComponent />
      </div>
    );

    const BoxFourComponent = () => <div className="purple-background"></div>;

    return (
      <div className="app-container">
        <BoxOneComponent />
      </div>
    );
  }
}
