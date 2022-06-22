import { createContext, useContext, useState } from "react";
import moment from "moment-timezone";
import { nanoid } from "nanoid";

const ClockContext = createContext();
export const ClockProvider = ({ children }) => {
  const [timeZones, setTimeZones] = useState(moment.tz.names());
  const [tZList, setTZList] = useState([]);
  const [currentTime, setCurrenTime] = useState(0);
  const [newName, setNewName] = useState("");

  const handleAdd = () => {
    if (newName !== "") {
      setTZList([
        ...tZList,
        {
          id: nanoid(),
          name: newName,
          time: moment.tz(newName).format("hh:mm:ss"),
        },
      ]);
      setNewName("");
    }
  };
  console.log(tZList);

  return (
    <ClockContext.Provider
      value={{
        currentTime,
        setCurrenTime,
        timeZones,
        setTimeZones,
        tZList,
        setTZList,
        handleAdd,
        newName,
        setNewName,
      }}
    >
      {children}
    </ClockContext.Provider>
  );
};
export const useClock = () => useContext(ClockContext);
