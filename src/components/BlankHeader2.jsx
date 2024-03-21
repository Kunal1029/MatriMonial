import { Link } from "react-router-dom";
/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";

export default function BlankHeader2() {
    const headerRef = useRef(null);

  
    return (
      <>
        <header ref={headerRef} className="container-fluid fixed-top" style={{backgroundColor: "#B03060"}}>
          <nav className="navbar navbar-expand-lg container">
            <div className="container-fluid">
            <div className="logoimg">
                <Link className="navbar-brand me-auto " to="/home2">
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
                      <Link className="nav-link active text-light" to="/home2">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item lato-bold menu">
                      <Link className="nav-link active text-light" to="/home2/about">
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
                  <Link to="/"
                    type="button"
                    className="border-0 btn home2btn p-2 px-4 rounded-pill text-light"
                  >
                    Log Out
                  </Link>
  
                  <Link type="button" to="/mainregister" className="border-0 p-2 home2btn btn rounded-pill ms-2">
                    Add Profile
                    <i className="fa-solid fa-plus ms-2 rounded-pill border border-white p-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
  
        {/* <!-- Modal --> */}
      </>
    );
  }
