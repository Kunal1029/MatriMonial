/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import RecommendationDynamic from "./RecommendationDynamic";
import { useState } from "react";
import ShaadhiFilter from "./ShaadhiFilter";
import SearchPartner from "./SearchPartner";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Header2 } from "./Header";
import { useEffect } from "react";

// import { getUserDetails } from './userUtils';

function RecommandationAll() {
  // const userDetails = getUserDetails();
  // const user_id=userDetails.user_id;
  // console.log("test user id",user_id)

  const [error, setErrors] = useState("");

  const [screenWidth, setscreenWidth] = useState(
    window.innerWidth <= 770 ? 1 : 3
  );
  useEffect(() => {
    const handleResize = () => {
      setscreenWidth(window.innerWidth <= 767 ? 1 : 3);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // console.log("test check aaa", queryParams.size);

  // Access the formData from URL parameters
  const formData = {
    gender: queryParams.get("gender") || "",
    minAge: queryParams.get("minAge") || "23",
    maxAge: queryParams.get("maxAge") || "30",
    gotra: queryParams.get("gotra") || "",
  };
  console.log("testtt", formData);
  const [cards, setCards] = useState([
    { id: 1, name: "kunal Gupta", age: 58, isWish: false, image: "rahul" },
    { id: 2, name: "Salman Gangil", age: 55, isWish: false, image: "salman" },
    { id: 3, name: "Popat Bandil", age: 49, isWish: false, image: "popat" },
    { id: 11, name: "kunal Gupta", age: 58, isWish: false, image: "rahul" },
    { id: 12, name: "Salman Gangil", age: 55, isWish: false, image: "salman" },
    { id: 13, name: "Popat Bandil", age: 49, isWish: false, image: "popat" },
    { id: 21, name: "kunal Gupta", age: 58, isWish: false, image: "rahul" },
    { id: 22, name: "Salman Gangil", age: 55, isWish: false, image: "salman" },
    { id: 32, name: "Popat Bandil", age: 49, isWish: false, image: "popat" },
    { id: 14, name: "kunal Gupta", age: 58, isWish: false, image: "rahul" },
    { id: 18, name: "Salman Gangil", age: 55, isWish: false, image: "salman" },
    { id: 19, name: "Popat Bandil", age: 49, isWish: false, image: "popat" },
  ]);

  const [isCtn, setIsCtn] = useState(true);

  const handleClick = () => {
    setIsCtn((prevState) => !prevState);
  };

  //getting data from apis

  // React.useEffect(() => {
  //   // Fetch data from the server
  //  if(queryParams.size>0){
  //   const fetchData=()=>{
  //     axios
  //       .post(" http://localhost:3010/users/getsearchprofiledata",formData)
  //       .then((response) => {
  //         if (response.data.success) {
  //           setCards(response.data.data);

  //         } else {
  //           setErrors("Invalid email or password."); // Display error message
  //         }
  //       })
  //       .catch(() => {
  //         setErrors("An error occurred. Please try again."); // Display error message
  //       });
  //   }
  //     fetchData();
  //  }else{
  //   const fetchData=()=>{
  //     axios
  //       .get(" http://localhost:3010/users/getallrecomdprofile")
  //       .then((response) => {
  //         if (response.data.success) {
  //           setCards(response.data.data);

  //         } else {
  //           setErrors("Invalid email or password."); // Display error message
  //         }
  //       })
  //       .catch(() => {
  //         setErrors("An error occurred. Please try again."); // Display error message
  //       });
  //   }
  //     fetchData();
  // }
  // }, []);

  const toggleWish = (pid) => {
    // const ids = [pid,user_id];
    // console.log("check id",ids)
    // axios
    //     .post(" http://localhost:3010/users/saveprofile",ids)
    //     .then((response) => {
    //       if (response.data.success) {
    //        console.log(response)
    //       } else {
    //         setErrors("Invalid email or password."); // Display error message
    //       }
    //     })
    //     .catch(() => {
    //       setErrors("An error occurred. Please try again."); // Display error message
    //     });
  };

  return (
    <>
      <Header2 showAnimation2={false} mybgclass2="#b03060" />

      <div className="recomSearch mycontainer">
        <div className="innerpart">
          <SearchPartner />
        </div>
      </div>

      <div className="mycontainer recom h2r">
        <h3 className="mb-2">All Recommendations</h3>

        <div className="col-12 rcom2 row">
          {error}

          {cards.map((card) => (
            <div
              className="recomCard mb-5  col-lg-4 col-md-6 col-sm-8 kps "
              key={card.id}
            >
              <div className="card ShowfullCard border w-100">
                <div className="text-center">
                  <img
                    src={`image/${card.image}.jpg`}
                    className="card-img-top"
                    alt="..."
                  />
                </div>

                <div className="card-body d-flex align-items-center justify-content-between">
                  <p className="card-text">
                    <b>Name</b> : {card.Name}
                    <br />
                    <b>DOB</b> : {card.DOB}
                  </p>
                  <a onClick={() => toggleWish(card.Pro_id)}>
                    {card.isWish ? (
                      <i className="fa-solid fa-heart text-danger fa-xl"></i>
                    ) : (
                      <i className="fa-regular fa-heart text-danger fa-xl bg-transparent"></i>
                    )}
                  </a>
                </div>

                <div className="card-btn text-center mb-3">
                  <Link
                    to={`/singleprofile?data=${card.Pro_id}`}
                    className="btn btn-light"
                    style={{ color: "#B03060" }}
                  >
                    More details..
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RecommandationAll;
