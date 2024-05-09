import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top bg-body-tertiary bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <FontAwesomeIcon
            icon={faPlane}
            className="me-3 ms-3 text-white"
            style={{ fontSize: "1.5em" }}
          />
          <h1 className="navbar-brand">Travel WebApp</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse  navbar-collapse " id="navbarScroll">
            <ul className="navbar-nav me-auto fw-bold my-2  mx-auto justify-content-center my-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link active link-info"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active link-info"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link active link-info dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-current="page"
                >
                  Packages
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/package">
                      View all Package
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/itza">
                    Chichen Itza
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/tajmahal">
                    Taj Mahal
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/machupicchu">
                    Machu Picchu
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/colosseum">
                    Colosseum
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active link-info"
                  aria-current="page"
                  to="/news"
                >
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active link-info"
                  aria-current="page"
                  to="/career"
                >
                  Career
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active link-info"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => {
                  navigate("/book");
                }}
              >
                Tap Here To Book Now
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
