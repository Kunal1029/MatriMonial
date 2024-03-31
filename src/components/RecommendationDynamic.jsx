/* eslint-disable no-unused-vars */
// import  { useState } from "react";
// import { Link } from "react-router-dom";

// export default function RecommendationDynamic() {
//   const [cards, setCards] = useState([
//     { id: 1, name: "Rahul Gupta", age: 58, isWish: false, image: "rahul" },
//     { id: 2, name: "Salman Gangil", age: 55, isWish: false, image: "salman" },
//     { id: 3, name: "Popat Bandil", age: 49, isWish: false, image: "popat" },
//   ]);

//   const [isCtn, setIsCtn] = useState(true);

//   const handleClick = () => {
//     setIsCtn((prevState) => !prevState);
//   };

//   //getting data from apis

//   // React.useEffect(() => {
//   //   // Fetch data from the server
//   //   fetch("your_api_endpoint")
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       // Update the state with the fetched data
//   //       setCards(data);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error fetching data:", error);
//   //     });
//   // }, []);

//   const toggleWish = (id) => {
//     setCards((prevCards) =>
//       prevCards.map((card) =>
//         card.id === id ? { ...card, isWish: !card.isWish } : card
//       )
//     );
//   };

//   return (
//     <div className="mycontainer recom">
//       <h3 className="mb-5">Recommendations..</h3>
//       <div className="recomCard">
//         {cards.map((card) => (
//           <div key={card.id} className="card col-md-4 col-12 ShowfullCard">
//             <div className="text-center">
//               {/* <img src={`image/${card.name.toLowerCase()}.jpg`} className="card-img-top" alt="..." /> */}
//               <img
//                 src={`image/${card.image}.jpg`}
//                 className="card-img-top"
//                 alt="..."
//               />
//             </div>
//             <div className="card-body">
//               <p className="card-text">
//                 <b>Name</b> : {card.name}
//                 <br />
//                 <b>Age</b> : {card.age}
//               </p>
//               <a onClick={() => toggleWish(card.id)}>
//                 {card.isWish ? (
//                   <i className="fa-solid fa-heart text-danger fa-xl"></i>
//                 ) : (
//                   <i className="fa-regular fa-heart text-danger fa-xl bg-transparent"></i>
//                 )}
//               </a>
//             </div>

//             <div className="card-btn text-center mb-3">
//               <Link
//                 to="/singleprofile"
//                 onClick={handleClick}
//                 id="myctn"
//                 className={`${isCtn ? "myctn" : "mybtn"}`}
//               >
//                 More details..
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { getUserDetails } from "./userUtils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RecommendationDynamic() {
  // const userDetails = getUserDetails();
  // const user_id=userDetails.user_id;

  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // console.log("test check aaa",queryParams.size)

  const [cards, setCards] = useState([
    { id: 1, name: "Rahul Gupta", age: 58, isWish: false, image: "rahul" },
    { id: 2, name: "Salman Gangil", age: 55, isWish: false, image: "salman" },
    { id: 3, name: "Popat Bandil", age: 49, isWish: false, image: "popat" },
  ]);

  const [errors, setErrors] = useState("");

  const [isCtn, setIsCtn] = useState(true);

  const handleClick = () => {
    setIsCtn((prevState) => !prevState);
  };

  //getting data from apis

  // React.useEffect(() => {

  //   const fetchData=()=>{
  //     axios
  //       .get("http://localhost:3010/users/getrecomdprofile")
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
  // }, []);

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: screenWidth,
    slidesToScroll: 1,
  };

  const toggleWish = (pid) => {
    // setCards((prevCards) =>
    //   prevCards.map((card) =>
    //     card.id === id ? { ...card, isWish: !card.isWish } : card
    //   )
    // );
    // const ids = [pid,user_id];
    // console.log("check id",ids)
    //   axios
    //       .post(" http://localhost:3010/users/saveprofile",ids)
    //       .then((response) => {
    //         if (response.data.success) {
    //          console.log(response)
    //         } else {
    //           setErrors("Invalid email or password."); // Display error message
    //         }
    //       })
    //       .catch(() => {
    //         setErrors("An error occurred. Please try again."); // Display error message
    //       });
  };

  return (
    <div className="mycontainer recom">
      <h3 className="mb-5">Recommendations..</h3>

      <Slider
        {...settings}
        className={`${screenWidth === 1 ? "w-75 ms-5" : ""}`}
      >
        {cards.map((card) => (
          <div key={card.id} className="recomCard">
            <div className="card col-12 ShowfullCard  border border-2">
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
                    <i className="fa-solid fa-heart text-white fa-xl"></i>
                  ) : (
                    <i className="fa-regular fa-heart text-white fa-xl bg-transparent"></i>
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
      </Slider>
    </div>
  );
}
