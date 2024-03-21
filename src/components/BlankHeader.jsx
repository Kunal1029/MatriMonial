/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

function BlankHeader() {
  const headerRef = useRef(null);

  return (
    <>
      <header ref={headerRef} className="container-fluid fixed-top" style={{backgroundColor: "#B03060"}}>
        <nav className="navbar navbar-expand-lg container">
          <div className="container-fluid">
            <div className="logoimg">
              <Link className="navbar-brand me-auto " to="/">
                <img src="image/logo3.png" className="" alt="" />
              </Link>
            </div>

            <div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mb-2 mb-lg-0 lato-regular">
                  <li className="nav-item lato-bold menu">
                    <Link className="nav-link active text-light" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item lato-bold menu">
                    <Link className="nav-link active text-light" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item lato-bold menu">
                    <Link className="nav-link active text-light" to="/contact">
                      Contact
                    </Link>
                  </li>

                  <li className="nav-item lato-bold menu">
                    <Link className="nav-link active text-light" to="/ourplan">
                      Our Plans
                    </Link>
                  </li>

                  
                </ul>

                {/* <!-- Button trigger modal --> */}
                <Link
                  type="button"
                  className="btn btn btn-danger text-light"
                  to="/login">
                  Login
                </Link>

                <Link type="button" to="/register"
                  className="btn btn btn-danger text-light ms-2">
                  SignUp
                </Link>
                
              </div>
            </div>
          </div>
        </nav>
      </header>

    
    </>
  );
}


export default BlankHeader;