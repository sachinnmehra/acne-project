import React from "react";
import "./SafeSection.css";
import { Route, Link } from "react-router-dom";

const safeSection = () => {
  return (
    <div className="safe-section">
      <div className="container">
        <div className="safe-wrapper">
          <h2 className="safe-heading">
            How we're keeping you safe during COVID-19
          </h2>
          <p className="safe-paragraph">
            As an outdoor shop, we’ve taken precautionary measures to ensure the
            safety of all our customers and team members.
          </p>
          <div className="safe-button-wrapper">
            <Link
              to={{
                pathname: "/read",
              }}
              className="btn light hero safe w-button"
            >
              Read Our Statement
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default safeSection;
