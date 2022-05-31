import React, { useState, useEffect } from "react";
import axios from "axios";
const LINK = "https://api.chucknorris.io/jokes/";
export default function Exercise31() {
  const [joke, setJoke] = useState("");
  const [categories, setCategories] = useState([]);

  const onClickJoke = () => {
    (async () => {
      const data = await axios.get(`${LINK}random`);
      setJoke(data.data.value);
    })();
  };
  const onClickJokeCategories = (e) => {
    (async () => {
      const data = await axios.get(
        `${LINK}random?category=${e.currentTarget.name}`
      );
      setJoke(data.data.value);
    })();
  };
  useEffect(() => {
    (async () => {
      const data = await axios.get(`${LINK}categories`);
      setCategories(data.data);
    })();
  }, [categories]);
  const renderButtons = () => {
    return categories.map((category) => (
      <button onClick={onClickJokeCategories} name={category} key={category}>
        {category}
      </button>
    ));
  };
  return (
    <div>
      <button onClick={onClickJoke}>Random Joke</button>
      <div>{categories && renderButtons()}</div>
      <div>{joke}</div>
    </div>
  );
}
