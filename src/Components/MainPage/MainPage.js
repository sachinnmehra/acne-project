import React from "react";
import "./MainPage.css";
const mainPage = (props) => {
  return (
    <div className="MainPage">
      <h1>Serving you since 1989</h1>

      <p>
        Acme Outdoors is an outdoor and adventure shop located in the Boathouse
        District in Oklahoma City.
      </p>
      <a>
        <button>Shop Merch</button>
      </a>
    </div>
  );
};

export default mainPage;
