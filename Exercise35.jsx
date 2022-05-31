import React, { useRef } from "react";

const imgGrey = "https://picsum.photos/200/300?grayscale";
const img = "https://picsum.photos/200/300";
export default function Exercise35() {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const handleEnter = (e) => {
    e.currentTarget.src = img;
  };
  const handleLeave = (e) => {
    e.currentTarget.src = imgGrey;
  };
  return (
    <div className="App">
      <img
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        ref={img1}
        src="https://picsum.photos/300/300?grayscale"
        alt=""
        style={{ margin: "10%" }}
      />
      <img
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        ref={img2}
        src="https://picsum.photos/300/300?grayscale"
        alt=""
      />
    </div>
  );
}
