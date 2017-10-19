import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { createBoard, reCreateBoard } from "../actions/";

export let GRID_HEIGHT = 0;
export let GRID_WIDTH = 0;

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: true,
      boardVisible: false,
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
        <button onClick={() => this.createBoard()} type="submit">
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

  createBoard() {
    GRID_HEIGHT = ReactDOM.findDOMNode(this.refs.boardColumn).value;
    GRID_WIDTH = ReactDOM.findDOMNode(this.refs.boardRow).value;
    //теперь надо обратится к reducer_board
  }
}

const mapStateToProps = ({ forms }) => {
  return { forms };
};

const mapDispatchToProps = dispatch => {
  return {
    createBoard: (x, y) => dispatch(createBoard(x, y))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
