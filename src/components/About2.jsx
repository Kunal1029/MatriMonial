/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header2 } from './Header';

function About2() {
    const [showType, setshowType] = useState({ show: true, num: null });

  function showDataType(e) {
    setshowType({ show: true, num: e });
  }
  return (
    
    <div className="mainAbout">
      <Header2 showAnimation2={true}  />
      <div className="aboutus">
        <h1>About Us</h1>
      </div>

      {/* <div className="aboutimg text-center">
        <img src="image/pic.jpg" alt="" />
      </div> */}

      <div className="aboutText w-100">
        <h2 className="mb-4">About Vaishya Samaj Matrimonial</h2>

        <p className="">
          Welcome to Vaishya Samaj Matrimonial, your trusted partner in finding
          the perfect match within the Vaishya community. We understand the
          importance of cultural values and traditions in finding a life
          partner, and our platform is designed to help individuals connect with
          like-minded individuals who share similar backgrounds, beliefs, and
          aspirations.
        </p>
      </div>

      <div className="aboutCard w-100 mt-5 mb-5">
        <div className="card  text-center">
          <div className="card-header  w-100">
            <ul className="nav nav-tabs card-header-tabs text-center">
              <li className="nav-item">
                <a
                  className={`nav-link  ${
                    showType.show && showType.num === null ? "active" : ""
                  } `}
                  onClick={() => showDataType(null)}
                  id="mission"
                >
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link  ${
                    showType.show && showType.num === 1 ? "active" : ""
                  } `}
                  onClick={() => showDataType(1)}
                  id="mission"
                >
                  Our Mission
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link  ${
                    showType.show && showType.num === 2 ? "active" : ""
                  } `}
                  onClick={() => showDataType(2)}
                  id="team"
                >
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          <div className="card-body">
            {showType.num === null && (
              <div className=" permanentCard  mt-3 mb-5">
                <i>
                  <b className="ufr">Community-Focused</b> We are all about the
                  Vaishya community. Our platform is made just for Vaishya
                  community individuals, keeping their values and traditions in
                  mind every step of the way.
                </i>
                <br />
                <i>
                  <b className="ufr">Advanced Matching</b> Our goal is to
                  streamline the matchmaking process and increase the likelihood
                  of finding meaningful connections.
                </i>
                <br />
                <i>
                  <b className="ufr">User-Friendly Interface</b> We believe in
                  simplicity and ease of use.
                </i>
              </div>
            )}

            {showType.num === 1 && (
              <div className="om  mt-3 mb-5" id="Ourmission">
                {/* <h5 className="card-title">Our Mission</h5> */}
                <p className="card-text">
                  At Vaishya Samaj Matrimonial, our mission is to facilitate
                  meaningful connections and lifelong relationships within the
                  Vaishya community. We strive to provide a safe and secure
                  platform where individuals can search for their ideal partner
                  with confidence and convenience. Our dedicated team is
                  committed to ensuring the privacy and security of our users
                  while offering personalized support throughout their
                  matrimonial journey.
                </p>
              </div>
            )}

            {showType.num === 2 && (
              <div className="ot mt-3 mb-5" id="Ourteam">
                {/* <h5 className="card-title">Our Team</h5> */}
                <p className="card-text">
                  Behind Vaishya Samaj Matrimonial is a dedicated team of
                  professionals committed to delivering exceptional service and
                  support to our members. From customer service representatives
                  to technical experts, each member of our team plays a crucial
                  role in ensuring the success and satisfaction of our users.
                </p>
              </div>
            )}
            <Link to="/register" className="btn btn-outline-danger mt-3">
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About2
