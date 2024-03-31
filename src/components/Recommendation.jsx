import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Recommendation() {
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

  const [cards, setCards] = useState([
    { id: 1, name: "Rahul Gupta", age: 58, isWish: false, image: "rahul" },
    { id: 2, name: "Salman Gangil", age: 55, isWish: false, image: "salman" },
    { id: 3, name: "Popat Bandil", age: 49, isWish: false, image: "popat" },
    { id: 4, name: "Rahul Gupta", age: 58, isWish: false, image: "rahul" },
    { id: 5, name: "Salman Gangil", age: 55, isWish: false, image: "salman" },
    { id: 6, name: "Popat Bandil", age: 49, isWish: false, image: "popat" },
  ]);

  // useEffect(() => {
  //   // Fetch data from the server
  //   fetch("your_api_endpoint")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Update the state with the fetched data
  //       setCards(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

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

      <Slider
        {...settings}
        className={`${screenWidth === 1 ? "w-75 ms-5" : ""}`}
      >
        {cards.map((card) => (
          <div key={card.id} className="recomCard  ">
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
                  <b>Name</b> : {card.name}
                  <br />
                  <b>Age</b> : {card.age}
                </p>
                <a onClick={() => toggleWish(card.id)}>
                  {card.isWish ? (
                    <i className="fa-solid fa-heart text-white"></i>
                  ) : (
                    <i className="fa-regular fa-heart  text-white"></i>
                  )}
                </a>
              </div>

              <div className="card-btn text-center mb-3">
                <Link
                  to="/register"
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

export default Recommendation;
