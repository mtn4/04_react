import React, { useState, useEffect } from "react";
import axios from "axios";
const PROXY = "https://nameless-citadel-58066.herokuapp.com/";
const LINK = "https://restcountries.com/v2/all";
export default function Exercise29() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [term, setTerm] = useState("");
  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [countries, term]);

  useEffect(() => {
    (async () => {
      const data = await axios.get(`${PROXY}${LINK}`);
      setCountries(data.data);
    })();
  }, []);
  const renderCountries = () => {
    if (filteredCountries.length > 0) {
      return filteredCountries.map((country, i) => {
        return <li key={country.name}>{country.name}</li>;
      });
    } else if (term === "") {
      return countries.map((country, i) => {
        return <li key={country.name}>{country.name}</li>;
      });
    }
  };
  return (
    <div>
      <label>Search</label>
      <input type="text" value={term} onChange={handleChange} />
      <ul>{renderCountries()}</ul>
    </div>
  );
}
