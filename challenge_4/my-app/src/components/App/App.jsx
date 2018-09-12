import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from '../../store';
import Board from '../Board/Board.jsx';

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
    };
    this.createBoard = this.createBoard.bind(this);
    this.insertBombs = this.insertBombs.bind(this);
    this.calculateNumOfSurrBombs = this.calculateNumOfSurrBombs.bind(this);
  }

  componentDidMount() {
    this.createBoard();
  }

  createBoard() {
    this.insertBombs();
    const { board } = this.state;
    for (let i = 0; i < board.length; i += 1) {
      for (let x = 0; x < board[i].length; x += 1) {
        if (board[i][x] === 0) {
          const squareValue = this.calculateNumOfSurrBombs(i, x);
          board[i][x] = squareValue;
        }
      }
    }
    this.setState({
      board,
    });
  }

  insertBombs() {
    const { board } = this.state;
    for (let i = 0; i < board.length; i += 1) {
      const rowContent = board[i];
      for (let x = 0; x < rowContent.length; x += 1) {
        if (Math.random() > 0.7) {
          board[i][x] = -1;
        }
      }
    }
  }

  calculateNumOfSurrBombs(i, x) {
    let numOfSurrMines = 0;
    const { board } = this.state;
    if (board[i - 1] && board[x - 1] && board[i - 1][x - 1] < 0) {
      numOfSurrMines += 1;
    }
    if (board[i - 1] && board[i - 1][x] < 0) {
      numOfSurrMines += 1;
    }
    if (board[i - 1] && board[x + 1] && board[i - 1][x + 1] < 0) {
      numOfSurrMines += 1;
    }
    if (board[x - 1] && board[i][x - 1] < 0) {
      numOfSurrMines += 1;
    }
    if (board[x + 1] && board[i][x + 1] < 0) {
      numOfSurrMines += 1;
    }
    if (board[i + 1] && board[x - 1] && board[i + 1][x - 1] < 0) {
      numOfSurrMines += 1;
    }
    if (board[i + 1] && board[i + 1][x] < 0) {
      numOfSurrMines += 1;
    }
    if (board[i + 1] && board[x + 1] && board[i + 1][x + 1] < 0) {
      numOfSurrMines += 1;
    }
    return numOfSurrMines;
  }

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
