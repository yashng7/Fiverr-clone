import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import getCurrentUser from "../../../utils/getCurrentUser";
import newRequest from "../../../utils/newRequest";
import DehazeRoundedIcon from "@mui/icons-material/DehazeRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";

import "./Navbar.scss";
import NavSlide from "../navslide/NavSlide";


function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = getCurrentUser();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        {openMenu && (
          <div className="side-menu">
            <div className="menu-container">
              <div className="button-container">
                <button>Join Fiverr</button>
                <CloseRoundedIcon
                  className="close"
                  onClick={() => setOpenMenu(!openMenu)}
                />
              </div>
              <div className="menu-content">
                <span>
                  <Link to="/login" className="link">
                    Sign in
                  </Link>
                </span>
                <span>Browse Categories</span>
                <span>Explore</span>
                <span>
                  <span className="green">Fiverr Business</span>
                </span>
              </div>
              <hr />
              <div className="menu-content">
                <span>
                  <span className="dark">General</span>
                </span>
                <span>Home</span>
                <span className="icon-center">
                  English
                  <LanguageRoundedIcon />
                </span>
                <span className="icon-center">
                  <CurrencyRupeeRoundedIcon />
                  INR
                </span>
              </div>
            </div>
          </div>
        )}
        <div className="logo">
          <DehazeRoundedIcon
            className="bars"
            onClick={() => setOpenMenu(!openMenu)}
          />
          <Link className="link" to="/">
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span className="links-hide">Fiverr Business</span>
          <span className="links-hide">Explore</span>
          <span className="links-hide globe">
            <LanguageRoundedIcon />
            English
          </span>
          {!currentUser?.isSeller && (
            <span className="links-hide">Become a Seller</span>
          )}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link mobile-screen">
                Sign in
              </Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <NavSlide />
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
