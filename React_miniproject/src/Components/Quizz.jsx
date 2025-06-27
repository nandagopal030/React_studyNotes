import '../css/Quizz.css'
import questionData from '../Components/Questions.json'
import { useEffect, useState } from 'react'

export const Quizz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [timer, setTimer] = useState(10);
const handleAnswerClick = (selectedOption) => {
    if (questionData[currentQuestion].options[selectedOption] === questionData[currentQuestion].correctOption) {
    setScore((prevScore) => prevScore + 1);
}

    if (currentQuestion < questionData.length - 1) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        setTimer(10);
    } else {
        setShowScore(true);
    }
};
const handleRestart = () =>{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimer(10);
}

useEffect(()=>{
    let interval;
    if(timer> 0 && !showScore){
        interval = setInterval(()=>{
            setTimer((prevTimer) => prevTimer -1);
        }, 1000)
    }else{
        clearInterval(interval);
        setShowScore(true);
    }
    return ()=>clearInterval(interval);
  
},[timer, showScore])
 
  return (
    <>
    <div className="quizz-app">
        {showScore ? ( <div className="score-section" >
            <h2>Your Score : {score}/{questionData.length }</h2>
            <button onClick={handleRestart}>Restart</button>
        </div>): (<div className="question-section">
            <h2>Question {currentQuestion + 1}</h2>
            <p>{questionData[currentQuestion].question}</p>
            <div className="options">
               {questionData[currentQuestion].options.map((option,index)=>(
                <button onClick={() => handleAnswerClick(index)} key={index}>{option} </button>
               ))}
            </div>
            <div className="timer">Time Left: <span>{timer}s</span> </div>
        </div>)}
    </div>

    </>
  )
}
