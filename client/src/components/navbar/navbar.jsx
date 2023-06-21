import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";
import { useRef } from "react";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "state/index.js";

export const Navbar = () => {
  const navRef = useRef(null);

  const dispatch = useDispatch();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h1 className="logo-text">
        <a href="/">
          <span>IC</span>
        </a>
      </h1>
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/connections">My Connections</a>
        <a href="/requests">Requests</a>
        <a href="https://airtable.com/shrTsoJhfgmp4rnt1/tbl1VhHXzHipl7geY">
          AirTable
        </a>
        <a href="/login">
          <span className="underline" onClick={() => dispatch(setLogout())}>
            Log Out
          </span>
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <AiFillCloseCircle />
        </button>
      </nav>
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <IoIosArrowDropdownCircle />
      </button>
    </header>
  );
};
