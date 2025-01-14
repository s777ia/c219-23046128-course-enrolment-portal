import { useParams, NavLink, Outlet } from "react-router-dom";
import { getDiploma } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";


export default function Diploma({ favourites, setFavourites }) {
  const { diplomaId } = useParams();
  const diploma = getDiploma(diplomaId);

  function handleAddToFavourites(id) {
    // Prevent duplicates
    if (!favourites.includes(diplomaId)) {
      setFavourites((prevFavourites) => [...prevFavourites, diplomaId]);
    } else {
      setFavourites((prevFavourites) => prevFavourites.filter((favouriteId) => favouriteId !== id));
    }
  }

  const isFavourite = favourites.includes(diplomaId);

  return (
    <>
    <div className="diploma-name">
      <h2>{diploma.name}</h2>
      <FontAwesomeIcon
        icon={isFavourite ? solidHeart : regularHeart}
        style={{ color: isFavourite ? "red" : "grey", fontSize: "24px", marginLeft: "16px", cursor: "pointer" }}
        onClick={() => handleAddToFavourites(diploma.id)} 
      />
      </div>
      <p>{diploma.desc}</p>
      <ul className="session-list">
        {diploma?.modules.map(module => (
          <li className="session" key={module.id}>
            <NavLink
              className={({ isActive }) => isActive ? "session-active" : null}
              to={module.id}>
              <p className="session-name">{module.id} | {module.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
