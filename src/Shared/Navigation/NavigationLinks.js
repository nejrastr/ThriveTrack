import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";

import "./NavigationLinks.css";

const NavigationLinks = (props) => {
  const authContext = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    authContext.logout();
  };
  return (
    <ul className="nav-links">
      {authContext.isLoggedIn && (
        <>
          <li>
            <NavLink to="/workouts/new">New Workout</NavLink>
          </li>
          <li>
            <NavLink to="/u1/workouts">My Workouts</NavLink>
          </li>
          <li>
            <NavLink to="/u1/progress">My Progress</NavLink>
          </li>
          <li>
            <NavLink to="/u1/goals">My Goals</NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={logoutHandler}>
              Log Out
            </NavLink>
          </li>
        </>
      )}
      {!authContext.isLoggedIn && (
        <>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavigationLinks;
