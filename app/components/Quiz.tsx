"use client"

import React, { useState } from 'react'


const questions = [
    {
        key: 1,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png",
        difficulty: "easy",
        
        question: "Google originally started as a research project at which university?",
        answer: "Stanford University",
        option1: "Harvard University",
        option2: "Stanford University",
        option3: "MIT",
    },
    {
        key: 2,
        logo: "",
        difficulty: "easy",
        company: "Microsoft",
        question: "Microsoft was founded in which year?",
        answer: "1975",
        option1: "1980",
        option2: "1990",
        option3: "1975",
    },
    {
        key: 3,
        logo: "",
        difficulty: "easy",
        company: "Meta (Facebook)",
        question: "Meta (Facebook) originally launched under what name?",
        answer: "TheFacebook",
        option1: "TheFacebook",
        option2: "FaceConnect",
        option3: "SocialNet",
    },
    {
        key: 4,
        logo: "",
        difficulty : "medium",
        company: "Amazon",
        question: "Amazon Web Services (AWS) was launched in which year?", 
        answer: "2006",
        option1: "2006",
        option2: "2004",
        option3: "2008",
    },
    {
        key: 5,
        logo: "",
        difficulty : "medium",
        company: "Netflix",
        question: "Netflix uses which primary programming language for its backend services?",
        answer: "Java",
        option1: "Python",
        option2: "Java",
        option3: "Ruby",
    },
    {
        key: 6,
        logo: "",
        difficulty : "medium",
        company: "Adobe",
        question: "Adobe is the creator of which widely used document file format?",
        answer: "PDF (Portable Document Format)",
        option1: "DOCX",
        option2: "PDF (Portable Document Format)",
        option3: "HTML",
    },
    {
        key: 7,
        logo: "",
        difficulty : "medium",
        company: "IBM",
        question: "IBM is known for pioneering which early programming language?",
        answer: "FORTRAN",
        option1: "COBOL",
        option2: "FORTRAN",
        option3: "BASIC",
    },
    {
        key: 8,
        logo: "",
        difficulty : "hard",
        company: "Oracle",
        question: "Oracle is primarily known for which type of enterprise software?",
        answer: "Database Management Systems",
        option1: "Customer Relationship Management (CRM)",
        option2: "Enterprise Resource Planning (ERP)",
        option3: "Database Management Systems",
    },
    {
        key: 9,
        logo: "",
        difficulty : "hard",
        company: "Salesforce",
        question: "Salesforce popularized what cloud computing business model?",
        answer: "Software as a Service (SaaS)",
        option1: "Infrastructure as a Service (IaaS)",
        option2: "Platform as a Service (PaaS)",
        option3: "Software as a Service (SaaS)",
    },
    {
        key: 10,
        logo: "",
        difficulty : "hard",
        company: "SAP",
        question: "SAP provides enterprise software mainly for managing what business functions?",
        answer: "Enterprise Resource Planning (ERP)",
        option1: "Enterprise Resource Planning (ERP)",
        option2: "Supply Chain Management (SCM)",
        option3: "Customer Relationship Management (CRM)",
    }
    
]


export default function Quiz() {
    let [score, setScore] = useState(0)


    let [question, setQuestion] = useState(0)
    let [guess, setGuess] = useState("")

    function previousQuestion() {
        
    }

    function nextQuestion() {
        console.log(guess)
        if(guess == questions[question].answer || ! (guess=="")) {
            setScore(score+1)
            console.log(score)
        }
        if(guess=="") {
            
        }
    }

    function submit() {
        
    }






    return (
        <div>
            <div className='bg-optimalightgreen p-10 rouded-xl flex flex-col items-center mb-10 mt-10 rounded-xl border-5 border-optimalimegreen w-100 h-150 md:w-150 lg:w-200'>
                <img
                className='max-w-50 max-h-20 mt-2'
                src={questions[question].logo}
                />
                <div>
                <h1
                className='text-black font-bold text-2xl mb-4 mt-4'
                >
                    {questions[question].company}
                </h1>
                </div>
                <div className='h-20 w-full bg-optimalimegreen rounded-lg mb-5 p-5 flex items-center justify-center border-5 border-optimalimegreen'>
                <span
                className='text-black font-medium text-lg'
                >
                    {questions[question].question}
                </span>
                </div>
                <div className='h-50 text-black font-medium text-lg mb-6 w-full bg-optimalightorange p-4 rounded-lg flex flex-col align-center justify-evenly border-5 border-optimaorange'>
                        <div className='flex justify-between items-center'>
                            <label htmlFor='option1' className='w-full bg-optimalightorange flex justify-between items-center'>{questions[question].option1}
                                <div className='w-8 h-8 bg-optimalightgreen rounded-lg border-2 border-optimalimegreen flex items-center justify-center'>{guess == questions[question].option1 ? "X" : ""}</div>
                            </label>
                            <input id='option1' value={questions[question].option1} onChange={(e) => setGuess(e.target.value)} name={questions[question].key.toString()} type='radio' className='size-5 hidden' />
                        </div>
                        <div className='w-full h-1 bg-optimaorange'></div>
                        <div className='flex justify-between items-center'>
                            <label htmlFor='option2' className='w-full bg-optimalightorange flex justify-between items-center'>{questions[question].option2}
                                <div className='w-8 h-8 bg-optimalightgreen rounded-lg border-2 border-optimalimegreen flex items-center justify-center'>{guess == questions[question].option2 ? "X" : ""}</div>
                            </label>
                            <input id="option2" value={questions[question].option2} onChange={(e) => setGuess(e.target.value)} name={questions[question].key.toString()} type='radio' className='size-5 hidden' />
                        </div>
                        <div className='w-full h-1 bg-optimaorange'></div>
                        <div className='flex justify-between items-center'>
                            <label htmlFor='option3' className='w-full bg-optimalightorange flex justify-between items-center'>{questions[question].option3}
                                <div className='w-8 h-8 bg-optimalightgreen rounded-lg border-2 border-optimalimegreen flex items-center justify-center'>{guess == questions[question].option3 ? "X" : ""}</div>
                            </label>
                            <input id="option3" value={questions[question].option3} onChange={(e) => (setGuess(e.target.value))} name={questions[question].key.toString()} type='radio' className='size-5 hidden' />
                        </div>
                </div>
                <div className='text-black font-medium text-lg w-full bg-optimalightorange p-4 rounded-lg flex justify-between h-25 items-center border-5 border-optimaorange'>
                    <button id='previous' onClick={previousQuestion} className='bg-red-500 rounded-lg hover:bg-red-600 active:bg-red-700 w-24 h-12 md:w-30 md:h-15'>Previous</button>
                    <p>{question + 1 + " / " + "10"}</p>
                    <span>score: {score}</span>
                    {!(question== 9)?<button id='next' onClick={nextQuestion} className='bg-green-500 rounded-lg hover:bg-green-600 active:bg-green-700 w-24 h-12 md:w-30 md:h-15'>Next</button>:
                    <button id='submit' onClick={submit} className='bg-green-500 rounded-lg hover:bg-green-600 active:bg-green-700 w-24 h-12 md:w-30 md:h-15'>Submit</button>
                    }
                </div>
            </div>
        </div>
    )
}