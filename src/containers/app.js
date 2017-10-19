import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions";

import Forms from "../components/forms";
import Board from "../components/board";
import Control from "../containers/control";

class App extends Component {
  render() {
    const board = this.props.board,
      form = this.props.form;
    return (
      <div>
        <header>
          <h1>"Жизнь" на React {this.props.boardVisible}</h1>
        </header>
        <Forms visible={form.formVisible} setSizes={this.props.Actions} />
        <Board visible={board.boardVisible} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    form: state.formsReducer,
    board: state.boardReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
