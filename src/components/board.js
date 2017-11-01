import React, { Component } from "react";
import { connect } from "react-redux";

class Board extends Component {
  render() {
    let boardArray = this.props.myState.board,
      boardClass = this.props.forms.isRunning ? "block" : "";
    return (
      <div className={`board ${boardClass}`}>
        <table>
          <tbody>
            {boardArray.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <Cell
                    key={j}
                    alive={cell.status}
                    newBorn={cell.newBorn}
                    handleClick={() => this.props.action.toggleAlive(i, j)}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function Cell({ alive, newBorn, handleClick }) {
  return (
    <td
      onClick={handleClick}
      className={`${alive ? "alive" : ""} ${newBorn ? "new-born" : ""}`}
    />
  );
}

const mapStateToProps = state => {
  return {
    myState: state.boardReducer,
    forms: state.formsReducer,
    controls: state.controlReducer
  };
};

export default connect(mapStateToProps)(Board);
