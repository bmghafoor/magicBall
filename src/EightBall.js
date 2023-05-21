import React, { useState } from "react";
import "./EightBall.css"

const EightBall = () => {
    const [ballText, setballText] = useState('Think of a question')
  return (
    <>
      <div className="blackBall">
        <span className="question">{ballText}</span>
      </div>
    </>
  );
};

export default EightBall;
