import "./App.css";
import * as React from "react";
import GameItem from "./components/GameItem";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      bestScore: 0,
      numbers: [
        {
          content: 0,
          wasClicked: false,
        },
        {
          content: 1,
          wasClicked: false,
        },
        {
          content: 2,
          wasClicked: false,
        },
        {
          content: 3,
          wasClicked: false,
        },
        {
          content: 4,
          wasClicked: false,
        },
        {
          content: 5,
          wasClicked: false,
        },
        {
          content: 6,
          wasClicked: false,
        },
        {
          content: 7,
          wasClicked: false,
        },
        {
          content: 8,
          wasClicked: false,
        },
        {
          content: 9,
          wasClicked: false,
        },
      ],
    };
  }
  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>React Memory Game</h1>
          <p>Click on one of the numbers to get started!</p>
          <div className="App-scoreboard">
            <span>Score: {this.state.score}</span>
            <span>Best Score: {this.state.bestScore}</span>
          </div>
        </header>
        <section className="App-container">
          <div className="App-item-container">
            {this.state.numbers.map((num) => {
              return <GameItem value={num} />;
            })}
          </div>
        </section>
      </main>
    );
  }
}

export default App;
