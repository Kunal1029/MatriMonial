/* eslint-disable no-unused-vars */
// import { useLocation } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function IndividualProfile() {

//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const receivedData = searchParams.get('data');
//   console.log("testtt",receivedData)
//   const [cards, setCards] = useState([]);

//   // React.useEffect(() => {

//   //   const fetchData=()=>{
//   //     console.log()
//   //     axios
//   //       .get(`http://localhost:3010/users/getprofilebyid/${receivedData}`)
//   //       .then((response) => {
//   //         if (response.data.success) {
//   //           console.log("testt data",response.data.data[0])
//   //           setCards(response.data.data);

//   //         } else {
//   //           setErrors("Invalid email or password."); // Display error message
//   //         }
//   //       })
//   //       .catch(() => {
//   //         setErrors("An error occurred. Please try again."); // Display error message
//   //       });
//   //   }
//   //     fetchData();
//   // }, []);

//   React.useEffect(() => {
//     console.log("hello")
//     const fetchData = () => {
//       axios
//         .get(`http://localhost:3010/users/getprofilebyid/${receivedData}`)
//         .then((response) => {
//           if (response.data.success) {
//             console.log("testt data", response.data.data[0])
//             setCards(response.data.data);
//           } else {
//             setErrors("Invalid email or password."); // Display error message
//           }
//         })
//         .catch(() => {
//           setErrors("An error occurred. Please try again."); // Display error message
//         });
//     }
//     fetchData();
//   }, [receivedData]);

//   console.log("check data",cards)
//   return (
//     // <div>
//     //   HI Our Good Profile
//     // </div>

//     <div className="summary mt-5">

//             <h2 className="text-center mt-5 mb-5 ">Please Check All Deatails are Corrected.</h2>

//               <div className="mb-5 d-flex align-item-center gap-3 justify-content-center">
//                 <div className="">
//                   <img className="w-50" src="./image/salman.jpg" />
//                   {/* image logic */}
//                 </div>

//                 <div className="basic-detail-box">
//                   <h3>Candidate basic details</h3>
//                   <ul>
//                     <li>Name: {cards[0].Name} </li>
//                     <li>DOB: {cards[0].DOB}  </li>
//                     <li>Gender: {cards[0].gender} </li>
//                     <li>Address: {cards[0].Current_address} </li>
//                     <li>Phone: {cards[0].Phone_Number} </li>
//                     <li>Email: {cards[0].Email} </li>
//                     <li>AGE:{cards[0].age}</li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="d-flex mt-5 mb-5 align-item-center gap-3 justify-content-between">
//                 <div className="personal-detail-box">
//                   <h3>candidate personal details</h3>
//                   <ul>
//                     <li>Birth Time: {cards[0].Birth_time} </li>
//                     <li>Gotra:  {cards[0].Gotar} </li>
//                     <li>Birth Place:  {cards[0].Birth_Place} </li>
//                     <li>Height:  {cards[0].Height} </li>
//                     <li>Body Type:  {cards[0].Body_type} </li>
//                     <li>Complexion:  {cards[0].complexion} </li>
//                     <li>Qualification:  {cards[0].Education} </li>
//                     <li>Degree:  {cards[0].Degree_type} </li>
//                     <li>Occupation:  {cards[0].Occupation_type} </li>
//                     <li>Designation:  {cards[0].Designation} </li>
//                     <li>Candidate Income : {cards[0].Income}</li>
//                     <li>Work Place:  {cards[0].Occupation_address} </li>
//                   </ul>
//                 </div>

//                 <div className="family-detail-box ">
//                   <h3>candidate Family details</h3>
//                   <ul className="ms-5">
//                     <li>Father Name : {cards[0].Father_name} </li>
//                     <li>Father Mob : {cards[0].Father_phone}</li>
//                     <li>Father Occupation : {cards[0].Father_occupation}</li>
//                     <li>Father Income : {cards[0].Father_income}</li>
//                     <li>Mother Name : {cards[0].Mother_name}</li>
//                     <li>Mother Occupation : {cards[0].mother_occupation}</li>
//                     <li>Family Address : {cards[0].Family_address}</li>
//                     <li>image : {cards[0].image}</li>
//                     <li>Goverment ID: {cards[0].govt_id}</li>
//                   </ul>
//                 </div>

//               </div>

// </div>

//   )
// }

// export default IndividualProfile

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Header2 } from "../Header";

function IndividualProfile() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const receivedData = searchParams.get("data");
  const [cards, setCards] = useState([]);
  const [errors, setErrors] = useState("");

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
      <Header2 showAnimation2={false} mybgclass2="#b03060" />
      <div className="mycontainer">
        {errors}
        <div className=" mt-5 d-flex singlepro flex-column justify-content-center">
          <h2 className="text-center ">
            Please Check All Deatails are Corrected.
          </h2>

          <div className="mb-5 ">
            <div className="lastimg text-center mb-5">
              <img className="" src="./image/salman.jpg" />
            </div>

            <div className="basic-detail-box ">
              <h3>Candidate basic details</h3>
              <ul>
                <li>Name: </li>
                <li>DOB: </li>
                <li>Gender: </li>
                <li>Address: </li>
                <li>Phone: </li>
                <li>Email: </li>
              </ul>
            </div>
          </div>

          <div className="d-flex-lg mt-5 mb-5 align-item-center gap-3 justify-content-between">
            <div className="personal-detail-box mb-5">
              <h3>candidate personal details</h3>
              <ul>
                <li>Birth Time:ks</li>
                <li>Gotra:ks</li>
                <li>Birth Place:ks</li>
                <li>Height:ks</li>
                <li>Body Type:ks </li>
                <li>Complexion:ks </li>
                <li>Qualification:ks </li>
                <li>Degree:ks</li>
                <li>Occupation:ks </li>
                <li>Designation:ks </li>
                <li>Candidate Income :ks</li>
                <li>Work Place:ks</li>
              </ul>
            </div>

            <div className="family-detail-box ">
              <h3>candidate Family details</h3>
              <ul className="">
                <li>Father Name :rs</li>
                <li>Father Mob :rs</li>
                <li>Father Occupation :rs</li>
                <li>Father Income :rs</li>
                <li>Mother Name :rs</li>
                <li>Mother Occupation :rs</li>
                <li>Family Address :rs</li>
                <li>image :rs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndividualProfile;
