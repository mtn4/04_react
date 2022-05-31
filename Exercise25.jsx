import React, { useState } from "react";

const data = [
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "Learn React", completed: false },
  { name: "Learn mongoDB", completed: false },
  { name: "Learn Node JS", completed: false },
];

export default function Exercise25() {
  const [list, setList] = useState([...data]);
  const toggleCompleted = (i) => {
    const temp = [...list];
    temp[i].completed = !temp[i].completed;
    setList([...temp]);
  };
  const renderList = () =>
    list.map((li, i) => (
      <div key={li.name} onClick={() => toggleCompleted(i)}>
        <h4
          className={li.completed ? "completed" : null}
          style={{ textDecoration: li.completed ? "line-through" : "" }}
        >
          {li.name}{" "}
          <span>
            {li.completed
              ? String.fromCharCode(10003)
              : String.fromCharCode(120)}
          </span>
        </h4>
      </div>
    ));
  return <div>{renderList()}</div>;
}
