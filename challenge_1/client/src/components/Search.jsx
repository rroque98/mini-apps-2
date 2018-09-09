import React from 'react';

const Search = ({ handleClick, handleChange }) => {
  return (
    <div>
      <form>
        <label>
          Search Event:
          <input type="text" name="name" onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit" onClick={handleClick}/>
      </form>
    </div>
  );
};

export default Search;