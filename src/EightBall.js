import React, { useState } from "react";
import "./EightBall.css";
import answers from "./answers";

const EightBall = () => {
  const [ballText, setballText] = useState("Think of a question");
  const [ballClass, setballClass] = useState("blackBall");

  function randomItem(arr) {
    const randomNum = Math.floor(Math.random() * arr.length);
    return arr[randomNum];
  }

  function updateBall() {
    let randomAnswer = randomItem(answers);
    let answer = randomAnswer.msg;
    setballText(answer);
  }

  return (
    <>
      <div onClick={updateBall} className={ballClass}>
        <span className="question">{ballText}</span>
      </div>
    </>
  );
};

export default EightBall;
