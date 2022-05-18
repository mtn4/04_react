import React from "react";

class TextArea extends React.Component {
  state = { term: "" };
  handleInputChange = (e) => {
    const target = e.target;
    this.setState((state) => {
      return { term: target.value };
    });
    this.props.onChange(target.name, target.value);
  };
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <textarea
          name={this.props.name}
          cols="30"
          rows="5"
          value={this.state.term}
          onChange={this.handleInputChange}
        ></textarea>
      </div>
    );
  }
}

class Input extends React.Component {
  state = { term: "" };
  handleInputChange = (e) => {
    const target = e.target;
    this.setState((state) => {
      return { term: target.value };
    });
    this.props.onChange(target.name, target.value);
  };
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          name={this.props.name}
          type="text"
          value={this.state.term}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
class Select extends React.Component {
  state = { option: "" };
  handleInputChange = (e) => {
    const target = e.target;
    this.setState((state) => {
      return { option: target.value };
    });
    this.props.onChange(target.name, target.value);
  };
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <select
          name={this.props.name}
          id=""
          value={this.state.option}
          onChange={this.handleInputChange}
        >
          <option value="0-15">0-15</option>
          <option value="16-30">16-30</option>
          <option value="31-45">31-45</option>
        </select>
      </div>
    );
  }
}

// class Sent extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Form Sent Successfully</h1>
//       </div>
//     );
//   }
// }
class BeforeConfirm extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.first} {this.props.last}
        </h1>
        <h3>Age: {this.props.select}</h3>
        <p>
          Text: <br /> {this.props.text}
        </p>
        <br />
        <button>Confirm</button>
        <button onClick={this.props.onButtonClick}>Back</button>
      </div>
    );
  }
}

export class Exercise17 extends React.Component {
  //   onFormSubmit = () => {};
  state = { first: "", last: "", select: "", text: "", submitted: false };

  handleOnChange = (name, value) => {
    // console.log(name, value);
    this.setState((state) => {
      return { [name]: value };
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (e.type === "submit") {
      this.setState({ submitted: true });
    }
    if (e.type === "click") {
      this.setState({ submitted: false });
    }

    // console.log(e);
  };
  render() {
    return (
      <div>
        {this.state.submitted ? (
          <BeforeConfirm
            first={this.state.first}
            last={this.state.last}
            select={this.state.select}
            text={this.state.text}
            onButtonClick={this.handleSubmit}
          />
        ) : (
          <form onSubmit={this.handleSubmit}>
            <Input
              name="first"
              label="First Name:"
              onChange={this.handleOnChange}
            />
            <Input
              name="last"
              label="Last Name:"
              onChange={this.handleOnChange}
            />
            <Select name="select" label="Age:" onChange={this.handleOnChange} />
            <TextArea
              name="text"
              label="Free Text:"
              onChange={this.handleOnChange}
            />
            <div>
              <button>Submit</button>
            </div>
          </form>
        )}
      </div>
    );
  }
}
