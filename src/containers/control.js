import React, { Component } from "react";
import { connect } from "react-redux";


class Control extends Component {
  render() {
    let buttonContent = this.props.board.isRunning ? "Стоп" : "Пуск";
    return (
      <div className="button-container">
        <button onClick={() => this.clear()}>Очистить</button>
        <button onClick={() => this.togglePlay()}>
          {buttonContent}
        </button>
      </div>
    );
  }

  togglePlay() {
    if (this.props.board.isRunning) {
      clearInterval(this.props.board.timerId);
      this.props.action.stopPlaying();
    } else {
      let interval = setInterval(this.props.action.tick, 100);
      this.props.action.startPlaying(interval);
    }
  }

  clear() {
    if (this.props.board.isRunning) {
      clearInterval(this.props.board.timerId);
      this.props.action.stopPlaying();
    }
    this.props.action.clear();
  }
}

function mapStateToProps(state) {
  return {
    board: state.boardReducer
  };
}

export default connect(mapStateToProps)(Control);
