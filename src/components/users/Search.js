import React, { useState } from "react";
import PropTypes from "prop-types";


const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState("");
  const [field, setfield] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSelect = (e) => {
    console.log("test");
    setfield(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      if(field===""){
        setAlert("Please select field to Search by", "light");
      }
      else{
      console.log(field);
      searchUsers(text,field);
      //setText("");
      }
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Movie...."
          value={text}
          onChange={onChange}
        />
        <label >Search by:</label>

         <select name="field" id="field" onChange={onSelect}>
           <option value="" disabled selected>Select your option</option>
           <option value="title">Title</option>
           <option value="release_year">Year</option>
           <option value="director">Director</option>
           <option value="cast">Actor</option>
         </select>
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
