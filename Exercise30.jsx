import React, { useState, useEffect } from "react";
import axios from "axios";
const PROXY = "https://nameless-citadel-58066.herokuapp.com/";
const LINK = "https://hn.algolia.com/api/v1/search?query=";

export default function Exercise30() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("hooks");
  const [input, setInput] = useState("hooks");
  const [loading, setLoading] = useState(true);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = () => {
    setQuery(input);
  };
  useEffect(() => {
    setLoading(true);
    (async () => {
      const data = await axios.get(`${PROXY}${LINK}${query}`);
      setResults(data.data.hits);
      setLoading(false);
    })();
  }, [query]);

  const renderResults = () => {
    if (results.length > 0) {
      return results.map((result, i) => {
        return (
          <li key={result.objectID}>
            <a href={result.url} target="_blank" rel="noreferrer">
              {result.title}
            </a>
          </li>
        );
      });
    }
  };
  return (
    <div>
      <label>Search AngoliaAPI: </label>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
      {loading ? <div>Loading</div> : <ul>{renderResults()}</ul>}
    </div>
  );
}
