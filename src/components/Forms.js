import React, {Component} from "react";
import Board from "./Board";
import Toggle from "./Toggle";

export default class BoardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formVisible: true,
      showBoard: false,
      firstShow: true,
      boardRow: 0,
      boardColumn: 0
    };
  }

  // вместо явной привязки контекста с помощью bind для доступа метода к this
  // (файл Toggle.js) можно воспользоваться анонимной функцией
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(prevState => ({formVisible: false, showBoard: true, firstShow: false}));
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // changeColumn = (event) => {   this.setState({column: event.target.value}); }

  formShowOrHide = () => {
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
            name="boardColumn"
            className="column"
            placeholder="Ширина поля"
            onChange={this.handleInputChange}
            type="number"
            min="1"
            required/>
          <input
            name="boardRow"
            className="row"
            placeholder="Высота поля"
            onChange={this.handleInputChange}
            type="number"
            min="1"
            required/>
          <button type="submit">Создать</button>
          <button onClick={this.formShowOrHide} className={showFormСontinueButton}>Продолжить</button>
        </form>

        <div className={showFormButton}>
          <Toggle/>
          <div className="show-form-button" onClick={this.formShowOrHide}>Показать форму</div>
        </div>

        <Board
          row={this.state.boardRow}
          column={this.state.boardColumn}
          isVisible={this.state.showBoard}/>
      </main>
    );
  }
}
