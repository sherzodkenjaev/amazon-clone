import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="headerLogo"
          src="https://boostedmedia.net/wp-content/uploads/2019/11/white-amazon-logo-png-6.png"
        />
      </Link>
      <div className="headerSearch">
        <input type="text" className="headerInputSearch" />
        <SearchIcon className="headerSearchIcon" />
      </div>
      <div className="headerNav">
        <Link to={!user && "/login"} className="headerLink">
          <div onClick={login} className="headerOption">
            <span className="headerOptionLineOne">Hello {user?.email}</span>
            <span className="headerOptionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/" className="headerLink">
          <div className="headerOption">
            <span className="headerOptionLineOne">Return</span>
            <span className="headerOptionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="headerLink">
          <div className="headerOption">
            <span className="headerOptionLineOne">Your</span>
            <span className="headerOptionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="headerLink">
          <div className="headerOptionBasket">
            <ShoppingBasket />
            <span className="headerOptionLineTwo headerBasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
