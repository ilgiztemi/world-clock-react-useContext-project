import { useClock } from "../context/ClockContex";
import SingleSelected from "../components/SingleSelected";
import { Button } from "reactstrap";

const SelectTime = () => {
  const { timeZones, handleAdd, setNewName } = useClock();

  return (
    <>
      <select className="select" onChange={(e) => setNewName(e.target.value)} name="" id="">
        <option value="">--Select timezone--</option>
        {timeZones.map((tz) => (
          <SingleSelected key={tz.id} tz={tz} />
        ))}
      </select>
      <Button onClick={() => handleAdd()}>Add a clock</Button>
    </>
  );
};

export default SelectTime;
