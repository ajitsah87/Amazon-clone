import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
function Header() {

  const[{basket,user},dispatch]=useStateValue()
  const handleAuthenticaton=()=>{
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="404"
      />
      </Link>
     
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user&&'/Login'}>
        <div onClick={handleAuthenticaton} className="header_option">
          <span className="header__optionLineOne">Hello {!user?"Guest":user.email} </span>
          <span className="header__optionLineTwo">{user ? 'Sign Out':'Sign In'}</span>
        </div>
        </Link>
        <div className="header_option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo">&Orders</span>
        </div>
        <div className="header_option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
        </Link >

       
      </div>
    </div>
  );
}

export default Header;
