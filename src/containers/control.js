import React, { Component } from "react";
import { connect } from "react-redux";


class Control extends Component {
  render() {
    let buttonPlay = this.props.board.isRunning ? "Стоп" : "Пуск",
      buttonReCreate = this.props.board.formVisible ? "disabled" : "";
    return (
      <div className="button-container">
        <button onClick={(e) => this.showFormForCreate(e)} className={buttonReCreate}>Пересоздать</button>
        <button onClick={(e) => this.clear(e)}>Очистить</button>
        <button onClick={(e) => this.togglePlay(e)}>
          {buttonPlay}
        </button>
        <button onClick={(e) => this.save(e)}>Сохранить</button>
        <button onClick={(e) => this.load(e)}>Загрузить</button>
      </div>
    );
  }

  togglePlay(event) {
    event.preventDefault();
    if (this.props.board.isRunning) {
      clearInterval(this.props.board.timerId);
      this.props.action.stopPlaying();
    } else {
      let interval = setInterval(this.props.action.tick, 100);
      this.props.action.startPlaying(interval);
    }
  }

  clear(event) {
    event.preventDefault();
    if (this.props.board.isRunning) {
      clearInterval(this.props.board.timerId);
      this.props.action.stopPlaying();
    }
    this.props.action.clear();
  }

  save(event) {
    event.preventDefault();
    this.props.action.savePlay("maxim");
  }

  load(event) {
    event.preventDefault();
    this.props.action.loadPlay("maxim");
  }

  showFormForCreate(event) {
    event.preventDefault();
    this.props.action.showFormForCreate();
  }
}

function mapStateToProps(state) {
  return {
    board: state.boardReducer
  };
}

export default connect(mapStateToProps)(Control);
