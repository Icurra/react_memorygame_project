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
          content: "ichi",
          wasClicked: false,
        },
        {
          content: "ni",
          wasClicked: false,
        },
        {
          content: "san",
          wasClicked: false,
        },
        {
          content: "shi",
          wasClicked: false,
        },
        {
          content: "go",
          wasClicked: false,
        },
        {
          content: "roku",
          wasClicked: false,
        },
        {
          content: "shichi",
          wasClicked: false,
        },
        {
          content: "hachi",
          wasClicked: false,
        },
        {
          content: "kyuu",
          wasClicked: false,
        },
        {
          content: "juu",
          wasClicked: false,
        },
      ],
    };

    this.checkScore = this.checkScore.bind(this);
    this.randomizeNumbers = this.randomizeNumbers.bind(this);
  }

  checkScore(item) {
    if (item.wasClicked) {
      this.setState({
        score: 0,
        bestScore: this.state.score,
        numbers: this.randomizeNumbers(),
      });
    } else {
      this.state.numbers.forEach((num) => {
        if (item.content == num.content) {
          num.wasClicked = true;
        }
      });
      this.setState({
        score: this.state.score + 1,
        bestScore: this.state.score + 1,
        numbers: this.randomizeNumbers(),
      });
    }
  }

  randomizeNumbers() {
    let array = this.state.numbers;
    let index = this.state.numbers.length,
      temporaryIndex,
      randomIndex;

    while (0 !== index) {
      randomIndex = Math.floor(Math.random() * index);
      index -= 1;

      temporaryIndex = array[index];
      array[index] = array[randomIndex];
      array[randomIndex] = temporaryIndex;
    }

    return array;
  }

  componentDidMount() {
    let array = this.randomizeNumbers();
    this.setState({ numbers: array });
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
              return (
                <div key={num.content + ""}>
                  <GameItem value={num} method={this.checkScore} />
                </div>
              );
            })}
          </div>
        </section>
      </main>
    );
  }
}

export default App;
