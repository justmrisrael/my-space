import React from "react";
import Burger from "./Nav/Burger";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar" id="nav">
        <Link to="/"> <div className="logo hvr-grow">IM_ </div></Link>
      <Burger />
    </div>
  )
}
export default Header;


