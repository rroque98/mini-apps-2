import React, { Component } from 'react';
import { Provider } from 'react-redux'
import './App.css';
import store from './store';
import Board from './Board';

// const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]],
      numOfBombs: 0,
    };
    this.createBoard = this.createBoard.bind(this);
    this.insertBombs = this.insertBombs.bind(this);
    this.calculateNumOfSurrBombs = this.calculateNumOfSurrBombs.bind(this);
    this.isMine = this.isMine.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.createBoard();
  }

  createBoard() {
    this.insertBombs();
    const { board } = this.state;
    for (let i = 0; i < board.length; i++) {
      for (let x = 0; x < board[i].length; x++) {
        if (board[i][x] === 0) {
          const squareValue = this.calculateNumOfSurrBombs(i, x);
          board[i][x] = squareValue;
        }
      }
    }
    console.log(board)
    this.setState({
      board,
    });
  }

  insertBombs() {
    const { board, numOfBombs } = this.state;
    for (let i = 0; i < board.length; i++) {
      let rowContent = board[i];
      for (let x = 0; x < rowContent.length; x++) {
        let square = rowContent[x];
        if(Math.random() > 0.7) {
          board[i][x] = -1;
        }
      }
    }
  }

  calculateNumOfSurrBombs(i, x) {
    let numOfSurrMines = 0;
    const { board } = this.state;
    if (board[i - 1] && board[x - 1] && board[i - 1][x - 1] < 0) {
      numOfSurrMines++;
    }
    if (board[i - 1] && board[i - 1][x] < 0) {
      numOfSurrMines++;
    }
    if (board[i - 1] && board[x + 1] && board[i - 1][x + 1] < 0) {
      numOfSurrMines++;
    }
    if (board[x - 1] && board[i][x - 1] < 0) {
      numOfSurrMines++;
    }
    if (board[x + 1] && board[i][x + 1] < 0) {
      numOfSurrMines++;
    }
    if (board[i + 1] && board[x - 1] && board[i + 1][x - 1] < 0) {
      numOfSurrMines++;
    }
    if (board[i + 1] && board[i + 1][x] < 0) {
      numOfSurrMines++;
    }
    if (board[i + 1] && board[x + 1] && board[i + 1][x + 1] < 0) {
      numOfSurrMines++;
    }
    return numOfSurrMines;
  }

  isMine(boardPosition) {
    if (boardPosition < 0) {
      return true;
    }
    return false;
  }

  // handleClick(e) {
  //   e.preventDefault();
  //   console.log('clicked')
  //   console.log(e.target.value)
  // }

  render() {
    const { board } = this.state;
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Minesweeper</h1>
          <Board board={board} />
        </div>
      </Provider>
    );
  }
}

export default App;
