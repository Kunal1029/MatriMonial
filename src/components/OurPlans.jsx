/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";

function OurPlans() {
  return (
    <div className="mt-5 mb-5">
      <div className="card w-50">
        <img src="./image/plans.jpg" className="card-img-top " alt="..." />
        <div className="card-body">
          <div>
            <h5 className="card-title text-center mb-4 mt-3">
              Our Plans and Services full access 200 ₹
            </h5>
          </div>

          <ul className="card-text">
            <li>Access to Advanced Features</li>
            <li>Increased Visibility and Credibility</li>
            <li>Profile Verification and Security</li>
            <li>One Time Purchase per profile</li>
          </ul>

          {/* <Link to="/" className="btn btn-primary">
            Click Next to Continue
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default OurPlans;
