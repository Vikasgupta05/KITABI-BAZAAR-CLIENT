import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Style/NavBar.css";
import { IoMenu } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { FaCode } from "react-icons/fa";

export const NavBar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <span>Kitabi Bazaar</span>
                        
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                        <NavLink
                            exact
                            to="/"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Home
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink
                            exact
                            to="/about"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            About
                        </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/blog"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Blog
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Sign in
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/Sell-books"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Sell Book
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {click ? (
                        <span className="icon">
                            <CgClose />{" "}
                        </span>
                        ) : (
                        <span className="icon">
                            <IoMenu />
                        </span>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};
