import React from "react";
import { Link } from "react-router-dom";
import Image from "components/Image";

const Header = () => {
    return (
        <header id="top" className="page-header">
            <Link to="/" className="logo">
                <Image src="logo/ronak_shah_logo.jpg" alt="Ronak Shah Logo" />
            </Link>

            <nav aria-label="Primary" className="navigation">
                <ul className="menu" id="menu">
                    <li>
                        <Link className="menu-links" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-links" to="/resume">
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-links" to="/work">
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-links" to="/whatsnew">
                            What's New
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-links" to="/contact">
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
