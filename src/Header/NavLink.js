import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
const Header = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/EventBubbling">Event Bubbling</NavLink>
        </li>
        <li>
          <NavLink to="/EventCapturing">Event Capturing</NavLink>
        </li>
        <li>
          <NavLink to="/EventDelegation">Event Delegation</NavLink>
        </li>
        <li>
          <NavLink to="/OuterParent">OuterParent with Class</NavLink>
        </li>
        <li>
          <NavLink to="/OuterParentFunction">
            OuterParent with Func.
          </NavLink>
        </li>
        <li>
          <NavLink to="/PaginationFunctional">Functional Pagination</NavLink>
        </li>
        <li>
          <NavLink to="/PaginationClass">Class Pagination</NavLink>
        </li>
        <li>
          <NavLink to="/NewPagination">New</NavLink>
        </li>
      </ul>
      <div className="backImage">
        <p></p>
      </div>
    </>
  );
};
export default Header;
