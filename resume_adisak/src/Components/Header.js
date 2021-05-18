import React from 'react'

function Header() {
    return (
        <header id="home">
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
                <ul id="nav" className="nav">
                    <li className="current">
                        <a className="smoothScroll" href="#home">Home</a></li>
                    <li><a className="smoothScroll" href="#about">About</a></li>
                    <li><a className="smoothScroll" href="#resume">Resume</a></li>
                    <li><a className="smoothScroll" href="#example">example</a></li>
                    <li><a className="smoothScroll" href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div className="banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">I'm Adisak Phatiworakul.</h1>
                    <hr />
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

        </header>
    );
}


export default Header;