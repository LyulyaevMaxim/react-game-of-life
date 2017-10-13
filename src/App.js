import React, { Component } from "react";
import Forms from "./components/Forms";
import Toggle from "./components/Toggle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>"Жизнь" на React</h1>
        </header>
        <Forms />
        <Toggle />
      </div>
    );
  }
}

export default App;
