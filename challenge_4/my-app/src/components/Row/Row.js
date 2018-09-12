import React from 'react';
import PropTypes from 'prop-types';
import './Row.css';
import Block from '../Block/Block';

const Row = ({ row, block, }) => (
  <div>
    {row.map((block, i) =>
      <Block key={i} block={block} />)}
  </div>
);

Row.propTypes = {
  row: PropTypes.array,
};

export default Row;
