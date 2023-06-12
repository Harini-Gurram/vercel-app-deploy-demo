import React from "react";
import "./Navigate.css";
import HomeIcon from "@mui/icons-material/Home";
import { Search,Explore,Slideshow,Chat,FavoriteBorder,AddCircleOutline,Menu} from "@mui/icons-material";
import { Avatar } from "@mui/material";

function Sidenav() {
  return (
    <div className="sidenav">
      <img
        className="logo"
        src="https://www.citypng.com/public/uploads/preview/-11590321744kgx0vygeu0.png"
        alt="Instagram Logo"
      />
      <div className="container-nav">
        <button className="icons">
          <HomeIcon />
          <span className="show-nav">Home</span>
        </button>
        <button className="icons">
          <Search/>
          <span className="show-nav">Search</span>
        </button>
        <button className="icons">
          <Explore/>
          <span className="show-nav">Explore</span>
        </button>
        <button className="icons">
          <Slideshow/>
          <span className="show-nav">Reels</span>
        </button>
        <button className="icons">
          <Chat/>
          <span className="show-nav">Messages</span>
        </button>
        <button className="icons">
          <FavoriteBorder/>
          <span className="show-nav">Notifications</span>
        </button>
        <button className="icons">
          <AddCircleOutline/>
          <span className="show-nav">Create</span>
        </button>
        <button className="icons">
          <Avatar className="avatar"/>
          <span className="show-pro">Profile</span>
        </button>
      </div>
      <br/>
      <div className="container">
        <button className="icons">
          <Menu/>
          <span className="show-nav">More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;