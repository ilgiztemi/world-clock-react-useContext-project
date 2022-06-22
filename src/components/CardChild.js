import React from "react";
import { Button } from "reactstrap";
import { useClock } from "../context/ClockContex";
import { useEffect, useState } from "react";
import moment from "moment-timezone";

const CardChild = ({ tz }) => {
  const { tZList, setTZList } = useClock();
  const newTime = moment.tz(tz.name).format("hh:mm:ss");
  const [time, setTime] = useState(newTime);
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(moment.tz(tz.name).format("hh:mm:ss"));
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [time]);

  const handleDelete = (tzId) => {
    setTZList(tZList.filter((tz) => tz.id !== tzId));
  };

  return (
    <div className=" col col-lg-3 col-md-4 col-12 card m-2 p-2">
      <h4>{tz.name}</h4>
      <h5>{time}</h5>
      <Button onClick={() => handleDelete(tz.id)} className="btn btn-danger">
        X
      </Button>
    </div>
  );
};

export default CardChild;
