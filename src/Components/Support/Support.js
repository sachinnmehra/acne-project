import React from "react";
import "./Support.css";
const support = (props) => {
  return (
    <div className="support-section">
      <div className="container">
        <div className="support-top-wrapper">
          <div className="support-top-left">
            <div className="support-top-details-text">Ways to support</div>
            <h2 className="support-top-heading">Support Acme Outdoors.</h2>
          </div>
          <div className="support-top-right">
            <p>
              COVID-19 has forced us to close our retail space, but we need
              support from patrons like yourself now more than ever. Below,
              we’ve listed the best ways to help us through this season.
            </p>
          </div>
        </div>
        <div className="support-wrapper">
          <div className="support-column">
            <div className="support-square">
              <div className="support-square-number">01</div>
              <div className="support-square-text">
                SHOP
                <br />
                PRODUCTS
              </div>
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57a5836db2a07bab0e3_Circle.svg"
                alt="Circle Decoration in Shop Products Block"
                className="support-square-image"
              />
            </div>
          </div>

          <div className="support-column">
            <div className="support-square">
              <div className="support-square-number">01</div>
              <div className="support-square-text">
                SHOP
                <br />
                PRODUCTS
              </div>
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57a5836db2a07bab0e3_Circle.svg"
                alt="Circle Decoration in Shop Products Block"
                className="support-square-image"
              />
            </div>
          </div>

          <div className="support-column">
            <div className="support-square">
              <div className="support-square-number">01</div>
              <div className="support-square-text">
                SHOP
                <br />
                PRODUCTS
              </div>
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57a5836db2a07bab0e3_Circle.svg"
                alt="Circle Decoration in Shop Products Block"
                className="support-square-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default support;
