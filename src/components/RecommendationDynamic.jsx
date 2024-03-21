import React, { useState } from "react";  
import { Link } from "react-router-dom";

export default function RecommendationDynamic() {
  const [cards, setCards] = useState([
    { id: 1, name: "Rahul Gupta", age: 58, isWish: false, image: "rahul" },
    { id: 2, name: "Salman Gangil", age: 55, isWish: false, image: "salman" },
    { id: 3, name: "Popat Bandil", age: 49, isWish: false, image: "popat" },
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
      <div className="recomCard">
        {cards.map((card) => (
          <div key={card.id} className="card col-md-4 col-12 ShowfullCard">
            <div className="text-center">
              {/* <img src={`image/${card.name.toLowerCase()}.jpg`} className="card-img-top" alt="..." /> */}
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
              <a onClick={() => toggleWish(card.id)}>
                {card.isWish ? (
                  <i className="fa-solid fa-heart text-danger fa-xl"></i>
                ) : (
                  <i className="fa-regular fa-heart text-danger fa-xl bg-transparent"></i>
                )}
              </a>
            </div>

            

            <div className="card-btn text-center mb-3">
              <Link
                to="/singleprofile"
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
    </div>
  );
}


