import React, { useCallback, useState } from "react";
import QUESTIONS from "../../qns.js";
import Question from "./Question.jsx";
import Result from "./Result.jsx";

const Quiz = () => {
  // const [activeIndex,setActiveIndex] = useState(0)

  const [userAnswer, setUserAnswer] = useState([]);

  const qnsIndex = userAnswer.length
  

  const handleAnswer = useCallback((ans) => {
    setUserAnswer((prevAnswer) => [...prevAnswer, ans]);

  
 
  }, []);


    const handleSkip = useCallback(() => handleAnswer(null), [handleAnswer]);


  const quizComplete = qnsIndex === QUESTIONS.length;

  if (quizComplete) {
    return (
      <>
      <Result userAnswer={userAnswer} />
      </>
    );
  }

  console.log("user answer", userAnswer);



  return (
    <>
      <Question
      key={qnsIndex}
      index={qnsIndex}
        onSkip={handleSkip}
        // qns={[QUESTIONS[qnsIndex].qns]}
        // selected={userAnswer[userAnswer.length - 1]}
        // answerState={answerState}
        handleAnswer={handleAnswer}
        // answer={[...QUESTIONS[qnsIndex].option]}
      />
    </>
  );
};

export default Quiz;