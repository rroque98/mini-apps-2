import React from 'react';
import PropTypes from 'prop-types';

const Scorecard = ({ scorecard }) => (
  <div>
    {scorecard.map((round, i) => (
      <div key={i}>
        Round
        {i + 1}
        :
        {' '}
        {round[0]}
        /
        {round[1]}
      </div>))}
  </div>
);

Scorecard.propTypes = {
  scorecard: PropTypes.array.isRequired,
};
export default Scorecard;
