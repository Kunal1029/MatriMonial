/* eslint-disable react/prop-types */
import { useState } from "react";
import "../App.css";


function MyButton({ text }) {
  const [isCtn, setIsCtn] = useState(true);

  const handleClick = () => {
    setIsCtn((prevState) => !prevState);
  };

  return (
    <>
      <a
        onClick={handleClick}
        id="myctn"
        className={`${isCtn ? "myctn" : "mybtn"}`}
      >
        {text}
      </a>

      
       
      
    </>
  );
}

export default MyButton;
