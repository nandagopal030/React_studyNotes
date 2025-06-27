
//CSS
import { useState } from 'react';
import '../css/FaqAcordian.css'


const FaqItem = ({question,answer}) =>{
 const [show,setShow] = useState(false);

 const toggleShow = () =>{
    setShow(!show);
 }

    return (
        <div className={`faq-item ${show ? "active" : ""}`}>
            <div className="faq-item-header" onClick={toggleShow}>{question}</div>
            <div className="faq-item-body">
                <div className="faq-item-body-content">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FaqAccordion = ({quiz}) =>{
    return (
        <div className="faq-accordion">
         <h2>FAQS</h2> 
        {quiz.map((item)=><FaqItem  key={item.id} question ={item.question} answer ={item.answer}/>)} 
        </div>
    );
};

const quiz = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: "Paris"
  },
  {
    id: 2,
    question: "What is 2 + 2?",
    answer: "4"
  },
  {
    id: 3,
    question: "Who wrote 'Romeo and Juliet'?",
    answer: "William Shakespeare"
  }
];

export const FaqAcordian = () => {
  return (
    <>
    <FaqAccordion quiz = {quiz} />
    
    </>
  );
};
