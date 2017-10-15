import React, {Component} from "react";
import Cell from "./Cell";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BoardArray: makeGrid(2, 2)
    };
  }

  /*componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }*/

  /*componentWillUnmount() {
    clearInterval(this.timerID);
  }*/

  /*tick() {
    this.setState({date: new Date()});
  }*/

  render() {
    let initialGrid = makeGrid(this.props.row, this.props.column);
    let index = -1;

    let boardBody = initialGrid.map(function () {
      index++;
      let subindex = -1;
      let boardLine = initialGrid[index].map(function () {
        subindex++;
        return <Cell key={index.toString() + ":" + subindex.toString()}/>;
      });

      return <tr key={index}>
        {boardLine}
      </tr>
    });

    if (this.props.isVisible) {
      return <table className="board">{boardBody}
      </table>;
    } else 
      return null;
    }
  }

function makeGrid(height, width) {
  let grid = [];
  for (var i = 0; i < height; i++) {
    var row = [];
    for (var j = 0; j < width; j++) {
      row.push(0);
    }
    grid.push(row);
  }
  return grid;
}
