import React, {Component} from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLive: false
    };
  }

  isWillLived = () => {
    this.setState(prevState => ({
      isLive: !prevState.isLive
    }));
  };

  render() {
    let CellState = this.state.isLive
      ? "active"
      : "";
    return (
      <td onClick={this.isWillLived} className={CellState}></td>
    )
  }
}
