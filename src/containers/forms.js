import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: true,
      showBoard: false,
      firstShow: true
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(prevState => ({
      formVisible: false,
      showBoard: true,
      firstShow: false
    }));
  };

  componentDidMount = () => {
    ReactDOM.findDOMNode(this.refs.boardColumn).focus();
  };

  formShowOrHide = event => {
    event.preventDefault();
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  };

  render() {
    let formClass = this.state.formVisible
        ? "popup board-definition"
        : "hidden",
      showFormButton = this.state.formVisible ? "hidden" : "button-container",
      showFormСontinueButton = this.state.firstShow ? "hidden" : "";
    return (
      <form className={formClass} onSubmit={this.handleSubmit}>
        <p>Введите размеры поля:</p>
        <input
          className="column"
          placeholder="Ширина поля"
          defaultValue=""
          ref="boardColumn"
          type="number"
          min="1"
          required
        />
        <input
          className="row"
          placeholder="Высота поля"
          defaultValue=""
          ref="boardRow"
          type="number"
          min="1"
          required
        />
        <button type="submit">Создать</button>
        <button
          onClick={this.formShowOrHide}
          className={showFormСontinueButton}
        >
          Продолжить
        </button>
      </form>
    );
  }
}
