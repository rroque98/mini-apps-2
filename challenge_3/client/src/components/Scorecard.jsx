import React from 'react';

const Scorecard = ({ scorecard }) => (
  <div>
    {scorecard.map((round, i) => <div key={i}>Round{i + 1}: {round[0]} / {round[1]}</div>)}
  </div>
)

export default Scorecard;
