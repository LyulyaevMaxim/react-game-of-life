import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleAlive } from "../actions/";
import Cell from "../components/cell";

class Board extends Component {
  render() {
    let boardVisible = this.props.boardVisible ? "board" : "hidden";

    return (
      <div className="board ">
        <table>
          <tbody />
        </table>
      </div>
    );
  }
}

/*
{this.props.board.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <Cell
                    key={j}
                    alive={cell.status}
                    newBorn={cell.newBorn}
                    handleClick={() => this.props.toggleAlive(i, j)}
                  />
                ))}
              </tr>
            ))}
      */

function mapStateToProps(state) {
  return {
    boardVisible: state.boardReducer.boardVisible,
    board: state.Board
  };
}

// const mapStateToProps = ({ board }) => {
//   return { board };
// };

const mapDispatchToProps = dispatch => {
  return {
    toggleAlive: (x, y) => dispatch(toggleAlive(x, y))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
