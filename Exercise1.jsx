import React from "react";

export class Exercise1 extends React.Component {
  render() {
    document.title = "AppleSeeds";
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Me
          </a>
        </header>
      </div>
    );
  }
}
