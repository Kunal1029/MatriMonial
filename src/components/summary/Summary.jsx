/* eslint-disable no-unused-vars */
import React from "react";
import "./Summary.css"; // Import your CSS file for custom styles

export default function Summary() {
  return (
    <>
      <div className="mycontainer">
        <div className="">
          <img
            className=""
            src="./image/salmon.jpg"
          />
        </div>

        <div className="mt-5">
          <div className="col-md-4 basic-detail-box">
            <h5>Candidate basic details</h5>
            <ul>
              <li>Name: </li>
              <li>DOB: </li>
              <li>Gender:</li>
              <li>Address:</li>
              <li>Phone:</li>
              <li>Email:</li>
            </ul>
          </div>

          <div className="col-md-4 personal-detail-box">
            <h5>candidate personal details</h5>
            <ul>
              <li>Birthtime:</li>
              <li>Gotra:</li>
              <li>Birth Place:</li>
              <li>Height:</li>
              <li>Body Type:</li>
              <li>Color:</li>
              <li>Qualification:</li>
              <li>Degree:</li>
              <li>Occupation:</li>
              <li>Designation:</li>
              <li>Income:</li>
              <li>Work Place:</li>
            </ul>
          </div>

          <div className="col-md-4 family-detail-box mt-2">
            <h5>candidate Family details</h5>
            <ul className="ms-5">
              <li>Father Name:</li>
              <li>Father Mob:</li>
              <li>Father Occupation:</li>
              <li>Father Income:</li>
              <li>Mother Name:</li>
              <li>Mother Occupation</li>
              <li>Family Address:</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
