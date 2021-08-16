import React from "react";
import { Link } from "react-router-dom";
import Image from "components/Image";

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="footer-sections">
                    <h3>About</h3>
                    <p className="footer-about-us">
                        I am a application developer primarily using Java for
                        development. To know more about me check the home page.
                    </p>
                </div>

                <div className="footer-sections">
                    <h3>Get started</h3>
                    <ul className="footer-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/resume">Resume</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-sections">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li>
                            <Link to="/work">Work</Link>
                        </li>
                        <li>
                            <Link to="/whatsnew">What's New</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Me</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-sections">
                    <h3>Follow me on</h3>
                    <div className="footer-links">
                        <ul className="social-icons">
                            <li>
                                <a
                                    href="https://linkedin.com/in/ronak-shah-457891ba"
                                    target="_blank"
                                >
                                    <Image
                                        src="social/linkedin.png"
                                        alt="LinkedIn Icon"
                                        className="social-icon"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/ronak.shah.75436/"
                                    target="_blank"
                                >
                                    <Image
                                        src="social/facebook.svg"
                                        alt="Facebook Icon"
                                        className="social-icon"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/ronakshah37"
                                    target="_blank"
                                >
                                    <Image
                                        src="social/twitter.svg"
                                        alt="Twitter Icon"
                                        className="social-icon"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="">
                <div className="container-reserved">
                    <p className="copyright-text">
                        Copyright &copy; 2021 All Rights Reserved by
                        <Link to="/">Ronak Shah</Link>.
                    </p>
                    <a href="#top">Jump to top of page</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
