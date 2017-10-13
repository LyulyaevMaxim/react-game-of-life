import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.props = { isVisible: false };
  }

  render() {
    const GRID_HEIGHT = this.props.row,
      GRID_WIDTH = this.props.column,
      initialGrid = makeGrid(GRID_HEIGHT, GRID_WIDTH);

    if (!this.props.isVisible) {
      return null;
    } else return <div className="Board ">1</div>;
  }
}

Board.propTypes = {
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired
};

function makeGrid(height, width) {
  let grid = [];
  for (var i = 0; i < height; i++) {
    var row = [];
    for (var j = 0; j < width; j++) {
      let value;
      row.push({
        status: value,
        newBorn: value
      });
    }
    grid.push(row);
  }
  return grid;
}

function cell(width) {
  // {alive, newBorn, handleClick}
  return (
    <td
    // onClick={handleClick}
    // className={`${alive ? 'alive' : ''} ${newBorn ? 'new-born' : ''}`}
    />
  );
}
