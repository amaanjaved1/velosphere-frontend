import React from "react";
import { BiCategory } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useRef } from "react";
import "./navbar.css";

export const Navbar = () => {
  const navRef = useRef(null);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h1>Logo</h1>
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/connections">My Connections</a>
        <a href="/requests">Requests</a>
        <a href="https://airtable.com/shrTsoJhfgmp4rnt1/tbl1VhHXzHipl7geY">
          AirTable
        </a>
        <a href="/login">Log Out</a>
        <button class="nav-btn nav-close-btn" onClick={showNavbar}>
          <AiFillCloseCircle />
        </button>
      </nav>
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <BiCategory />
      </button>
    </header>
  );
};
