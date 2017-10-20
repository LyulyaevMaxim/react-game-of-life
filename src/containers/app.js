import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions";

import Forms from "../components/forms";
import Board from "../components/board";
import Control from "../containers/control";

class App extends Component {
  render() {
    const board = this.props.board;
    return (
      <div>
        <header>
          <h1>"Жизнь" на React</h1>
        </header>
        <Forms visible={board.formVisible} action={this.props.Actions} />
        <Board visible={board.boardVisible} action={this.props.Actions} />
        <Control action={this.props.Actions} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    board: state.boardReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
