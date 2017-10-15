import React, {Component} from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import Toggle from "./Toggle";

export default class BoardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formVisible: true,
      showBoard: false,
      firstShow: true,
      boardArray: []
    };
  }

  // вместо явной привязки контекста с помощью bind для доступа метода к this
  // (файл Toggle.js) можно воспользоваться анонимной функцией
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(prevState => ({
      formVisible: false,
      showBoard: true,
      firstShow: false,
      boardArray: makeGrid(ReactDOM.findDOMNode(this.refs.boardRow).value, ReactDOM.findDOMNode(this.refs.boardColumn).value)
    }));
  };

  componentDidMount = () => {
    ReactDOM
      .findDOMNode(this.refs.boardColumn)
      .focus();
  }

  formShowOrHide = (event) => {
    event.preventDefault();
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  };

  render() {
    let formClass = this.state.formVisible
        ? "popup board-definition"
        : "hidden",
      showFormButton = this.state.formVisible
        ? "hidden"
        : "button-container",
      showFormСontinueButton = this.state.firstShow
        ? "hidden"
        : "";
    return (
      <main>
        <form className={formClass} onSubmit={this.handleSubmit}>
          <p>Введите размеры поля:</p>
          <input
            className="column"
            placeholder="Ширина поля"
            defaultValue=''
            ref='boardColumn'
            type="number"
            min="1"
            required/>
          <input
            className="row"
            placeholder="Высота поля"
            defaultValue=''
            ref='boardRow'
            type="number"
            min="1"
            required/>
          <button type="submit">Создать</button>
          <button onClick={this.formShowOrHide} className={showFormСontinueButton}>Продолжить</button>
        </form>

        <div className={showFormButton}>
          <Toggle/>
          <button className="show-form-button" onClick={this.formShowOrHide}>Показать форму</button>
        </div>

        <Board boardArray={this.state.boardArray} isVisible={this.state.showBoard}/>
      </main>
    );
  }
}

function makeGrid(height, width) {
  let grid = [];
  for (var i = 0; i < height; i++) {
    var row = [];
    for (var j = 0; j < width; j++) {
      row.push(0);
    }
    grid.push(row);
  }
  return grid;
}
