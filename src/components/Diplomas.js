import { useState } from 'react';
import { Outlet, NavLink } from "react-router-dom";
import { getDiplomas } from "../api";
import SearchBar from './SearchBar';

export default function Diplomas() {
  const diplomas = getDiplomas();

  const [searchQuery, setSearchQuery] = useState('');
  const filteredCourses = diplomas.filter((diploma) =>
    diploma.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Schools</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <ul className="categories">
        {filteredCourses.map(diploma => (
          <li key={diploma.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "category-active" : null
              }
              to={diploma.id}
            >
              {diploma.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
