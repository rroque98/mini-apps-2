import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleClick, handleChange }) => (
  <div>
    <form>
      <label>
        Search Event:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" onClick={handleClick} />
    </form>
  </div>
);

Search.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Search;
