import React from "react";
import "./css/navbar.css";

const navbar = (props) => {
  return (
    <div className="navbar">
      <h1>CONTROLLER</h1>
      <ul>
        <li>
          <div className="profile">
            <p>Name Layer</p>
            <img
              src="https://wallpapercave.com/wp/wp8684948.jpg"
              alt=""
              srcset=""
            />
          </div>
        </li>
        <li onClick={()=> props.PagingFunc("Home")}>
          <p>Home</p>
        </li>
        <li onClick={()=> props.PagingFunc("Tools")}>
          <p>Tools</p>
        </li>
      </ul>
    </div>
  );
};

export default navbar;
