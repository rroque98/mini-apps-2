import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Row/Row';
import './Board.css';

const Board = ({ board }) => (
  <div>
  {board.map((row, i) =>
    <Row key={i} row={row} />)}
  </div>
);

Board.propTypes = {
  board: PropTypes.array,
  // handleClick: PropTypes.func,
};

export default Board;
