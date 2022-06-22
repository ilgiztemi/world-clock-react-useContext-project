import { useClock } from "../context/ClockContex";
import CardChild from "./CardChild";

const ClocksCard = () => {
  const { tZList } = useClock();

  return (
    <div className="container">
      <div className="row">
        {tZList.map((tz) => (
          <CardChild tz={tz} key={tz.id} />
        ))}
      </div>
    </div>
  );
};

export default ClocksCard;
