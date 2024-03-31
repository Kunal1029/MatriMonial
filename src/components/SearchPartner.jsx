/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function SearchPartner() {
  const [errors, setErrors] = useState("");

  const [formData, setFormData] = useState({
    gender: "",
    minAge: "",
    maxAge: "",
    gotra: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can access all form data here and perform further actions
    // console.log(formData);
    setFormData({
      gender: "",
      minAge: "",
      maxAge: "",
      gotra: "",
    });
    // console.log(formData);
    if (Object.values(formData).some((value) => value !== "")) {
      // Convert formData to a query string
      const queryString = Object.keys(formData)
        .filter((key) => formData[key] !== "")
        .map(
          (key) =>
            encodeURIComponent(key) + "=" + encodeURIComponent(formData[key])
        )
        .join("&");

      // Redirect to recommendation page with formData in URL
      window.location.href = `/recommendationall?${queryString}`;
    } else {
      setErrors("Please fill out the form."); // Display error message
    }
  };

  return (
    <>
      {errors}
      <form className="filterOne" onSubmit={handleSubmit}>
       
          <div className="fom1">
            {/* Gender */}
            <div className="d-flex flex-column">
              <label className="form-label text-white">Gender</label>
              <select
                className="form-select"
                name="gender"
                value={formData.gender} // Add value attribute here
                onChange={handleChange}
              >
                <option value="Select">select</option>
                <option value="female">Woman</option>
                <option value="male">Man</option>
              </select>
            </div>
            {/* Age */}
            <div className="d-flex flex-column">
              <label className="form-label text-white">Aged</label>
              <div className="d-flex">
                <input
                  type="number"
                  name="minAge"
                  max={45}
                  min={21}
                  value={formData.minAge}
                  onChange={handleChange}
                  placeholder="e.g. 21"
                />
                <span className="text-white ms-2 me-2">to</span>
                <input
                  type="number"
                  name="maxAge"
                  max={45}
                  min={21}
                  value={formData.maxAge}
                  onChange={handleChange}
                  placeholder="e.g. 28"
                />
              </div>
            </div>
          </div>
          <div className="fom1">
            {/* Religion */}
            <div className="d-flex flex-column">
              <label className="form-label text-white">Gotra</label>
              <input
                type="text"
                name="gotra"
                placeholder="e.g. chandil"
                value={formData.gotra}
                onChange={handleChange}
              />
            </div>
          </div>
        
       
          <button type="submit" className="btnSf">
            Lets Begin
          </button>
      
      </form>
    </>
  );
}

export default SearchPartner;
