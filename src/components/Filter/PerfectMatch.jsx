/* eslint-disable no-unused-vars */
import React from 'react'
import Jhoda from './Jhoda'
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';

import SearchPartner from "./SearchPartner"

function PerfectMatch() {
  const [isCtn, setIsCtn] = useState(true);

  const handleClick = () => {
    setIsCtn((prevState) => !prevState);
  };
  
  const [cards, setCards] = useState([
    { id: null, name: "", age: null, isWish: false, income: null , image:"/image/salman.jpg" },
  ]);

 

  //getting data from apis

  React.useEffect(() => {
    // Fetch data from the server
    const allData = Jhoda
    console.log(allData)
    const newData = allData.map((prev)=>({
      id: prev.id,
      name: prev.name,
      age : prev.age,
      income : prev.income
    }))
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
      <h3 className="mb-5">Your Perfect Matches</h3>
      <div className="recomCard">
        {cards.map((card) => (
          <div key={card.id} className="card col-md-4 col-12 ShowfullCard">
            <div className="text-center">
              {/* <img src={`image/${card.name.toLowerCase()}.jpg`} className="card-img-top" alt="..." /> */}
              <img
                src={`${card.image}`}
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

            {/* <div className="card-btn text-center mb-3">
              <Register text="More details.." />
            </div> */}

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
    </div>
  );
}

export default PerfectMatch



