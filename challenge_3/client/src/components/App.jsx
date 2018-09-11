import React from 'react';
import Pins from './Pins';
import Scorecard from './Scorecard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scorecard: [],
      frameScore: [],
      rollNum: 1,
      bonusPoints: 0,
      totalScore: 0,
      spare: false,
      strike: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const {
      frameScore, rollNum, scorecard, bonusPoints, spare, strike
    } = this.state;
    const pinHits = Number(e.target.value);
    if (rollNum === 1) {
      frameScore.push(pinHits);
      this.setState({
        rollNum: 2,
      });
      if (pinHits === 10) {
        frameScore.push(0);
        scorecard.push(frameScore);
        this.setState({
          frameScore: [],
          strike: true,
          rollNum: 1,
        });
      }
      if (strike) {
        this.setState({
          bonusPoints: bonusPoints + pinHits,
        });
      }
      if (spare) {
        this.setState({
          bonusPoints: bonusPoints + pinHits,
          spare: false,
        });
      }
    } else if (rollNum === 2) {
      if ((frameScore[0] + pinHits) > 10) {
        alert('Invalid choice. Please pick again.');
        return;
      }
      frameScore.push(pinHits);
      scorecard.push(frameScore);
      this.setState({
        frameScore: [],
        rollNum: 1,
      });
      const frameTotal = frameScore[0] + frameScore[1];
      if (!strike && frameTotal === 10) {
        this.setState({
          spare: true,
        });
      }
      if (strike) {
        this.setState({
          bonusPoints: bonusPoints + pinHits,
          strike: false,
        });
      }
    }
    const total = scorecard.reduce((acc, rolls) => (acc + rolls[0] + rolls[1]), 0);
    this.setState({
      totalScore: total + bonusPoints,
    });
  }

  render() {
    const { scorecard, totalScore } = this.state;
    return (
      <div>
        <Pins handleClick={this.handleClick} />
        <Scorecard scorecard={scorecard} />
        <h3>
          Total Score:
          {' '}
          {totalScore}
        </h3>
      </div>
    );
  }
}

export default App;
