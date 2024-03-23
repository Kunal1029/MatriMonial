import { useState } from "react";
// import BlankHeader from "./BlankHeader";
import { Link } from "react-router-dom";
import { Header } from "./Header";

export function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = {};
    switch (name) {
      case "phone":
        if (!/^\d+$/.test(value)) {
          error[name] = "Phone number must contain only digits";
        }
        break;

      default:
        break;
    }
    setErrors({ ...errors, ...error });
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Clear form fields after submission
    setFormData({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    });
    setErrors({});

    // Save data in JSON format
    const jsonData = JSON.stringify(formData);
    console.log(jsonData, "hello"); // You can perform further actions with the JSON data
  };

  return (
    <div className="mycontainer firstmodalform">
      <Header showAnimation={false} mybgclass="#b03060" />
      <div className="formImg col-md-6 mt-5 mb-5">
        <img src="image/finalLogo.png" alt="" />
      </div>
      <form className="firstRegister col-md-5" onSubmit={handleSubmit}>
        <div className="mb-3 col-lg-12">
          <label className="form-label">First Name</label>
          <input
            type="text"
            placeholder="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="form-control shadow-none"
          />
        </div>
        <div className="mb-3 col-lg-12">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="form-control  shadow-none "
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="mb-3 col-lg-12">
          <label className="form-label">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone"
            className="form-control  shadow-none "
          />
          {errors.phone && <div className="text-danger">{errors.phone}</div>}
        </div>
        <div className="mb-3 col-lg-12">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            className="form-control  shadow-none "
          />
        </div>
        <div className="mb-3 col-lg-12">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="form-control  shadow-none "
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <div>
        <p className="text-center log mt-1">
          Already have an account?
          <Link to="/login">
            <b>Log In</b>
          </Link>
        </p>
        
      </div>
      </form>

     
    </div>
  );
}
