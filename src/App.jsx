import "./App.css";
import * as React from "react";
import GameItem from "./components/GameItem";
import Congratulations from "./components/Congratulations";

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
          color: this.randomHEX(),
        },
        {
          content: "ni",
          wasClicked: false,
          color: this.randomHEX(),
        },
        {
          content: "san",
          wasClicked: false,
          color: this.randomHEX(),
        },
        {
          content: "shi",
          wasClicked: false,
          color: this.randomHEX(),
        },
        {
          content: "go",
          wasClicked: false,
          color: this.randomHEX(),
        },
        {
          content: "roku",
          wasClicked: false,
          color: this.randomHEX(),
        },
        {
          content: "shichi",
          wasClicked: false,
          color: this.randomHEX(),
        },
        {
          content: "hachi",
          wasClicked: false,
          color: this.randomHEX(),
        },
        {
          content: "kyuu",
          wasClicked: false,
          color: this.randomHEX(),
        },
        {
          content: "juu",
          wasClicked: false,
          color: this.randomHEX(),
        },
      ],
    };

    this.checkScore = this.checkScore.bind(this);
    this.randomizeNumbers = this.randomizeNumbers.bind(this);
  }

  randomHEX() {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  flashCongratulations() {
    const congrats = document.getElementById("congratulations");
    congrats.classList.toggle("show-congrats");
    setTimeout(() => congrats.classList.toggle("show-congrats"), 5000);
  }

  checkScore(item) {
    let tempArray = this.randomizeNumbers();
    // User is still playing
    if (item.wasClicked) {
      // User has lost and the game resets
      tempArray.forEach((item) => {
        item.wasClicked = false;
      });
      this.setState({
        score: 0,
        bestScore:
          this.state.bestScore > this.state.score
            ? this.state.bestScore
            : this.state.score,
        numbers: tempArray,
      });
    } else {
      if (this.state.score === 9) {
        // User has won the game
        tempArray.forEach((item) => {
          item.wasClicked = false;
        });
        this.setState({
          score: 0,
          bestScore: 10,
          numbers: tempArray,
        });
        this.flashCongratulations();
      } else {
        // User is still playing, mark the item as 'clicked'
        // Continue playing
        this.state.numbers.forEach((num) => {
          if (item.content == num.content) {
            num.wasClicked = true;
          }
        });
        this.setState({
          score: this.state.score + 1,
          bestScore:
            this.state.bestScore > this.state.score
              ? this.state.bestScore
              : this.state.score + 1,
          numbers: tempArray,
        });
      }
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
      array[index].color = this.randomHEX();
      array[randomIndex] = temporaryIndex;
      array[randomIndex].color = this.randomHEX();
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
          <p>
            Objective: Select a word that you haven't selected yet.<br></br>
            Highest score is 10!
          </p>
          <div className="App-scoreboard">
            <span>Score: {this.state.score}</span>
            <span>Best Score: {this.state.bestScore}</span>
          </div>
        </header>
        <section className="App-container">
          <Congratulations />
          <div className="App-item-container">
            {this.state.numbers.map((num) => {
              return (
                <GameItem
                  key={num.content + "_key"}
                  value={num}
                  method={this.checkScore}
                  color={num.color}
                />
              );
            })}
          </div>
        </section>
      </main>
    );
  }
}

export default App;
