import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

class Forms extends Component {
  constructor(props) {
    super(props);
  }

  createBoard(event) {
    event.preventDefault();
    this.props.action.createBoard(
      ReactDOM.findDOMNode(this.refs.boardColumn).value,
      ReactDOM.findDOMNode(this.refs.boardRow).value
    );
  }

  hideFormForCreate(event) {
    event.preventDefault();
    this.props.action.hideFormForCreate();
  }

  componentDidMount = () => {
    ReactDOM.findDOMNode(this.refs.boardColumn).focus();
  };

  render() {
    let formClass = this.props.visible ? "popup board-definition" : "hidden",
      showFormСontinueButton = this.props.board.firstShow ? "hidden" : "";

    return (
      <form className={formClass} onSubmit={this.createBoard.bind(this)}>
        <p>Введите размеры поля:</p>
        <input placeholder="Ширина поля" defaultValue="" min="1"
          ref="boardColumn" type="number" required />
        <input placeholder="Высота поля" defaultValue="" min="1"
          ref="boardRow" type="number" required />
        <button type="submit">Создать</button>
        <button
          onClick={(e) => this.hideFormForCreate(e)}
          className={showFormСontinueButton}>Продолжить</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    board: state.boardReducer
  };
}

export default connect(mapStateToProps)(Forms);