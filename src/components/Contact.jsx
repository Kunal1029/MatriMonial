import { Header } from "./Header";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiry: "",
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
      inquiry: formData.inquiry,
    });
    setErrors({});

    // Save data in JSON format
    const jsonData = JSON.stringify(formData);
    console.log(jsonData, "hello"); // You can perform further actions with the JSON data
  };
  return (
    <>
      <div className="container-fluid maincontact">
        <Header showAnimation={true} />

        {/* <!-- <div><img src="image/contact1.jpg" alt=""></div> --> */}

        <div className="mycontainer contact">

          <div className="text-white address col-lg-5 col-md-4 col-12">

            <h1>Get in Touch</h1>
            <p>Address1</p>
            <p>Address2</p>
            <p>contact number</p>
            <p>email</p>
          </div>

          <form className="firstRegister col-lg-6 col-md-7 col-12" onSubmit={handleSubmit}>
            <div className="mb-3 ">
              <label className="form-label text-white">Full Name</label>
              <input
                type="text"
                placeholder="e.g. John kumar"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="form-control shadow-none"
              />
            </div>
            <div className="mb-3 ">
              <label className="form-label  text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. john200@gmail.com"
                className="form-control  shadow-none "
              />
              {errors.email && (
                <div className="text-danger">{errors.email}</div>
              )}
            </div>
            <div className="mb-3 ">
              <label className="form-label text-white">Phone</label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 9898898998"
                className="form-control  shadow-none"
              />
              
            </div>
            <div className="mb-3 ">
              <label className="form-label  text-white">Any Comments?</label>
              <textarea
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                cols="10" rows="2"
                placeholder="Enter here comments or any auery e.g. How much profile can i add"
                className="form-control  shadow-none"
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">
              Submit
            </button>

          
          </form>
        </div>

        {/* <!-- map --> */}
      </div>

      <div className="mappmt-2 mb-2 text-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14316.720846588045!2d78.1678433!3d26.2233334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1709121811564!5m2!1sen!2sin"
          style={{ border: "0px", width: "90%", height: "450px" }}
          className="mt-3 mb-2"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
