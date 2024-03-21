/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

export default function ShaadhiFilter() {
  
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
    console.log(formData);
  };

  return (
    <form className="filterOne" onSubmit={handleSubmit}>
      <div className="fom1">
        {/* Gender */}
        <div className="d-flex flex-column">
          <label className="form-label text-white">I'm looking for a</label>
          <select
            className="form-select"
            name="gender"
            value={formData.gender} // Add value attribute here
            onChange={handleChange}
          >
            <option value="Woman">Woman</option>
            <option value="Man">Man</option>
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
            />
            <span className="text-white ms-2 me-2">to</span>
            <input
              type="number"
              name="maxAge"
              max={45}
              min={21}
              value={formData.maxAge}
              onChange={handleChange}
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

      <div>
        <button type="submit">Lets Begin</button>
      </div>
    </form>
  );
}
