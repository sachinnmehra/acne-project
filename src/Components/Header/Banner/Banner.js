import React from "react";
import "./Banner.css";
import NavBar from "../Navbar/NavBar";
const banner = (props) => {
  return (
    <div>
      <div className="Banner">
        <div className="container1">
          <button>Announcement</button>
          <p>How we're responding to Covid-19</p>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default banner;
