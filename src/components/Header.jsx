import React from 'react';
import logo from "/assets/images/logo.png";

const Header = () => {
    return (
        <div>
            <header id="header" className="transparent-header" data-sticky-shrink="false">
                <div id="header-wrap">
                    <div className="container">
                        <div className="header-row">

                            <div id="logo">
                                <a href="index.html">
                                    <img src={logo} alt="Canvas Logo" className="logo-default" />
                                </a>
                            </div>

                            <div className="header-misc">


                                <div id="top-search" className="header-misc-icon">
                                    <a href="#" id="top-search-trigger"><i className="uil uil-search"></i><i
                                        className="bi-x-lg"></i></a>
                                </div>

                            </div>

                            <div className="primary-menu-trigger">
                                <button className="cnvs-hamburger" type="button" title="Open Mobile Menu">
                                    <span className="cnvs-hamburger-box"><span className="cnvs-hamburger-inner"></span></span>
                                </button>
                            </div>


                            <nav className="primary-menu with-arrows">

                                <ul className="menu-container">
                                    <li className="menu-item current"><a className="menu-link" href="demo-recipes.html">
                                        <div>Home</div>
                                    </a></li>
                                    <li className="menu-item"><a className="menu-link" href="demo-recipes-about-us.html">
                                        <div>About Us</div>
                                    </a></li>
                                    <li className="menu-item"><a className="menu-link" href="demo-recipes-recipes.html">
                                        <div>Recipes</div>
                                    </a>
                                        <ul className="sub-menu-container rounded-bottom">
                                            <li className="menu-item"><a className="menu-link"
                                                href="demo-recipes-recipe-single.html">
                                                <div>Recipe Single Page</div>
                                            </a></li>
                                            <div className="dropdown-divider my-0"></div>
                                            <li className="menu-item"><a className="menu-link" href="demo-recipes-recipes.html">
                                                <div>Popular</div>
                                            </a></li>
                                            <li className="menu-item"><a className="menu-link" href="demo-recipes-recipes.html">
                                                <div>Recent</div>
                                            </a></li>
                                            <li className="menu-item"><a className="menu-link" href="demo-recipes-recipes.html">
                                                <div>Most liked</div>
                                            </a></li>
                                            <li className="menu-item"><a className="menu-link" href="demo-recipes-recipes.html">
                                                <div>Most Commented</div>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item"><a className="menu-link" href="demo-recipes-contact.html">
                                        <div>Contact Us</div>
                                    </a></li>
                                </ul>

                            </nav>

                            {/* <form className="top-search-form" action="" method="get">
                                <input type="text" name="q" className="form-control"
                                    placeholder="Type and Hit Enter.." autoComplete="off" />
                            </form> */}

                        </div>
                    </div>
                </div>
                <div className="header-wrap-clone"></div>
            </header>
        </div>
    );
};




export default Header;