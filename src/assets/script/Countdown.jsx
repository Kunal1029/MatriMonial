import { useState, useEffect } from "react";

const Countdown = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {count > 0 ? (
        <div id="countdown">{count}</div>
      ) : (
        <div>Countdown Complete!</div>
      )}
    </div>
  );
};
export default Countdown;
