/* eslint-disable react/prop-types */
import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function MyButton({ text }) {
  const [isCtn, setIsCtn] = useState(true);

  const handleClick = () => {
    setIsCtn((prevState) => !prevState);
  };

  return (
    <>
      <Link to="/register" 
        onClick={handleClick}
        id="myctn"
        className={`${isCtn ? "myctn" : "mybtn"}`}
      >
        {text}
      </Link>

      
       
      
    </>
  );
}

export default MyButton;
