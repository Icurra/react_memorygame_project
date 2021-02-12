import "./GameItem.css";
import * as React from "react";

class GameItem extends React.Component {
  render() {
    return (
      <div
        className="GameItem-div"
        style={{ backgroundColor: "#" + this.props.color }}
        onClick={() => this.props.method(this.props.value)}
      >
        <p>{this.props.value.content}</p>
      </div>
    );
  }
}

export default GameItem;
