import React from "react";

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };

    // методы класса, по умолчанию, не привязаны к нему поэтому без подобной
    // привязки вызов onClick={this.buttonClick} увидит this как undefined  (другой
    // вариант - в файле Forms.js)
    this.handleClick = this
      .handleClick
      .bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  nextGeneration = () => {
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 15; j++) {}
    }
  }

  render() {
    return (
      <button onClick={this.nextGeneration}>
        {this.state.isToggleOn
          ? "Пуск"
          : "Пауза"}
      </button>
    );
  }
}
