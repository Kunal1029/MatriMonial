import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";

export function Login() {
  const [formData, setFormData] = useState({
    emailOrPhone: "", // Changed field name to emailOrPhone
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = {};
    switch (name) {
      case "emailOrPhone":
        // Check if value is email or phone number
        if (!value.trim()) {
          error[name] = "Email or Phone is required";
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
      emailOrPhone: "",
      password: "",
    });
    setErrors({});

    // Save data in JSON format
    const jsonData = JSON.stringify(formData);
    console.log(jsonData, "hello"); // You can perform further actions with the JSON data
  };

  return (
    <div className="mycontainer firstmodalform">
      
      <Header showAnimation={false} mybgclass="#b03060" />

      <div className="imgform">

        <div className="formImg col-md-7 col-11 mt-5 mb-5">
          <img src="image/finalLogo.png" className="w-75" alt="" />
        </div>

        <form className="firstRegister col-md-5 col-11" onSubmit={handleSubmit}>
          <div className="mb-3 col-lg-12">
            <label className="form-label">Email or Phone</label>
            <input
              type="text"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              placeholder="Email or Phone"
              className="form-control shadow-none"
            />
            {errors.emailOrPhone && (
              <div className="text-danger">{errors.emailOrPhone}</div>
            )}
          </div>
          <div className="mb-3 col-lg-12">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="form-control shadow-none"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          <div>
            <p className="text-center log mt-1">
              Don&#39;t have an account?
              <Link to="/register">
                <b>Register</b>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
