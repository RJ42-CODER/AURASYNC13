import React, { useState } from "react";
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
});

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(0);
  const [activeMobile, setActiveMobile] = useState<number | null>(null);

  const questions = [
    {
      question: "What is Flex-verse ?",
      answer:
        "Flex-verse is a Platform which offers multiple features for you to stay fit and healthy.",
    },
    {
      question: "Do I have to pay for something ?",
      answer: "Some features are free, others require a subscription.",
    },
    {
      question: "How to register as a trainer ?",
      answer: "You can register through the trainer sign-up form on the website.",
    },
    {
      question: "Is there any subscription fee ?",
      answer: "Yes, we offer monthly and yearly subscription plans.",
    },
    {
      question: "Other...",
      answer: "For more queries, please contact our support.",
    },
  ];

  const toggleAnswer = (index: number) => {
    if (index !== activeQuestion) {
      setActiveQuestion(index);
    }
  };

  const toggleMobile = (index: number) => {
    setActiveMobile(activeMobile === index ? null : index);
  };

  return (
    <section className={`w-full min-h-screen flex flex-col items-center justify-center py-8 px-2 md:px-0 ${quicksand.className}`} style={{ backgroundColor: 'rgba(234, 212, 121, 0.8)' }}>
      {/* Mobile Accordion */}
      <div className="w-full max-w-2xl md:hidden animate-fade-in">
        <h3 className="font-bold text-xl sm:text-2xl mb-6 text-black text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Frequently Asked Questions</h3>
        {questions.map((q, index) => (
          <div key={index} className="mb-2">
            <button
              className={`w-full faq-button transition-all duration-300 text-sm sm:text-base mb-1 flex justify-between items-center ${activeMobile === index ? 'highlighted' : ''}`}
              onClick={() => toggleMobile(index)}
            >
              <span>{q.question}</span>
              <span className={`arrow transform transition-transform duration-300 ${activeMobile === index ? 'rotate-90' : ''}`}>{''}</span>
            </button>
            {activeMobile === index && (
              <div className="bg-yellow-400 text-black rounded-b-lg px-4 py-3 text-sm sm:text-base animate-fade-in">
                {q.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Desktop/Tablet Layout */}
      <div className="faq-container w-full max-w-6xl hidden md:flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 animate-fade-in">
        <div className="faq-box flex flex-col md:flex-row w-full rounded-3xl shadow-2xl overflow-hidden" style={{background: '#000', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'}}>
          <div className="faq-questions flex flex-col p-4 md:p-8 min-w-[180px] md:min-w-[340px] bg-yellow-400 flex-1">
            <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 text-[#1c3f56]">FAQ</h3>
            {questions.map((q, index) => (
              <button
                key={index}
                className={`faq-button transition-all duration-300 text-sm md:text-base lg:text-xl mb-2 ${index === activeQuestion ? 'highlighted' : ''}`}
                onClick={() => toggleAnswer(index)}
              >
                {q.question}
                <span className="arrow">{''}</span>
              </button>
            ))}
          </div>
          <div className={`faq-answer bg-black text-white flex-1 flex flex-col justify-center items-center p-4 md:p-8 min-h-[180px] md:min-h-[300px]`}>
            <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-4 md:mb-6">ANSWERS</h3>
            <p className="transition-all duration-300 text-sm md:text-base lg:text-xl text-center min-h-[40px] md:min-h-[60px]">{activeQuestion !== null ? questions[activeQuestion].answer : ""}</p>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .faq-button {
          background-color: #fff;
          border: none;
          border-radius: 8px;
          padding: 1rem 1.5rem;
          margin: 0.3rem 0;
          text-align: left;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          font-weight: 600;
          color: #000;
          transition: transform 0.3s ease-in-out;
        }
        .faq-button.highlighted {
          background-color: #000;
          color: #fff;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          transform: scale(1.02);
        }
        .arrow {
          font-weight: bold;
        }
      `}</style>
    </section>
  );
};

export default FAQ; 