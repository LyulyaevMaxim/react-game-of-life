import React, { Component } from "react";
import Board from "../containers/board";
import Control from "../containers/control";
import Forms from "../containers/forms";

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>"Жизнь" на React</h1>
        </header>
        <Forms />
        <Board />
        <Control />
      </div>
    );
  }
}
