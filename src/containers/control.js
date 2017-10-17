import React, { Component } from "react";
import { connect } from "react-redux";
import { tick, startPlaying, stopPlaying, clear } from "../actions/";

class Control extends Component {
  render() {
    return (
      <div className="button-container">
        <button onClick={() => this.clear()}>Очистить</button>
        <button onClick={() => this.togglePlay()}>
          {this.props.playState.isRunning ? "Стоп" : "Пуск"}
        </button>
      </div>
    );
  }

  togglePlay() {
    if (this.props.playState.isRunning) {
      clearInterval(this.props.playState.timerId);
      this.props.stopPlaying();
    } else {
      let interval = setInterval(this.props.tick, 100);
      this.props.startPlaying(interval);
    }
  }

  clear() {
    if (this.props.playState.isRunning) {
      clearInterval(this.props.playState.timerId);
      this.props.stopPlaying();
    }
    this.props.clear();
  }
}

const mapStateToProps = ({ playState }) => {
  return { playState };
};

const mapDispatchToProps = dispatch => {
  return {
    tick: () => dispatch(tick()),
    startPlaying: timerId => dispatch(startPlaying(timerId)),
    stopPlaying: () => dispatch(stopPlaying()),
    clear: () => dispatch(clear())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Control);
