import "./styles.css";
import Comp1 from "./Comp1";
import { DataLoader } from "./DataLoader";

export default function App() {
  return (
    <DataLoader>
      <div className="App">
        <h1>Aero Tunel</h1>
        <Comp1 />
      </div>
    </DataLoader>
  );
}
