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
      <label className="react-switch-label">
        <input
          type="checkbox"
          id="react-switch-new"
          className="react-switch-checkbox"
          value={currentTemperatureUnit}
          onChange={handleToggleSwitchChange}
          checked={isChecked}
        ></input>
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
};

export default ToggleSwitch;
