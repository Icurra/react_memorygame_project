import "./GameItem.css";
import * as React from "react";

class GameItem extends React.Component {
  render() {
    console.log(this.props.value.content);
    return (
      <div className="GameItem-div" key={this.props.value.content + ""}>
        <p>{this.props.value.content}</p>
      </div>
    );
  }
}

export default GameItem;
