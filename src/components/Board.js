import React, {Component} from "react";
import Cell from "./Cell";

export default class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let initialGrid = this.props.boardArray;
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
