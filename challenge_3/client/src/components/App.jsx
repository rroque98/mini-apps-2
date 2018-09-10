import React from 'react';
import Pins from './Pins.jsx';
import Scorecard from './Scorecard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(e.target.value)
  }

  render() {
    return (
      <div>
        <Pins handleClick={this.handleClick} />
        <Scorecard />
      </div>
    );
  }
}

export default App;
