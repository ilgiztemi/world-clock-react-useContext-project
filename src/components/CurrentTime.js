import { useEffect } from "react";
import { useClock } from "../context/ClockContex";
const CurrentTime = () => {
  const { currentTime } = useClock();

  return (
    <>
      <h2>{currentTime}</h2>
    </>
  );
};

export default CurrentTime;
