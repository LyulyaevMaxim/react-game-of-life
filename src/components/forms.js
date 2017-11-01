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

  savePlay(event) {
    event.preventDefault();
    this.props.action.savePlay(
      ReactDOM.findDOMNode(this.refs.saveNickname).value
    );
  }

  loadPlay(event) {
    event.preventDefault();
    this.props.action.loadPlay(
      ReactDOM.findDOMNode(this.refs.loadNickname).value
    );
  }

  hideFormForCreate(event) {
    event.preventDefault();
    this.props.action.hideFormForCreate();
  }

  hideFormForSave(event) {
    event.preventDefault();
    this.props.action.hideFormForSave();
  }

  hideFormForLoad(event) {
    event.preventDefault();
    this.props.action.hideFormForLoad();
  }

  componentDidMount = () => {
    ReactDOM.findDOMNode(this.refs.boardColumn).focus();
  };

  render() {
    let formClass = this.props.visible ? "popup board-definition" : "hidden",
      formForSaveClass = this.props.forms.formForSaveVisible
        ? "popup board-definition"
        : "hidden",
      formForLoadClass = this.props.forms.formForLoadVisible
        ? "popup board-definition"
        : "hidden",
      showFormСontinueButton = this.props.forms.firstShow ? "hidden" : "";

    return (
      <div>
        <form className={formClass} onSubmit={this.createBoard.bind(this)}>
          <p>Введите размеры поля:</p>
          <input
            placeholder="Ширина поля"
            defaultValue=""
            min="1"
            ref="boardColumn"
            type="number"
            required
          />
          <input
            placeholder="Высота поля"
            defaultValue=""
            min="1"
            ref="boardRow"
            type="number"
            required
          />
          <button type="submit">Создать</button>
          <button
            onClick={e => this.hideFormForCreate(e)}
            className={showFormСontinueButton}
          >
            Продолжить
          </button>
        </form>

        <form className={formForSaveClass} onSubmit={this.savePlay.bind(this)}>
          <p>Введите ваше имя</p>
          <input
            placeholder="Ваше имя"
            defaultValue=""
            ref="saveNickname"
            required
          />
          <button type="submit">Сохранить</button>
          <button onClick={e => this.hideFormForSave(e)}>Продолжить</button>
        </form>

        <form className={formForLoadClass} onSubmit={this.loadPlay.bind(this)}>
          <p>Введите имя, которое использовали</p>
          <input
            placeholder="Ваше имя было.."
            defaultValue=""
            ref="loadNickname"
            required
          />
          <button type="submit">Загрузить</button>
          <button onClick={e => this.hideFormForLoad(e)}>Продолжить</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    board: state.boardReducer,
    forms: state.formsReducer,
    controls: state.controlReducer
  };
}

export default connect(mapStateToProps)(Forms);
