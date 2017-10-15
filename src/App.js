import React, {Component} from "react";
import BoardContainer from "./components/Forms";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>"Жизнь" на React</h1>
        </header>
        <BoardContainer/>
      </div>
    );
  }
}

export default App;
