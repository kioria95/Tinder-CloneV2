import { IconButton } from "@material-ui/core";
import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header__back" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="tinderlogo"
        />
      </Link>

      <Link to="/chats">
        <IconButton>
          <ForumIcon fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
