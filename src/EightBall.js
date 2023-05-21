import React, { useState } from "react";
import "./EightBall.css";
import answers from "./answers";

const EightBall = () => {
  const [ballText, setballText] = useState("Think of a question");
  const [ballColor, setballColor] = useState("black");

  function randomItem(arr) {
    const randomNum = Math.floor(Math.random() * arr.length);
    return arr[randomNum];
  }

  function updateBall() {
    let randomAnswer = randomItem(answers);
    let answer = randomAnswer.msg;
    let color = randomAnswer.color;
    setballText(answer);
    setballColor(color);
  }

  function restart() {
    setballText('Think of a question')
    setballColor('black')
  }

  return (
    <>
      <div
        onClick={updateBall}
        className="ball"
        style={{ background: ballColor }}
      >
        <span className="question">{ballText}</span>
      </div>
      <button onClick = {restart}>Restart</button>
    </>
  );
};

export default EightBall;
