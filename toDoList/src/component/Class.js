import React from "react";
import { NavLink, Link } from "react-router-dom";

const Class = () => {
  return (
    <div className="class">
      <NavLink
        to="/"
        exact
        activeStyle={{
          fontSize: "25px",
          letterSpacing: "3px"
        }}
      >
        <div className="classAll">all</div>
      </NavLink>
      <NavLink
        to="/active"
        exact
        activeStyle={{
          fontSize: "25px",
          letterSpacing: "3px"
        }}
      >
        <div className="classActives">Active</div>
      </NavLink>
      <NavLink
        to="/done"
        exact
        activeStyle={{
          fontSize: "25px",
          letterSpacing: "3px"
        }}
      >
        <div className="classDone">Done</div>
      </NavLink>
    </div>
  );
};

export default Class;
