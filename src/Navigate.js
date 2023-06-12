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
      <div className="container">
        <button className="icons">
          <HomeIcon />
          <span className="show">Home</span>
        </button>
        <button className="icons">
          <Search/>
          <span className="show">Search</span>
        </button>
        <button className="icons">
          <Explore/>
          <span className="show">Explore</span>
        </button>
        <button className="icons">
          <Slideshow/>
          <span className="show">Reels</span>
        </button>
        <button className="icons">
          <Chat/>
          <span className="show">Messages</span>
        </button>
        <button className="icons">
          <FavoriteBorder/>
          <span className="show">Notifications</span>
        </button>
        <button className="icons">
          <AddCircleOutline/>
          <span className="show">Create</span>
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
          <span className="show">More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;