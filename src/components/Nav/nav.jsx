import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link} from "react-router-dom";

import "./nav.css";

function Nav() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top bg-body-tertiary bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
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
            <ul className="navbar-nav me-auto fw-bold my-2 d-flex mx-auto justify-content-center my-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link active link-info"
                  aria-current="page"
                  to="/adminnews"
                >
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active link-info"
                  aria-current="page"
                  to="/booking"
                >
                  Booking
                </Link>
              </li>
              
              <li className="nav-item">
                <Link
                  className="nav-link active link-info"
                  aria-current="page"
                  to="/query"
                >
                  Query
                </Link>
              </li>
              <li className="nav-item logout">
                <Link
                  className="nav-link active link-info"
                  aria-current="page"
                  to="/logout"
                >
                  Logout
                </Link>
              </li>
            </ul>]
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
