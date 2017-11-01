import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

class Control extends Component {
  render() {
    let buttonPlay = this.props.controls.isRunning ? "Стоп" : "Пуск",
      buttonReCreate = this.props.forms.formVisible ? "disabled" : "",
      buttonVisible = this.props.forms.firstShow ? "disabled" : "";

    return (
      <div className="button-container">
        <button
          onClick={e => this.showFormForCreate(e)}
          className={buttonReCreate}
        >
          Пересоздать
        </button>
        <button onClick={e => this.clear(e)} className={buttonVisible}>
          Очистить
        </button>
        <button onClick={e => this.togglePlay(e)} className={buttonVisible}>
          {buttonPlay}
        </button>
        <button onClick={e => this.save(e)} className={buttonVisible}>
          Сохранить
        </button>
        <button onClick={e => this.load(e)}>Загрузить</button>
      </div>
    );
  }

  togglePlay(event) {
    event.preventDefault();
    if (this.props.controls.isRunning) {
      clearInterval(this.props.controls.timerId);
      this.props.action.stopPlaying();
    } else {
      let interval = setInterval(this.props.action.tick, 100);
      this.props.action.startPlaying(interval);
    }
  }

  clear(event) {
    event.preventDefault();
    if (this.props.controls.isRunning) {
      clearInterval(this.props.controls.timerId);
      this.props.action.stopPlaying();
    }
    this.props.action.clear();
  }

  save(event) {
    event.preventDefault();
    this.props.action.showFormForSave();
  }

  load(event) {
    event.preventDefault();
    this.props.action.showFormForLoad();
  }

  showFormForCreate(event) {
    event.preventDefault();
    this.props.action.showFormForCreate();
  }
}

function mapStateToProps(state) {
  return {
    board: state.boardReducer,
    forms: state.formsReducer,
    controls: state.controlReducer
  };
}

export default connect(mapStateToProps)(Control);
