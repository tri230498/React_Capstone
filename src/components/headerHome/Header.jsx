import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <nav
        className="navbar navbar-expand-sm navbar-dark"
        style={{ backgroundColor: "black" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./img/image3.png" alt="logo" />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item d-flex">
                <img
                  className="mx-1"
                  src="./img/search.png"
                  alt=""
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(`/search`);
                  }}
                />
                <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(`/search`);
                }}
                className="text-light pt-2"
              >
                Search
              </span>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="#">
                  Giỏ hàng
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="#">
                  {/* Home <span className="visually-hidden">(current)</span> */}
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Register
                </NavLink>
              </li>
              {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  Action 1
                </a>
                <a className="dropdown-item" href="#">
                  Action 2
                </a>
              </div>
            </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    style={{ fontSize: 20, color: "#000000", fontWeight: 400 }}
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a style={{ fontSize: 20 }} className="nav-link" href="#">
                    Men
                  </a>
                </li>
                <li className="nav-item">
                  <a style={{ fontSize: 20 }} className="nav-link" href="#">
                    Woman
                  </a>
                </li>
                <li className="nav-item">
                  <a style={{ fontSize: 20 }} className="nav-link">
                    Kid
                  </a>
                </li>
                <li className="nav-item">
                  <a style={{ fontSize: 20 }} className="nav-link">
                    Sport
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
