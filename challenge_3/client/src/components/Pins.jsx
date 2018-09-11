import React from 'react';

const Pins = ({ handleClick, }) => (
  <div>
    <div>
      <button type="button" value={0} onClick={handleClick}>0</button>
      <button type="button" value={1} onClick={handleClick}>1</button>
      <button type="button" value={2} onClick={handleClick}>2</button>
      <button type="button" value={3} onClick={handleClick}>3</button>
      <button type="button" value={4} onClick={handleClick}>4</button>
      <button type="button" value={5} onClick={handleClick}>5</button>
    </div>
    <div>
      <button type="button" value={6} onClick={handleClick}>6</button>
      <button type="button" value={7} onClick={handleClick}>7</button>
      <button type="button" value={8} onClick={handleClick}>8</button>
      <button type="button" value={9} onClick={handleClick}>9</button>
      <button type="button" value={10} onClick={handleClick}>10</button>
    </div>
  </div>
)

export default Pins;
