import React, { Component } from "react";
import ReactDOM from "react-dom";
// import { connect } from "react-redux";

export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardVisible: false,
      firstShow: true
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    // this.setState(prevState => ({
    // formVisible: false,
    // showBoard: true,
    // firstShow: false
    // }));
    //
  };

  createBoard(e) {
    this.props.action.createBoard(
      ReactDOM.findDOMNode(this.refs.boardColumn).value,
      ReactDOM.findDOMNode(this.refs.boardRow).value
    );
  }

  componentDidMount = () => {
    ReactDOM.findDOMNode(this.refs.boardColumn).focus();
  };

  formShowOrHide = event => {
    event.preventDefault();
    // this.setState(prevState => ({
    //   formVisible: !prevState.formVisible
    // }));
  };

  render() {
    let formClass = this.props.visible ? "popup board-definition" : "hidden",
      showFormСontinueButton = this.state.firstShow ? "hidden" : "";
    return (
      <form className={formClass} onSubmit={this.handleSubmit}>
        <p>Введите размеры поля:</p>
        <input
          className="column"
          placeholder="Ширина поля"
          defaultValue=""
          min="1"
          ref="boardColumn"
          type="number"
          required
        />
        <input
          className="row"
          placeholder="Высота поля"
          defaultValue=""
          min="1"
          ref="boardRow"
          type="number"
          required
        />
        <button onClick={this.createBoard.bind(this)} type="submit">
          Создать
        </button>
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

