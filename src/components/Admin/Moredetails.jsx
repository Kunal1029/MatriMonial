import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";

function Moredetails() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const receivedData = searchParams.get("data");
  const [cards, setCards] = useState([]);
  const [errors, setErrors] = useState("");
  function approveprodetails(e) {
    axios
      .post(` http://localhost:3010/users/approvedprobyadmin/${e}`)
      .then((response) => {
        if (response.data.success) {
          window.location.href = `/adminDashboard`;
        } else {
          setErrors("Invalid email or password."); // Display error message
        }
      })
      .catch(() => {
        setErrors("An error occurred. Please try again."); // Display error message
      });
  }

  function deleteprodetails(e) {
    axios
      .post(` http://localhost:3010/users/deleteprobyadmin/${e}`)
      .then((response) => {
        if (response.data.success) {
          window.location.href = `/adminDashboard`;
        } else {
          setErrors("Invalid email or password."); // Display error message
        }
      })
      .catch(() => {
        setErrors("An error occurred. Please try again."); // Display error message
      });
  }

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`http://localhost:3010/users/getprofilebyid/${receivedData}`)
        .then((response) => {
          if (response.data.success) {
            setCards(response.data.data);
          } else {
            setErrors("Invalid email or password."); // Display error message
          }
        })
        .catch(() => {
          setErrors("An error occurred. Please try again."); // Display error message
        });
    };
    fetchData();
  }, [receivedData]); // Add receivedData to dependency array

  return (
    <>
      <AdminHeader />
      <div className="mycontainer">
        {cards.length > 0 && (
          <div className="mt-5 d-flex singlepro flex-column justify-content-center">
            <h2 className="text-center">
              Please Check All Details are Corrected.
            </h2>
            <div className="mb-5 ">
              <div className="lastimg text-center mb-5">
                <img
                  className=""
                  src={`/images/${cards[0].image}`}
                  alt={cards[0].Name}
                />
              </div>
              <div className="basic-detail-box">
                <h3>Candidate basic details</h3>
                <ul>
                  <li>Name: {cards[0].Name}</li>
                  <li>DOB: {cards[0].DOB}</li>
                  <li>Gender: {cards[0].gender}</li>
                  <li>Address: {cards[0].Current_address}</li>
                  <li>Phone: {cards[0].Phone_Number}</li>
                  <li>Email: {cards[0].Email}</li>
                  <li>AGE: {cards[0].age}</li>
                </ul>
              </div>
            </div>
            <div className="d-flex-lg mt-5 mb-5 align-item-center gap-3 justify-content-between">
              <div className="personal-detail-box  mb-5">
                <h3>Candidate personal details</h3>
                <ul>
                  <li>Birth Time: {cards[0].Birth_time}</li>
                  <li>Gotra: {cards[0].Gotar}</li>
                  <li>Birth Place: {cards[0].Birth_Place}</li>
                  <li>Height: {cards[0].Height}</li>
                  <li>Body Type: {cards[0].Body_type}</li>
                  <li>Complexion: {cards[0].complexion}</li>
                  <li>Qualification: {cards[0].Education}</li>
                  <li>Degree: {cards[0].Degree_type}</li>
                  <li>Occupation: {cards[0].Occupation_type}</li>
                  <li>Designation: {cards[0].Designation}</li>
                  <li>Candidate Income: {cards[0].Income}</li>
                  <li>Work Place: {cards[0].Occupation_address}</li>
                </ul>
              </div>
              <div className="family-detail-box">
                <h3>Candidate Family details</h3>
                <ul>
                  <li>Father Name: {cards[0].Father_name}</li>
                  <li>Father Mob: {cards[0].Father_phone}</li>
                  <li>Father Occupation: {cards[0].Father_occupation}</li>
                  <li>Father Income: {cards[0].Father_income}</li>
                  <li>Mother Name: {cards[0].Mother_name}</li>
                  <li>Mother Occupation: {cards[0].mother_occupation}</li>
                  <li>Family Address: {cards[0].Family_address}</li>
                  <li>Goverment ID: {cards[0].govt_id}</li>
                </ul>
              </div>
            </div>
            <button onClick={() => approveprodetails(cards[0].Pro_id)}>
              Approved
            </button>
            <br></br>
            <br></br>
            <button onClick={() => deleteprodetails(cards[0].Pro_id)}>
              Delete
            </button>
          </div>
        )}
        {errors && <div className="text-center text-danger mt-3">{errors}</div>}
      </div>
    </>
  );
}

export default Moredetails;
