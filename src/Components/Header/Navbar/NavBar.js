import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link } from "react-router-dom";
const navBar = (props) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#EB5757" }}
      >
        <div className="container-fluid">
          <Link
            to={{
              pathname: "/",
            }}
            className="navbar-brand"
          >
            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg"></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                to={{ pathname: "/" }}
                className="nav-link active"
                aria-current="page"
              >
                Home
              </Link>
              <Link className="nav-link">About</Link>
              <a className="nav-link">Shop</a>
              <Link to={{ pathname: "/donations" }} className="nav-link">
                Donate
              </Link>
              <Link to={{ pathname: "/contactus" }} className="nav-link">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navBar;
