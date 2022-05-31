import React, { useState, useEffect } from "react";
import axios from "axios";

const Fetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const countries = await axios.get("https://restcountries.com/v2/all", {
          signal: controller.signal,
        });
        setData(countries.data);
      } catch (e) {
        console.log(e.message);
      }
    })();
    return () => controller.abort();
  }, []);
  const renderCountries = () => {
    console.log(data);
    return <div className="">{JSON.stringify(data)}</div>;
  };
  return <div>{data && renderCountries()}</div>;
};

export default function Exercise32() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
      {toggle && <Fetch />}
    </div>
  );
}
