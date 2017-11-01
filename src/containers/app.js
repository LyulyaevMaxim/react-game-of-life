import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions/actions";

import Forms from "../components/forms";
import Board from "../components/board";
import Control from "../containers/control";

class App extends Component {
  render() {
    const formsState = this.props.forms;
    return (
      <div>
        <header>
          <h1>"Жизнь" на React</h1>
        </header>
        <Forms visible={formsState.formVisible} action={this.props.Actions} />
        <Board visible={formsState.boardVisible} action={this.props.Actions} />
        <Control action={this.props.Actions} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    forms: state.formsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
