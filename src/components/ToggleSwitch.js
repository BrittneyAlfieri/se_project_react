import React from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { useState, useEffect, useContext } from "react";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  const [isChecked, setIsChecked] = useState(currentTemperatureUnit === "C");
  useEffect(
    () => setIsChecked(currentTemperatureUnit === "C"),
    [currentTemperatureUnit]
  );

  return (
    <div>
      <label className="switch-label">
        <p className={`switch-letter-F ${isChecked ? "active" : ""}`}>F</p>
        <p className={`switch-letter-C ${isChecked ? "" : "active"}`}>C</p>
        <input
          type="checkbox"
          id="react-switch-new"
          className="switch-checkbox"
          value={currentTemperatureUnit}
          onChange={handleToggleSwitchChange}
          checked={isChecked}
        ></input>
        <span className="switch-slider" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
