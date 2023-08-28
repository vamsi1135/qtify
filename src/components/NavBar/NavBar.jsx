import React, { useState } from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/Search";
import "./NavBar.css";
import ModelNew from "../Model/Model";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <nav className="navbar">
        <Logo />
        <SearchBar />
        <ModelNew val={open} className="button" onClick={handleClick} />
        {/* <Button text="Give Feedback" type="button" onClick={handleClick} /> */}
      </nav>
    </>
  );
};

export default NavBar;
