import "./App.css";
import { ClockProvider } from "./context/ClockContex";
import CurrentTime from "./components/CurrentTime";
import SelectTime from "./components/SelectTime";
import ClocksCard from "./components/ClocksCard";

export default function App() {
  return (
    <div className="App">
      <ClockProvider>
        <h1>World Clock</h1>
        <CurrentTime />
        <SelectTime />
        <ClocksCard />
      </ClockProvider>
    </div>
  );
}