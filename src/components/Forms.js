import React, { Component } from "react";
import Board from "./Board";

export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      showBoard: false
    };
  }

  //вместо явной привязки контекста с помощью bind для доступа метода к this (файл Toggle.js)
  //можно воспользоваться анонимной функцией
  buttonClick = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible,
      showBoard: !prevState.showBoard
    }));
  };

  render() {
    return (
      <div>
        <div className={this.isVisible ? "hidden" : "popup board-definition"}>
          <p>Введите размеры поля:</p>
          <input
            name="width"
            className="width"
            placeholder="Ширина поля"
            required
          />
          <input
            name="height"
            className="height"
            placeholder="Высота поля"
            required
          />
          <button onClick={this.buttonClick}>Создать</button>
        </div>

        <Board row={3} column={5} isVisible={this.state.showBoard} />
      </div>
    );
  }
}
