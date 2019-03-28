import React from "react";
import { NavLink, Link } from "react-router-dom";

const Class = () => {
  return (
    <div className="class">
      <NavLink
        to="/toDoList/dist/"
        exact
        activeStyle={{
          fontSize: "25px",
          letterSpacing: "3px"
        }}
      >
        <div className="classAll">all</div>
      </NavLink>
      <NavLink
        to="/toDoList/dist/active"
        exact
        activeStyle={{
          fontSize: "25px",
          letterSpacing: "3px"
        }}
      >
        <div className="classActives">Active</div>
      </NavLink>
      <NavLink
        to="/toDoList/dist/done"
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
