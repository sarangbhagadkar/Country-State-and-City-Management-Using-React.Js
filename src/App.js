import React, { useState } from "react";
import CountryList from "./components/CountryList";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);

  const addCountry = () => {
    const countryName = prompt("Enter country name:");
    if (countryName) {
      setCountries([...countries, { name: countryName, states: [] }]);
    }
  };

  const editCountry = (index) => {
    const newName = prompt("Enter new country name:");
    if (newName) {
      const updatedCountries = [...countries];
      updatedCountries[index].name = newName;
      setCountries(updatedCountries);
    }
  };

  const deleteCountry = (index) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      const updatedCountries = [...countries];
      updatedCountries.splice(index, 1);
      setCountries(updatedCountries);
    }
  };

  return (
     <Router basename="CountryStateCity-Management-Using-React.Js">
        <div className="container app-container">
          <h1>Country, State, and City Management</h1>
          <button onClick={addCountry}>Add Country</button>
          <CountryList countries={countries} editCountry={editCountry} deleteCountry={deleteCountry} setCountries={setCountries} />
        </div>
      </Router>
    
  );
};

export default App;
