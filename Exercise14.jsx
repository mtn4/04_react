import React from "react";
import "./Exercise14.css";

const Spinner1 = () => {
  return (
    <div className="loadingio-spinner-spinner-g7hwaosxjhk">
      <div className="ldio-kljnyuustni">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

const Spinner2 = () => {
  return (
    <div className="loadingio-spinner-eclipse-0703352a282t">
      <div className="ldio-mq909l0ffq">
        <div></div>
      </div>
    </div>
  );
};

const Spinner3 = () => {
  return (
    <div className="loadingio-spinner-ripple-zcyan7pxtl">
      <div className="ldio-86jmdpbz3fm">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

const Spinner = (props) => {
  if (props.type === "1") {
    return <Spinner1 />;
  }
  if (props.type === "2") {
    return <Spinner2 />;
  }
  if (props.type === "3") {
    return <Spinner3 />;
  }
};
export class Exercise14 extends React.Component {
  state = { disp: false };
  componentDidMount() {
    this.setState(() => {
      return { disp: true };
    });
    setTimeout(() => {
      this.setState(() => {
        return { disp: false };
      });
    }, 3000);
  }
  render() {
    const disp = this.state.disp;
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let rand = getRandomIntInclusive(1, 3);
    let spin;
    if (disp === true) {
      spin = <Spinner type={`${rand}`} />;
    } else {
      spin = null;
    }
    return <div>{spin}</div>;
  }
}
