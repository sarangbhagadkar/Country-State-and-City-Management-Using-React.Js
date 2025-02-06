import React from "react";
import StateList from "./StateList";

const CountryList = ({ countries, editCountry, deleteCountry, setCountries }) => {
  return (
    <div className="list-container">
      <h2>Countries</h2>
      {countries.length === 0 && <p>No countries added yet.</p>}
      {countries.map((country, index) => (
        <div key={index} className="card">
          <h3>{country.name}</h3>
          <button onClick={() => editCountry(index)}>Edit</button>
          <button onClick={() => deleteCountry(index)}>Delete</button>
          <StateList countryIndex={index} countries={countries} setCountries={setCountries} />
        </div>
      ))}
    </div>
  );
};

export default CountryList;
