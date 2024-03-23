import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Recommendation() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [cards, setCards] = useState([
    { id: 1, name: "Rahul Gupta", age: 58, isWish: false, image: "rahul" },
    { id: 2, name: "Salman Gangil", age: 55, isWish: false, image: "salman" },
    { id: 3, name: "Popat Bandil", age: 49, isWish: false, image: "popat" },
    { id: 4, name: "Rahul Gupta", age: 58, isWish: false, image: "rahul" },
    { id: 5, name: "Salman Gangil", age: 55, isWish: false, image: "salman" },
    { id: 6, name: "Popat Bandil", age: 49, isWish: false, image: "popat" },
  ]);

  const [isCtn, setIsCtn] = useState(true);

  const handleClick = () => {
    setIsCtn((prevState) => !prevState);
  };

  //getting data from apis

  React.useEffect(() => {
    // Fetch data from the server
    fetch("your_api_endpoint")
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched data
        setCards(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const toggleWish = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isWish: !card.isWish } : card
      )
    );
  };

  return (
    <div className="mycontainer recom">
      <h3 className="mb-5">Recommendations..</h3>
      
      <Slider {...settings}>
        <div className="recomCard">
          {cards.map((card) => (
            <div key={card.id} className="card col-md-4 col-12 ShowfullCard">
              <div className="text-center">
                <img
                  src={`image/${card.image}.jpg`}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <p className="card-text">
                  <b>Name</b> : {card.name}
                  <br />
                  <b>Age</b> : {card.age}
                </p>
                <button onClick={() => toggleWish(card.id)}>
                  {card.isWish ? (
                    <i className="fa-solid fa-heart"></i>
                  ) : (
                    <i className="fa-regular fa-heart"></i>
                  )}
                </button>
              </div>

            

              <div className="card-btn text-center mb-3">
                <Link
                  to="/register"
                  onClick={handleClick}
                  id="myctn"
                  className={`${isCtn ? "myctn" : "mybtn"}`}
                >
                  More details..
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Slider>
    </div>
  );
}

export default Recommendation;
