import { useState } from "react";

function MainRegister() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
    height: "",
    bodyType: "",
    color: "",
    qualification: "",
    degree: "",
    occupation: "",
    designation: "",
    candidateIncome: "",
    city: "",
    fatherName: "",
    fatherMobile: "",
    fatherOccupation: "",
    fatherIncome: "",
    motherName: "",
    motherOccupation: "",
    familyAddress: "",
    pincode: "",
    image: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(step)) {
      // Submit formData to the backend or perform any other actions
      console.log("Form submitted:", formData);
      // Reset form data and step state
      setFormData({
        name: "",
        dob: "",
        gender: "",
        address: "",
        phone: "",
        email: "",
        height: "",
        bodyType: "",
        color: "",
        qualification: "",
        degree: "",
        occupation: "",
        designation: "",
        candidateIncome: "",
        city: "",
        fatherName: "",
        fatherMobile: "",
        fatherOccupation: "",
        fatherIncome: "",
        motherName: "",
        motherOccupation: "",
        familyAddress: "",
        pincode: "",
        image: "",
      });
      setStep(1);
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
        if (formData.email) {
          if (!/^\S+@\S+\.\S+$/.test(formData.email))
            stepErrors.email = "Invalid email address";
          isValid = false;
        }
        break;
      // case 2:
      //   if (!formData.height.trim()) {
      //      "Password is required";
      //     isValid = false;
      //   }
      //   if(formData.height < 7.5 && formData.height > 4){
      //     stepErrors.he
      //   }
      //   break;
      // case 3:
      //   if (!formData.address.trim()) {
      //     stepErrors.address = "Address is required";
      //     isValid = false;
      //   }
      //   break;
      // case 4:
      //   if (!formData.phone.trim()) {
      //     stepErrors.phone = "Phone is required";
      //     isValid = false;
      //   }
      //   break;
      default:
        break;
    }

    setErrors(stepErrors);
    return isValid;
  };

  return (
    <div className="MainRegister">
      <div className="progress-bar">
        <div className={`step ${step >= 1 ? "active" : ""}`}>1</div><span className={`${step >= 2 ? "active" : ""}`}></span>
        <div className={`step ${step >= 2 ? "active" : ""}`}>2</div><span className={`${step >= 3 ? "active" : ""}`}></span>
        <div className={`step ${step >= 3 ? "active" : ""}`}>3</div><span className={`${step >= 4 ? "active" : ""}`}></span>
        <div className={`step ${step >= 4 ? "active" : ""}`}>4</div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="firstRegister multistepform col-md-5 fs-5"
      >
        {step === 1 && (
          <div >
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
                <label className="form-label">Address</label>
                <textarea
                  name="address"
                  className="form-control shadow-none"
                  cols="130"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
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
                {errors.phone && <span className="error">{errors.phone}</span>}
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
          <div  >
            <h2 className="mt-5">Candiate Personal Details</h2>

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
                  <option value={formData.bodyType}>Slim</option>
                  <option value={formData.bodyType}>Average</option>
                  <option value={formData.bodyType}>Athletic</option>
                  <option value={formData.bodyType}>Heavy</option>
                </select>
              </div>

              <div className="mb-2 mt-5 col-xxl-3 ">
                <label className="form-label">Complexion</label>
                <select
                  name="bodyType"
                  className="form-control shadow-none"
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option value={formData.bodyType}>Fair</option>
                  <option value={formData.bodyType}>Dusky</option>
                  <option value={formData.bodyType}>Dark</option>
                  <option value={formData.bodyType}>wheatish</option>
                </select>
              </div>
            </div>

            <div className="d-lg-flex justify-content-between ">
              <div className="mb-2 mt-5 col-xxl-5 ">
                <label className="form-label"> Highest education</label>
                <select
                  name="bodyType"
                  className="form-control shadow-none"
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option value={formData.bodyType}>Up to 10th</option>
                  <option value={formData.bodyType}>Up to 12th</option>
                  <option value={formData.bodyType}>Graduate</option>
                  <option value={formData.bodyType}>Post Graduate</option>
                  <option value={formData.bodyType}>PhD</option>
                  <option value={formData.bodyType}>No</option>
                </select>
              </div>

              {/* condition for below education details get if select op 3 to op 5 */}

              <div className="mb-2 mt-5 col-xxl-5 ">
                <label className="form-label">Degree type</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. BE , B.Com"
                  className="form-control shadow-none"
                />
              </div>
            </div>

            <div className="d-lg-flex justify-content-between ">
              <div className="mb-2 mt-5 col-xxl-5 ">
                <label className="form-label">Candiate Occupation</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="e.g. job "
                  className="form-control shadow-none"
                />
              </div>

              <div className="mb-2 mt-5 col-xxl-5 ">
                <label className="form-label">Designation</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
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
                  name="bodyType"
                  className="form-control shadow-none"
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option value={formData.bodyType}>0 to 1 lakh</option>
                  <option value={formData.bodyType}>2 lakh to 3 lakh</option>
                  <option value={formData.bodyType}>4 lakh to 5 lakh</option>
                  <option value={formData.bodyType}>6 lakh to 7 lakh</option>
                  <option value={formData.bodyType}>8 lakh to 9 lakh</option>
                  <option value={formData.bodyType}>10+ lakh</option>
                </select>
              </div>

              <div className="mb-2 mt-5 col-xxl-5 ">
                <label className="form-label">City</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="e.g. Mumbai , Gwalior"
                  className="form-control shadow-none"
                />
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

        {step === 3 && (
          <div  >
            <h2 className="mt-5">Candiate Family Details</h2>

            <div className="d-lg-flex justify-content-between ">
              <div className="mb-2 mt-5 col-xxl-5 ">
                <label className="form-label">Candiate Father Name</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="e.g. Raj Gupta"
                  className="form-control shadow-none"
                />
              </div>

              <div className="mb-2 mt-5 col-xxl-5 ">
                <label className="form-label">Father Mob.</label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="xxxxxxx98"
                  className="form-control shadow-none"
                />
              </div>
            </div>

            <div className="d-lg-flex justify-content-between ">
              <div className="mb-2 mt-5 col-xxl-5 ">
                <label className="form-label">Father&#39;s Occupation</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="e.g. job , business"
                  className="form-control shadow-none"
                />
              </div>

              <div className="mb-2 mt-5 col-xxl-5 ">
                <label className="form-label">Father&#39;s Annual Income</label>
                <select
                  name="bodyType"
                  className="form-control shadow-none"
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option value={formData.bodyType}>0 to 1 lakh</option>
                  <option value={formData.bodyType}>2 lakh to 3 lakh</option>
                  <option value={formData.bodyType}>4 lakh to 5 lakh</option>
                  <option value={formData.bodyType}>6 lakh to 7 lakh</option>
                  <option value={formData.bodyType}>8 lakh to 9 lakh</option>
                  <option value={formData.bodyType}>10+ lakh</option>
                </select>
              </div>
            </div>

            <div className="d-lg-flex justify-content-between ">
              <div className="mb-2 mt-5 col-xxl-5 ">
                <label className="form-label">Candiate Mother Name</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="e.g. Raj Gupta"
                  className="form-control shadow-none"
                />
              </div>

              <div className="mb-2 mt-5 col-xxl-5 ">
                <label className="form-label">Mother&#39;s Occupation</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="e.g. job , business"
                  className="form-control shadow-none"
                />
              </div>
            </div>

            <div className="d-lg-flex justify-content-between mb-4">
              <div className="mb-2 mt-5 col-xxl-5 ">
                <label className="form-label">Address</label>
                <textarea
                  name="address"
                  className="form-control shadow-none"
                  cols="130"
                  rows="2"
                  value={formData.address}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="mb-2 mt-5 col-xxl-5">
                <label className="form-label">Pincode</label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 474001"
                  className="form-control shadow-none"
                />
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
          <div  >
            <h2 className="mt-5 mb-5">Candiate Photo</h2>
            <input
              type="file"
              name="image"
              // value={formData.phone}
              // onChange={handleChange}
              placeholder="image"
            />

            <div className="payment mt-5 mb-5">
              Click to payment
              <button>Click To Pay</button>
            </div>

            <button type="button" onClick={handlePrevious}>
              Previous
            </button>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default MainRegister;
