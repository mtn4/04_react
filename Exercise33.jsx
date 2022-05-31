import React, { useState, useEffect, useRef } from "react";

export default function Exercise33() {
  const [toggle, setToggle] = useState(false);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, [toggle]);
  return (
    <div className="App">
      <button onClick={() => setToggle((prev) => !prev)}>
        {!toggle ? "Edit" : "Save"}
      </button>
      {toggle && <input ref={inputRef} type="text" />}
    </div>
  );
}
