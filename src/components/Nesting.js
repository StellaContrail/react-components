import React from "react";
import { Link, Outlet } from "react-router-dom";

const Nesting = () => {
  return (
    <>
      <h1>Nesting</h1>
      <nav>
        <ul>
          <li>
            <Link to="greeting">MessageA</Link>
          </li>
          <li>
            <Link to="farewell">MessageB</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Nesting;
