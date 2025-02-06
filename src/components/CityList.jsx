import React from "react";

const CityList = ({ countryIndex, stateIndex, countries, setCountries }) => {
  const addCity = () => {
    const cityName = prompt("Enter city name:");
    if (cityName) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].cities.push(cityName);
      setCountries(updatedCountries);
    }
  };

  const deleteCity = (cityIndex) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].cities.splice(cityIndex, 1);
      setCountries(updatedCountries);
    }
  };

  return (
    <div className="list-container">
      <h5>Cities in {countries[countryIndex].states[stateIndex].name}</h5>
      <button onClick={addCity}>Add City</button>
      {countries[countryIndex].states[stateIndex].cities.map((city, cityIndex) => (
        <div key={cityIndex} className="card">
          <p>{city}</p>
          <button onClick={() => deleteCity(cityIndex)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CityList;
