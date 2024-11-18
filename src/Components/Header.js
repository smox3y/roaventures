import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home" style={{ backgroundColor: "#333", color: "#fff" }}>
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav" style={{ color: "#fff" }}>
            <li className="current">
              <Link className="smoothscroll" to="/">
                Home
              </Link>
            </li>

            <li>
              <Link className="smoothscroll" to="/#about">
                About
              </Link>
            </li>

            <li>
              <Link className="smoothscroll" to="/gibson">
                Works
              </Link>
            </li>

            <li>
              <Link className="smoothscroll" to="/#contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
          </div>
        </div>

        <p className="scrolldown">
          <Link className="smoothscroll" to="/#about">
            <i className="icon-down-circle"></i>
          </Link>
        </p>
      </header>
    );
  }
}

export default Header;
