import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { title, release_year, description } }) => {
  return (
    <div className="card text-center">
      <h3>{title}</h3>
      <h5>Year: {release_year}</h5>
      <br></br>
      <hr></hr>
      <p>{description}</p>
       <hr></hr>
    </div>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
