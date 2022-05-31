import React, { useState } from "react";

function Input({ labelName, handleInputChange, id, value }) {
  return (
    <div>
      <label>{labelName}</label>
      <input
        onChange={handleInputChange}
        type="text"
        id={id}
        value={value}
      ></input>
    </div>
  );
}

export default function Exercise26() {
  const timeArr = [
    {
      label: "Seconds:",
      time: "",
      id: 0,
    },
    {
      label: "Minutes:",
      time: "",
      id: 1,
    },
    {
      label: "Hours:",
      time: "",
      id: 2,
    },
  ];

  const [data, setData] = useState(timeArr);

  const handleChange = (e) => {
    const newTime = [1, 1, 1];
    newTime[e.target.id] = e.target.value;
    switch (e.target.id) {
      case "0":
        newTime[1] = newTime[0] / 60;
        newTime[2] = newTime[1] / 60;
        break;
      case "1":
        newTime[0] = newTime[1] * 60;
        newTime[2] = newTime[1] / 60;
        break;
      case "2":
        newTime[1] = newTime[2] * 60;
        newTime[0] = newTime[1] * 60;
        break;
      default:
        break;
    }

    const changedData = data.map((item, idx) => {
      return {
        label: item.label,
        time: newTime[idx],
        id: item.id,
      };
    });
    setData(changedData);
  };

  const displayInputs = () => {
    return data.map((item) => {
      return (
        <Input
          key={item.id}
          labelName={item.label}
          handleInputChange={handleChange}
          id={item.id}
          value={item.time}
        />
      );
    });
  };

  return <div>{displayInputs()}</div>;
}
