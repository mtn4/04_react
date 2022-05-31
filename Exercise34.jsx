import React, { useRef } from "react";

export default function Exercise34() {
  const vidRef = useRef(null);
  const handlePlay = () => {
    vidRef && vidRef.current.play();
  };
  const handlePause = () => {
    vidRef && vidRef.current.pause();
  };

  return (
    <div className="App">
      <video
        style={{ display: "block", width: "80%", margin: "0 auto" }}
        ref={vidRef}
        src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
      ></video>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}
