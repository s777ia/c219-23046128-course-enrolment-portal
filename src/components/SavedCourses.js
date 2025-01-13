import React from "react";
import { NavLink } from "react-router-dom";
import { getDiplomas } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function SavedCourses({ favourites, setFavourites }) {
  const diplomas = getDiplomas();

  const savedDiplomas = diplomas.filter((diploma) =>
    favourites.includes(diploma.id)
  );

  function handleDeleteFavourites(id) {
    setFavourites((prevFavourites) => prevFavourites.filter((favouriteId) => favouriteId !== id));
  }

  return (
    <div className="container">
      <h1>Saved Courses</h1>
      {savedDiplomas.length > 0 ? (
        <ul className="saved-courses-list">
          {savedDiplomas.map((diploma) => (
            <li key={diploma.id} className={"saved-courses"}>
              <NavLink to={`/diplomas/${diploma.id}`}>{diploma.name}</NavLink>
              <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} onClick={() => handleDeleteFavourites(diploma.id)}/>
              </li>
          ))}
        </ul>
      ) : (
        <p>No courses saved yet.</p>
      )}
    </div>
  );
}