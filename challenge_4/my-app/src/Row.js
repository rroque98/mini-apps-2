import React from 'react';
import PropTypes from 'prop-types';
import './Row.css';

const Row = ({ row }) => (
  <div>
  {row.map((block, i) =>
    <button key={i}>{block}</button>)}
  </div>
);

Row.propTypes = {
  row: PropTypes.array
};

export default Row;
