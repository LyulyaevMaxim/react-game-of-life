import React, {Component} from "react";

/*export default({alive, newBorn, handleClick}) => (
  <td
    onClick={handleClick}
    className={`${alive
    ? 'alive'
    : ''} ${newBorn
      ? 'new-born'
      : ''}`}></td>
)*/

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLive: false
    };
  }

  isWillLived = (event) => {
    event.preventDefault();
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