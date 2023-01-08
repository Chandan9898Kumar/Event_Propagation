import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
const Header = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            to="/EventBubbling"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Event Bubbling
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/EventCapturing"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Event Capturing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/EventDelegation"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Event Delegation
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/OuterParent"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            OuterParent Class
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/OuterParentFunction"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            OuterParent Func.
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/PaginationFunctional"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Functional Pagination
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/PaginationClass"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Class Pagination
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/NewPagination"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            New
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/NewPaginationManual"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            New 2
          </NavLink>
        </li>
      </ul>
      <div className="backImage">
        <p></p>
      </div>
    </>
  );
};
export default Header;
