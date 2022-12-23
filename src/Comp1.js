import "./styles.css";
import React, { useContext } from "react";
import { DataLoaderContext } from "./DataLoader";
import ReactSpeedometer from "react-d3-speedometer";

export default function Comp1() {
  const data = useContext(DataLoaderContext);
  return (
    <div className="Merila">
      <ReactSpeedometer
        currentValueText="Brzina vazduha"
        value={data.v}
        minValue={0}
        maxValue={200}
        needleHeightRatio={0.7}
        needleTransitionDuration={3500}
        maxSegmentLabels={10}
        segments={1000}
        needleTransition="easeElastic"
      />
      <ReactSpeedometer
        currentValueText="Temperatura"
        value={data.t}
        minValue={-20}
        maxValue={60}
        needleHeightRatio={0.7}
        needleTransitionDuration={3500}
        maxSegmentLabels={10}
        segments={1000}
        needleTransition="easeElastic"
      />
      <ReactSpeedometer
        currentValueText="pritisak vazduha"
        value={data.p}
        minValue={900}
        maxValue={1100}
        needleHeightRatio={0.7}
        needleTransitionDuration={3500}
        maxSegmentLabels={5}
        segments={1000}
        needleTransition="easeElastic"
      />
    </div>
  );
}
