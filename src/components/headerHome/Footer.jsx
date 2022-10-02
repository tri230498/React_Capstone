import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-fluid p-0">
      <div className="row text-center p-5" style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
        <div
          className="col-sm-4 ps-sm-5 text-start"
          style={{ borderRight: "solid 0.25px rgba(1, .1, .1,.2)" }}
        >
          <h5 className="text-uppercase fw-semibold">get help</h5>
          <ul className="fw-semibold">
            <li>
              <NavLink className="navlink-hover" to="/index">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink-hover" to="/">
                Nike
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink-hover" to="/">
                Adidas
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink-hover" to="/index">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="col-sm-4  ps-sm-5 text-start"
          style={{ borderRight: "solid 0.25px rgba(1, .1, .1,.2)" }}
        >
          <h5 className="text-uppercase fw-semibold">get help</h5>
          <ul className="fw-semibold">
            <li>
              <NavLink className="navlink-hover" to="/index">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink-hover" to="/">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink-hover" to="/">
                Help
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink-hover" to="/index">
                Phone
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-sm-4 ps-sm-5 text-start">
          <h5 className="text-uppercase fw-semibold">get help</h5>
          <ul className="fw-semibold">
            <li>
              <NavLink className="navlink-hover" to="/register">
                register
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink-hover" to="/login">
                login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div style={{backgroundColor: "#D9D9D9", marginTop: 5}}>
        <p className="text-center mb-0" style={{lineHeight: 5}}>@ 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải</p>
      </div>
    </div>
  );
}
