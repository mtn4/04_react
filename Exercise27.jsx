import React, { useState } from "react";
const data = ["one", "two", "three", "four", "five"];

const Input = ({ label, isChecked, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input onChange={onChange} type="checkbox" checked={isChecked} />
    </div>
  );
};

export default function Exercise27() {
  const checkBoxes = data.map((checkbox, i) => {
    return { name: checkbox, isChecked: false };
  });
  const [checkObjs, setCheckObjs] = useState(checkBoxes);
  const onChange = (i) => {
    const temp = [...checkObjs];
    temp[i].isChecked = !temp[i].isChecked;
    setCheckObjs(temp);
  };
  const onDelete = () => {
    const temp = checkObjs.filter((checkbox) => checkbox.isChecked === false);
    setCheckObjs(temp);
  };
  const onReset = () => {
    setCheckObjs(checkBoxes);
  };
  const renderCheckBoxes = () =>
    checkObjs.map((checkbox, i) => (
      <Input
        key={checkbox.name}
        onChange={() => onChange(i)}
        label={checkbox.name}
        isChecked={checkbox.isChecked}
      />
    ));
  return (
    <div>
      <button onClick={onReset}>Reset</button>
      <button onClick={onDelete}>Delete</button>
      {renderCheckBoxes()}
    </div>
  );
}
