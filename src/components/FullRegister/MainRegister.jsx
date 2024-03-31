/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
// import Pay from "../../Pay";
import Data from "../pin/Data";
import Pay from "../../Pay";
import OurPlans from "../OurPlans";
import { Header2 } from "../Header";
// import ForsendProp from "../Admin/ForsendProp";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function MainRegister() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
    birthTime: "",
    gotra: "",
    birthPlace: "",
    height: "",
    bodyType: "",
    color: "",
    qualification: "",
    degree: "",
    occupation: "",
    designation: "",
    candidateIncome: "",
    workPlace: "",
    fatherName: "",
    fatherMobile: "",
    fatherOccupation: "",
    fatherIncome: "",
    motherName: "",
    motherOccupation: "",
    familyAddress: "",
    image: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const [pincode, setPincode] = useState("");
  const handlePincodeChangeadd1 = (e) => {
    const inputPincode = e.target.value;
    setPincode(inputPincode);

    // Find the address corresponding to the entered pincode
    const matchingData = Data.find((item) => item.pincode === inputPincode);
    if (matchingData) {
      setFormData({
        ...formData,
        address: `${matchingData.pincode} ${matchingData.address}, ${matchingData.city}, ${matchingData.country}`,
      });
    } else {
      setFormData({
        ...formData,
        address: "",
      });
    }
  };

  const [pinCodeBirth, setPinCodeBirth] = useState(""); //this is for fun
  const handleBirthPlaceAddress = (e) => {
    const inputPincode = e.target.value;
    setPinCodeBirth(inputPincode);

    const matchingData = Data.find((item) => item.pincode === inputPincode);
    if (matchingData) {
      setFormData({
        ...formData,
        birthPlace: `${matchingData.pincode} ${matchingData.address}, ${matchingData.city}, ${matchingData.country}`,
      });
    } else {
      setFormData({
        ...formData,
        birthPlace: "",
      });
    }
  };

  const [pincodeWork, setPincodeWork] = useState("");
  const handlePincodeChangeWork = (e) => {
    const inputPincode = e.target.value;
    setPincodeWork(inputPincode);

    // Find the address corresponding to the entered pincode
    const matchingData = Data.find((item) => item.pincode === inputPincode);
    if (matchingData) {
      setFormData({
        ...formData,
        workPlace: `${matchingData.pincode} ${matchingData.address}, ${matchingData.city}, ${matchingData.country}`,
      });
    } else {
      setFormData({
        ...formData,
        workPlace: "",
      });
    }
  };

  const [pinCodefamily, setPinCodefamily] = useState(""); //this is for fun
  const handlefamilyAddress = (e) => {
    const inputPincode = e.target.value;
    setPinCodefamily(inputPincode);

    const matchingData = Data.find((item) => item.pincode === inputPincode);
    if (matchingData) {
      setFormData({
        ...formData,
        familyAddress: `${matchingData.pincode} ${matchingData.address}, ${matchingData.city}, ${matchingData.country}`,
      });
    } else {
      setFormData({
        ...formData,
        familyAddress: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setTouched({ ...touched, [name]: true });
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const [timeoutStarted, setTimeoutStarted] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(step)) {
      // Submit formData to the backend or perform any other actions
      console.log("Form submitted:", formData);
      // 
      // Reset form data and step state
      setFormData({
        // Candidate Basic Details
        name: "",
        dob: "",
        gender: "",
        address: "",
        phone: "",
        email: "",
        // Candidate Personal Details
        birthTime: "",
        gotra: "",
        birthPlace: "",
        height: "",
        bodyType: "",
        color: "",
        qualification: "",
        degree: "",
        occupation: "",
        designation: "",
        candidateIncome: "",
        workPlace: "",
        // candidate family details
        fatherName: "",
        fatherMobile: "",
        fatherOccupation: "",
        fatherIncome: "",
        motherName: "",
        motherOccupation: "",
        familyAddress: "",
        //top
        image: "",
      });
      setStep(1);

      // Start timeout to show modal after 2 seconds
      const timeoutId = setTimeout(() => {
        setTimeoutStarted(true);
        setShow(true); // Launching the modal automatically when timeout starts
      }, 1000); // 2 seconds

      // Start another timeout to hide modal after 5 seconds
      const hideTimeoutId = setTimeout(() => {
        setTimeoutStarted(false);
        setShow(false); // Hiding the modal after 5 seconds
        window.location.href = "/home2";
      }, 5000); // 7 seconds (2 seconds for showing modal + 5 seconds for hiding)

      // Cleanup function for the timeouts
      return () => {
        clearTimeout(timeoutId);
        clearTimeout(hideTimeoutId);
      };
    }
  };

  const validateStep = (step) => {
    let isValid = true;
    let stepErrors = {};

    switch (step) {
      case 1:
        if (!formData.name.trim()) {
          stepErrors.name = "Name is required";
          isValid = false;
        }
        if (!formData.dob.trim()) {
          stepErrors.dob = "Date of Birth is required";
          isValid = false;
        }
        if (!formData.gender.trim()) {
          stepErrors.gender = "Gender is required";
          isValid = false;
        }
        if (!pincode) {
          stepErrors.pincode = "Pincode is required";
          isValid = false;
        }
        if (!formData.address.trim()) {
          stepErrors.address = "Address is required";
          isValid = false;
        }
        if (!formData.phone.trim()) {
          stepErrors.phone = "Phone is required";
          isValid = false;
        }
        break;
      // Add cases for other steps if needed
      default:
        break;
    }

    setErrors(stepErrors);
    return isValid;
  };

  return (
    <div>
      <Header2 showAnimation2={false} mybgclass2="#b03060" />

      <div className="MainRegister mt-5">
        <div className="progress-bar">
          <div className={`step ${step >= 1 ? "active" : ""}`}>1</div>
          <span className={`${step >= 2 ? "active" : ""}`}></span>
          <div className={`step ${step >= 2 ? "active" : ""}`}>2</div>
          <span className={`${step >= 3 ? "active" : ""}`}></span>
          <div className={`step ${step >= 3 ? "active" : ""}`}>3</div>
          <span className={`${step >= 4 ? "active" : ""}`}></span>
          <div className={`step ${step >= 4 ? "active" : ""}`}>4</div>
          <span className={`${step >= 5 ? "active" : ""}`}></span>
          <div className={`step ${step >= 5 ? "active" : ""}`}>5</div>
          <span className={`${step >= 6 ? "active" : ""}`}></span>
          <div className={`step ${step >= 6 ? "active" : ""}`}>6</div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="firstRegister multistepform col-md-5 fs-5"
        >
          {step === 1 && (
            <div>
              <h2 className="mt-5">Candiate Basic Details</h2>

              <div className="mb-2 mt-5">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Raj Gupta"
                  className="form-control shadow-none"
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>

              <div className="mb-2 mt-5">
                <label className="form-label">Date of Birth</label>
                <input
                  type="Date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="form-control shadow-none"
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>

              <div className="d-flex gap-5">
                <div className="mb-2 mt-5">
                  <label className="form-label">Gender</label>
                  <div className="d-flex gap-1">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleChange}
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="d-flex gap-1">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleChange}
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                  {errors.gender && (
                    <span className="error">{errors.gender}</span>
                  )}
                </div>

                <div className="mb-2 mt-5">
                  <label className="form-label">Candiate Pincode</label>
                  <br />
                  <input
                    type="number"
                    id="pincode"
                    value={pincode}
                    onChange={handlePincodeChangeadd1}
                  />
                  <br />

                  <label className="form-label">Candiate Address</label>
                  <textarea
                    name="address"
                    className="form-control shadow-none"
                    cols="40"
                    rows="1"
                    value={formData.address}
                    onChange={handleChange}
                    readOnly
                  ></textarea>
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>
              </div>

              <div className="d-flex gap-5">
                <div className="mb-2 mt-5">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9999999999"
                    className="form-control shadow-none"
                  />
                  {errors.phone && (
                    <span className="error">{errors.phone}</span>
                  )}
                </div>

                <div className="mb-2 mt-5">
                  <label className="form-label">Email (optional)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. raj@gmail.com"
                    className="form-control shadow-none"
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>
              </div>

              <button type="button" onClick={handleNext}>
                Next
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="mt-5">Candiate Personal Details</h2>

              <div className="d-lg-flex justify-content-between">
                <div className="mb-2 mt-5">
                  <label className="form-label">Birth Time:</label>
                  <input
                    className="form-control shadow-none"
                    type="Time"
                    name="birthTime"
                    value={formData.birthTime}
                    onChange={handleChange}
                  />
                  <p>Selected Birth Time: {formData.birthTime}</p>
                </div>

                <div className="mb-2 mt-5">
                  <label className="form-label">Gotra</label>
                  <input
                    type="text"
                    name="gotra"
                    value={formData.gotra}
                    onChange={handleChange}
                    placeholder="e.g. Chandil"
                    className="form-control shadow-none"
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>
              </div>

              {/* burth Place */}

              <div className="d-lg-flex justify-content-between mb-4">
                <div className="mb-2 mt-5 col-xxl-5">
                  <label className="form-label">Birth Place Pincode</label>
                  <input
                    type="number"
                    value={pinCodeBirth}
                    onChange={handleBirthPlaceAddress}
                    className="form-control shadow-none"
                  />
                </div>

                <div className="mb-2 mt-5 col-xxl-5 ">
                  <label className="form-label">Birth Place Address</label>
                  <textarea
                    name="birthPlace"
                    className="form-control shadow-none"
                    cols="30"
                    rows="1"
                    value={formData.birthPlace}
                    onChange={handleChange}
                    readOnly
                  ></textarea>
                </div>
              </div>

              {/* burth Place end  */}

              <div className="d-lg-flex justify-content-between ">
                <div className="mb-2 mt-5 col-xxl-3 ">
                  <label className="form-label">Candiate Height</label>
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    min={4}
                    max={7}
                    placeholder="e.g. 5.7"
                    required
                    className="form-control shadow-none"
                  />
                </div>

                <div className="mb-2 mt-5 col-xxl-3 ">
                  <label className="form-label">Body type</label>
                  <select
                    name="bodyType"
                    className="form-control shadow-none"
                    onChange={handleChange}
                  >
                    <option>Select</option>
                    <option value="slim">Slim</option>
                    <option value="Average">Average</option>
                    <option value="Athletic">Athletic</option>
                    <option value="Heavy">Heavy</option>
                  </select>
                </div>

                <div className="mb-2 mt-5 col-xxl-3 ">
                  <label className="form-label">Complexion</label>
                  <select
                    name="color"
                    className="form-control shadow-none"
                    onChange={handleChange}
                  >
                    <option>Select</option>
                    <option value="Fair">Fair</option>
                    <option value="Dusky">Dusky</option>
                    <option value="Dark">Dark</option>
                    <option value="Wheatish">wheatish</option>
                  </select>
                </div>
              </div>

              <div className="d-lg-flex justify-content-between ">
                <div className="mb-2 mt-5 col-xxl-5 ">
                  <label className="form-label"> Highest education</label>
                  <select
                    name="qualification"
                    className="form-control shadow-none"
                    onChange={handleChange}
                  >
                    <option>Select</option>
                    <option value="Up to 10th">Up to 10th</option>
                    <option value="Up to 12th">Up to 12th</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Post Graduate">Post Graduate</option>
                    <option value="Phd">PhD</option>
                    <option value="No">No</option>
                  </select>
                </div>

                {/* condition for below education details get if select op 3 to op 5 */}

                <div className="mb-2 mt-5 col-xxl-5 ">
                  <label className="form-label">Degree type</label>
                  <input
                    type="text"
                    name="degree"
                    value={formData.degree}
                    onChange={handleChange}
                    placeholder="e.g. BE , B.Com"
                    className="form-control shadow-none"
                  />
                </div>
              </div>

              <div className="d-lg-flex justify-content-between ">
                <div className="mb-2 mt-5 col-xxl-5 ">
                  <label className="form-label">Occupation</label>
                  <select
                    name="occupation"
                    className="form-control shadow-none"
                    onChange={handleChange}
                  >
                    <option>Select</option>

                    <option value="Salaried">Salaried</option>
                    <option value="Self Employed">Self Employed</option>
                  </select>
                </div>

                <div className="mb-2 mt-5 col-xxl-5 ">
                  <label className="form-label">Designation</label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="e.g. Manager , business owner"
                    className="form-control shadow-none"
                  />
                </div>
              </div>

              <div className="d-lg-flex justify-content-between ">
                <div className="mb-2 mt-5 col-xxl-5 ">
                  <label className="form-label">Annual Income</label>
                  <select
                    name="candidateIncome"
                    className="form-control shadow-none"
                    onChange={handleChange}
                  >
                    <option>Select</option>
                    <option value="0 to 1 lakh">0 to 1 lakh</option>
                    <option value="2 lakh to 3 lakh">2 lakh to 3 lakh</option>
                    <option value="4 lakh to 5 lakh">4 lakh to 5 lakh</option>
                    <option value="6 lakh to 7 lakh">6 lakh to 7 lakh</option>
                    <option value="8 lakh to 9 lakh">8 lakh to 9 lakh</option>
                    <option value="10+ lakh">10+ lakh</option>
                  </select>
                </div>
              </div>

              {/* work Place */}

              <div className="d-lg-flex justify-content-between mb-4">
                <div className="mb-2 mt-5 col-xxl-5">
                  <label className="form-label">Work Place</label>
                  <input
                    type="number"
                    value={pincodeWork}
                    onChange={handlePincodeChangeWork}
                    className="form-control shadow-none"
                  />
                </div>

                <div className="mb-2 mt-5 col-xxl-5 ">
                  <label className="form-label">Work Place Address</label>
                  <textarea
                    name="workPlace"
                    className="form-control shadow-none"
                    cols="30"
                    rows="1"
                    value={formData.workPlace}
                    onChange={handleChange}
                    readOnly
                  ></textarea>
                </div>
              </div>

              {/* work Place end  */}

              <button type="button" onClick={handlePrevious}>
                Previous
              </button>
              <button type="button" onClick={handleNext}>
                Next
              </button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="mt-5">Candiate Family Details</h2>

              <div className="d-lg-flex justify-content-between ">
                <div className="mb-2 mt-5 col-xxl-5 ">
                  <label className="form-label">Candiate Father Name</label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    placeholder="e.g. Raj Gupta"
                    className="form-control shadow-none"
                  />
                </div>

                <div className="mb-2 mt-5 col-xxl-5 ">
                  <label className="form-label">Father Mob.</label>
                  <input
                    type="number"
                    name="fatherMobile"
                    value={formData.fatherMobile}
                    onChange={handleChange}
                    placeholder="xxxxxxx98"
                    className="form-control shadow-none"
                  />
                </div>
              </div>

              <div className="d-lg-flex justify-content-between ">
                <div className="mb-2 mt-5 col-xxl-5 ">
                  <label className="form-label">Father&#39;s Occupation</label>
                  <select
                    name="fatherOccupation"
                    className="form-control shadow-none"
                    onChange={handleChange}
                  >
                    <option>Select</option>

                    <option value="Salaried">Salaried</option>
                    <option value="Self Employed">Self Employed</option>
                    <option value="Pension">Pension</option>
                    <option value="Retired">Retired</option>
                  </select>
                </div>

                <div className="mb-2 mt-5 col-xxl-5 ">
                  <label className="form-label">
                    Father&#39;s Annual Income
                  </label>
                  <select
                    name="fatherIncome"
                    className="form-control shadow-none"
                    onChange={handleChange}
                  >
                    <option>Select</option>
                    <option value="0 to 1 lakh">0 to 1 lakh</option>
                    <option value="2 lakh to 3 lakh">2 lakh to 3 lakh</option>
                    <option value="4 lakh to 5 lakh">4 lakh to 5 lakh</option>
                    <option value="6 lakh to 7 lakh">6 lakh to 7 lakh</option>
                    <option value="8 lakh to 9 lakh">8 lakh to 9 lakh</option>
                    <option value="10+ lakh">10+ lakh</option>
                  </select>
                </div>
              </div>

              <div className="d-lg-flex justify-content-between ">
                <div className="mb-2 mt-5 col-xxl-5 ">
                  <label className="form-label">Candiate Mother Name</label>
                  <input
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleChange}
                    placeholder="e.g. Rani Gupta"
                    className="form-control shadow-none"
                  />
                </div>

                <div className="mb-2 mt-5 col-xxl-5 ">
                  <label className="form-label">Mother&#39;s Occupation</label>
                  <select
                    name="motherOccupation"
                    className="form-control shadow-none"
                    onChange={handleChange}
                  >
                    <option>Select</option>

                    <option value="House Wife">HouseWife</option>
                    <option value="Pension">Pension</option>
                    <option value="Self Employed">Self Employed</option>
                    <option value="Retired">Retired</option>
                  </select>
                </div>
              </div>

              <div className="d-lg-flex justify-content-between mb-4">
                <div className="mb-2 mt-5 col-xxl-5">
                  <label className="form-label">Family Pincode</label>
                  <input
                    type="number"
                    id="pincode"
                    value={pinCodefamily}
                    onChange={handlefamilyAddress}
                    className="form-control shadow-none"
                  />
                </div>

                <div className="mb-2 mt-5 col-xxl-5 ">
                  <label className="form-label">Family Address</label>
                  <textarea
                    name="familyAddress"
                    className="form-control shadow-none"
                    cols="30"
                    rows="1"
                    value={formData.familyAddress}
                    onChange={handleChange}
                    readOnly
                  ></textarea>
                </div>
              </div>

              <button type="button" onClick={handlePrevious}>
                Previous
              </button>

              <button type="button" onClick={handleNext}>
                Next
              </button>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="mt-5 mb-5">Candiate Photo</h2>

              <div className="myphoto ">
                <input
                  type="file"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="image"
                />
              </div>
              <div className="mt-5">
                <input type="checkbox" id="declarationAgreement" required />
                <label htmlFor="declarationAgreement">
                  <p className="ms-2">
                    I agree to the Terms & Conditions &nbsp;
                    <a
                      className=""
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Terms & Conditions
                    </a>
                  </p>
                </label>
              </div>

              {/* <!-- Button trigger modal --> */}
              {/* <button type="button">Launch demo modal</button> */}

              {/* <!-- Modal --> */}
              <div
                className="modal fade "
                id="exampleModal"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Terms & Conditions
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <h2>
                        <strong>Terms and Conditions</strong>
                      </h2>

                      <p>Welcome to vaishyasamajshaadi!</p>

                      <p>
                        These terms and conditions outline the rules and
                        regulations for the use of Vaishyasamajshaadi's Website,
                        located at vaishyasamajshaadi.com.
                      </p>

                      <p>
                        By accessing this website we assume you accept these
                        terms and conditions. Do not continue to use
                        vaishyasamajshaadi if you do not agree to take all of
                        the terms and conditions stated on this page.
                      </p>

                      <p>
                        The following terminology applies to these Terms and
                        Conditions, Privacy Statement and Disclaimer Notice and
                        all Agreements: "Client", "You" and "Your" refers to
                        you, the person log on this website and compliant to the
                        Company's terms and conditions. "The Company",
                        "Ourselves", "We", "Our" and "Us", refers to our
                        Company. "Party", "Parties", or "Us", refers to both the
                        Client and ourselves. All terms refer to the offer,
                        acceptance and consideration of payment necessary to
                        undertake the process of our assistance to the Client in
                        the most appropriate manner for the express purpose of
                        meeting the Client's needs in respect of provision of
                        the Company's stated services, in accordance with and
                        subject to, prevailing law of in. Any use of the above
                        terminology or other words in the singular, plural,
                        capitalization and/or he/she or they, are taken as
                        interchangeable and therefore as referring to same.
                      </p>

                      <h3>
                        <strong>Cookies</strong>
                      </h3>

                      <p>
                        We employ the use of cookies. By accessing
                        vaishyasamajshaadi, you agreed to use cookies in
                        agreement with the Vaishyasamajshaadi's Privacy Policy.{" "}
                      </p>

                      <p>
                        Most interactive websites use cookies to let us retrieve
                        the user's details for each visit. Cookies are used by
                        our website to enable the functionality of certain areas
                        to make it easier for people visiting our website. Some
                        of our affiliate/advertising partners may also use
                        cookies.
                      </p>

                      <h3>
                        <strong>License</strong>
                      </h3>

                      <p>
                        Unless otherwise stated, Vaishyasamajshaadi and/or its
                        licensors own the intellectual property rights for all
                        material on vaishyasamajshaadi. All intellectual
                        property rights are reserved. You may access this from
                        vaishyasamajshaadi for your own personal use subjected
                        to restrictions set in these terms and conditions.
                      </p>

                      <p>You must not:</p>
                      <ul>
                        <li>Republish material from vaishyasamajshaadi</li>
                        <li>
                          Sell, rent or sub-license material from
                          vaishyasamajshaadi
                        </li>
                        <li>
                          Reproduce, duplicate or copy material from
                          vaishyasamajshaadi
                        </li>
                        <li>Redistribute content from vaishyasamajshaadi</li>
                      </ul>

                      <p>
                        This Agreement shall begin on the date hereof. Our Terms
                        and Conditions were created with the help of the{" "}
                        <a href="https://www.termsandconditionsgenerator.com/">
                          Free Terms and Conditions Generator
                        </a>
                        .
                      </p>

                      <p>
                        Parts of this website offer an opportunity for users to
                        post and exchange opinions and information in certain
                        areas of the website. Vaishyasamajshaadi does not
                        filter, edit, publish or review Comments prior to their
                        presence on the website. Comments do not reflect the
                        views and opinions of Vaishyasamajshaadi,its agents
                        and/or affiliates. Comments reflect the views and
                        opinions of the person who post their views and
                        opinions. To the extent permitted by applicable laws,
                        Vaishyasamajshaadi shall not be liable for the Comments
                        or for any liability, damages or expenses caused and/or
                        suffered as a result of any use of and/or posting of
                        and/or appearance of the Comments on this website.
                      </p>

                      <p>
                        Vaishyasamajshaadi reserves the right to monitor all
                        Comments and to remove any Comments which can be
                        considered inappropriate, offensive or causes breach of
                        these Terms and Conditions.
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        I understand
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="plan">
                <OurPlans />
              </div>

              <button type="button" className="mt-5" onClick={handlePrevious}>
                Previous
              </button>
              <button type="button" onClick={handleNext}>
                Next
              </button>
            </div>
          )}

          {step === 5 && (
            <div className="summary mt-5">
              <h2 className="text-center mt-5 mb-5 ">
                Please Check All Deatails are Corrected.
              </h2>

              <div className="mb-5 ">
                <div className="lastimg text-center mb-5">
                  <img className="w-75" src="./image/salman.jpg" />
                </div>

                <div className="basic-detail-box">
                  <h3>Candidate basic details</h3>
                  <ul>
                    <li>Name: {formData.name} </li>
                    <li>DOB: {formData.dob} </li>
                    <li>Gender: {formData.gender} </li>
                    <li>Address: {formData.address} </li>
                    <li>Phone: {formData.phone} </li>
                    <li>Email: {formData.email} </li>
                  </ul>
                </div>
              </div>

              <div className="d-flex-lg mt-5 mb-5 align-item-center gap-3 justify-content-between">
                <div className="personal-detail-box mb-5">
                  <h3>candidate personal details</h3>
                  <ul>
                    <li>Birth Time: {formData.birthTime} </li>
                    <li>Gotra: {formData.gotra} </li>
                    <li>Birth Place: {formData.birthPlace} </li>
                    <li>Height: {formData.height} </li>
                    <li>Body Type: {formData.bodyType} </li>
                    <li>Complexion: {formData.color} </li>
                    <li>Qualification: {formData.qualification} </li>
                    <li>Degree: {formData.degree} </li>
                    <li>Occupation: {formData.occupation} </li>
                    <li>Designation: {formData.designation} </li>
                    <li>Candidate Income : {formData.candidateIncome}</li>
                    <li>Work Place: {formData.workPlace} </li>
                  </ul>
                </div>

                <div className="family-detail-box ">
                  <h3>candidate Family details</h3>
                  <ul className="">
                    <li>Father Name : {formData.fatherName} </li>
                    <li>Father Mob : {formData.fatherMobile}</li>
                    <li>Father Occupation : {formData.fatherOccupation}</li>
                    <li>Father Income : {formData.fatherIncome}</li>
                    <li>Mother Name : {formData.motherName}</li>
                    <li>Mother Occupation : {formData.motherOccupation}</li>
                    <li>Family Address : {formData.familyAddress}</li>
                    <li>image : {formData.image}</li>
                  </ul>
                </div>
              </div>

              <button type="button" className="mt-5" onClick={handlePrevious}>
                Previous
              </button>
              <button type="button" onClick={handleNext}>
                Click to Pay
              </button>
            </div>
          )}

          {step === 6 && (
            <div>
              <div className="payment mt-5 mb-5">
                <Pay pricing={100} />
              </div>

              <button type="button" onClick={handlePrevious}>
                Previous
              </button>

              <button type="submit">Submit</button>
            </div>
          )}
        </form>

        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          centered
          animation={true}
          // className={show ? "modal fade show" : "modal fade"}
        >
          
          <Modal.Body>
            <h1 className="poph1 mt-4 mb-3 ">
            Thank you for registering. Your profile will verify within 24 hours.
            </h1>
          </Modal.Body>
          <Modal.Footer>
            <Link variant="info" className="btn btn-success" to="/home2" onClick={handleClose}>
              Ok
            </Link>
            {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default MainRegister;
