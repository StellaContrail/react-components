import React from "react";
import { Link, NavLink } from "react-router-dom";

const Top = () => {
  const active = {
    fontWeight: "bold",
    color: "#d57276",
  };

  const inactive = {
    fontWeight: "normal",
    color: "#65b2c6",
  };

  const linkStyle = (isActive) => {
    return isActive ? active : inactive;
  };

  return (
    <>
      <h1>Sample Home</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="" style={({ isActive }) => linkStyle(isActive)}>
              Top
            </NavLink>
          </li>
          <li>
            <Link to="todolist">TodoList</Link>
          </li>
          <li>
            <Link to="greeting">MessageA</Link>
          </li>
          <li>
            <Link to="farewell">MessageB</Link>
          </li>
          <li>
            <Link to="nesting">Nesting</Link>
          </li>
          <li>
            <Link to="test/virtualDOM">Test: VirtualDOM</Link>
          </li>
          <li>
            <Link to="test/reference">Test: Reference</Link>
          </li>
          <li>
            <Link to="test/snackbar">Test: Snackbar</Link>
          </li>
          <li>
            <Link to="test/datagrid">Test: DataGrid</Link>
          </li>
          <li>
            <Link to="test/datalifting">Test: DataLifting</Link>
          </li>
          <li>
            <Link to="register">Registration</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Top;
