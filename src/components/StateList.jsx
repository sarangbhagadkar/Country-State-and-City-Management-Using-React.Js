import React from "react";
import CityList from "./CityList";

const StateList = ({ countryIndex, countries, setCountries }) => {
  const addState = () => {
    const stateName = prompt("Enter state name:");
    if (stateName) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states.push({ name: stateName, cities: [] });
      setCountries(updatedCountries);
    }
  };

  const deleteState = (stateIndex) => {
    if (window.confirm("Are you sure you want to delete this state?")) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states.splice(stateIndex, 1);
      setCountries(updatedCountries);
    }
  };

  return (
    <div className="list-container">
      <h4>States in {countries[countryIndex].name}</h4>
      <button onClick={addState}>Add State</button>
      {countries[countryIndex].states.map((state, stateIndex) => (
        <div key={stateIndex} className="card">
          <p>{state.name}</p>
          <button onClick={() => deleteState(stateIndex)}>Delete</button>
          <CityList countryIndex={countryIndex} stateIndex={stateIndex} countries={countries} setCountries={setCountries} />
        </div>
      ))}
    </div>
  );
};

export default StateList;
