"use client"

import React, { useState, useEffect } from 'react'

const questions = [
    {
        key: 1,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png",
        difficulty: "easy",
        question: "Google startade ursprungligen som ett forskningsprojekt vid vilket universitet?",
        answer: "Stanford University",
        option1: "Harvard University",
        option2: "Stanford University",
        option3: "MIT",
    },
    {
        key: 2,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/3840px-Microsoft_logo_%282012%29.svg.png",
        difficulty: "easy",
        question: "När grundades Microsoft?",
        answer: "1975",
        option1: "1980",
        option2: "1990",
        option3: "1975",
    },
    {
        key: 3,
        logo: "https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo.png",
        difficulty: "easy",
        question: "Meta (Facebook) lanserades ursprungligen under vilket namn?",
        answer: "TheFacebook",
        option1: "TheFacebook",
        option2: "FaceConnect",
        option3: "SocialNet",
    },
    {
        key: 4,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/960px-Amazon_logo.svg.png",
        difficulty : "medium",
        question: "När lanserades Amazon Web Services (AWS)?", 
        answer: "2006",
        option1: "2006",
        option2: "2004",
        option3: "2008",
    },
    {
        key: 5,
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Netflix_Logomark.png",
        difficulty : "medium",
        question: "Vilket huvudsakligt programspråk använder Netflix för sina backend-tjänster?",
        answer: "Java",
        option1: "Python",
        option2: "Java",
        option3: "Ruby",
    },
    {
        key: 6,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/960px-Adobe_Corporate_logo.svg.png",
        difficulty : "medium",
        question: "Adobe är skaparen av vilket allmänt använt dokumentfilformat?",
        answer: "PDF (Portable Document Format)",
        option1: "DOCX",
        option2: "PDF (Portable Document Format)",
        option3: "HTML",
    },
    {
        key: 7,
        logo: "https://pngimg.com/d/ibm_PNG19658.png",
        difficulty : "medium",
        question: "IBM är känt för att ha varit pionjärer för vilket tidigt programspråk?",
        answer: "FORTRAN",
        option1: "COBOL",
        option2: "FORTRAN",
        option3: "BASIC",
    },
    {
        key: 8,
        logo: "https://blockchain-expo.com/wp-content/uploads/2024/01/Oracle-Logo.png",
        difficulty : "hard",
        question: "Oracle är främst känt för vilken typ av företagsprogramvara?",
        answer: "Databashanteringssystem",
        option1: "Kundrelationshantering (CRM)",
        option2: "Affärssystem (ERP)",
        option3: "Databashanteringssystem",
    },
    {
        key: 9,
        logo: "https://www.salesforce.com/news/wp-content/uploads/sites/3/2020/08/SFDO-Logo-2020-RGB-Vert-FullColor.png?w=1218",
        difficulty : "hard",
        question: "Vilken affärsmodell för molntjänster populariserade Salesforce?",
        answer: "Programvara som en tjänst (SaaS)",
        option1: "Infrastruktur som en tjänst (IaaS)",
        option2: "Plattform som en tjänst (PaaS)",
        option3: "Programvara som en tjänst (SaaS)",
    },
    {
        key: 10,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/1280px-SAP_2011_logo.svg.png",
        difficulty : "hard",
        question: "SAP tillhandahåller företagsprogramvara främst för att hantera vilka affärsfunktioner?",
        answer: "Affärssystem (ERP)",
        option1: "Affärssystem (ERP)",
        option2: "Leverantörskedjehantering (SCM)",
        option3: "Kundrelationshantering (CRM)",
    }
    
]


export default function Quiz() {
    let [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""))

    let [question, setQuestion] = useState(0)
    let [guess, setGuess] = useState("")
    let [submitted, setSubmitted] = useState(false)
    let [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        if (localStorage.getItem("Submitted")) {
            setSubmitted(true)
        }
    }, [])

    let score = answers.reduce((acc, a, idx) => (a === questions[idx].answer ? acc + 1 : acc), 0)

    function previousQuestion() {
        const newIndex = Math.max(0, question - 1)
        setQuestion(newIndex)
        setGuess(answers[newIndex] || "")
    }

    function nextQuestion() {
        if (!answers[question]) return
        const newIndex = Math.min(questions.length - 1, question + 1)
        setQuestion(newIndex)
        setGuess(answers[newIndex] || "")
    }

    function submit() {
        if (submitted) return
        if (!answers[question]) return
        setSubmitted(true)
        localStorage.setItem("Submitted", "true")
        localStorage.setItem("score", score.toString())
    }

    if (!mounted) return null

    if (submitted) {
        return (
        <div>
        <header className="flex justify-center items-center">
        <div className="flex gap-3">
            <a href="https://programutvecklare.com/" target="_blank">
            <img src="/logo.webp" alt="Logo" className="w-9 h-auto pt-3" />
            </a>
            <div className="flex flex-col">
                <a href="https://optimaedu.fi/sv/" target="_blank">
                <img src="/optima.webp" alt="Logo" className="w-20 h-auto" />
                </a>
                <a href="https://programutvecklare.com/" target="_blank">
                <p className="text-sm hover:underline">Programutvecklare</p>
                </a>
            </div>
        </div>
        </header>
            <div className="flex items-center justify-center bg-white font-sans">
                <div className="bg-optimalightgreen p-10 flex flex-col items-center mb-10 mt-10 rounded-xl border-5 border-optimalimegreen text-black text-lg font-medium w-100 h-100">
                    <div className='h-20 w-full bg-optimalimegreen rounded-lg mb-5 p-5 flex items-center justify-center border-5 border-optimalimegreen'>
                    <h1 className="text-2xl font-bold">Quiz Slutfört</h1>
                    </div>
                    <div className='h-55 w-full bg-optimalightorange p-4 rounded-lg flex items-center justify-evenly flex-col border-5 border-optimaorange text-lg'>
                        <p>Du är <strong>{Math.round((parseInt(localStorage.getItem("score") || "0") / questions.length) * 100)}</strong>% Programmerare</p>
                        <p>{localStorage.getItem("score") || "0"} av {questions.length} rätt</p>
                    </div>
                </div>
            </div>
            </div>
        )
    }

    return (
        <div>
        <header className="flex justify-center items-center">
        <div className="flex gap-3">
            <a href="https://programutvecklare.com/" target="_blank">
            <img src="/logo.webp" alt="Logo" className="w-9 h-auto pt-3" />
            </a>
            <div className="flex flex-col">
                <a href="https://optimaedu.fi/sv/" target="_blank">
                <img src="/optima.webp" alt="Logo" className="w-20 h-auto" />
                </a>
                <a href="https://programutvecklare.com/" target="_blank">
                <p className="text-sm hover:underline">Programutvecklare</p>
                </a>
            </div>
        </div>
        </header>
            <div className='bg-optimalightgreen rouded-xl flex flex-col items-center mb-10 mt-10 rounded-xl border-5 border-optimalimegreen p-5 w-100 h-150 md:w-150 lg:w-200 md:p-10'>
                <div className='h-20 w-50'>
                    <img
                    className='w-50 h-20 object-contain'
                    src={questions[question].logo}
                    alt="Company Logo"
                    />
                </div>
                <div className='min-h-20 max-h-20 h-20 w-full bg-optimalimegreen rounded-lg mb-5 p-5 flex items-center justify-center border-5 border-optimalimegreen mt-8'>
                <span
                className='text-black font-medium text-sm md:text-lg'
                >
                    {questions[question].question}
                </span>
                </div>
                <div className='text-black font-medium mb-6 w-full bg-optimalightorange p-4 rounded-lg flex flex-col align-center justify-evenly border-5 border-optimaorange h-60 text-sm md:text-lg md:h-50'>
                    <div className='flex justify-between items-center'>
                        <label htmlFor='option1' className='w-full bg-optimalightorange flex justify-between items-center'>{questions[question].option1}
                        <div className='w-8 h-8 bg-optimalightgreen rounded-lg border-2 border-optimalimegreen flex items-center justify-center'>{guess == questions[question].option1 ? "X" : ""}</div>
                        </label>
                        <input id='option1' value={questions[question].option1} onChange={(e) => { const v = e.target.value; const next = [...answers]; next[question] = v; setAnswers(next); setGuess(v); }} name={questions[question].key.toString()} type='radio' className='size-5 hidden' checked={answers[question] === questions[question].option1} disabled={submitted} />
                    </div>
                        <div className='w-full h-1 bg-optimaorange'></div>
                    <div className='flex justify-between items-center'>
                        <label htmlFor='option2' className='w-full bg-optimalightorange flex justify-between items-center'>{questions[question].option2}
                        <div className='w-8 h-8 bg-optimalightgreen rounded-lg border-2 border-optimalimegreen flex items-center justify-center'>{guess == questions[question].option2 ? "X" : ""}</div>
                        </label>
                        <input id="option2" value={questions[question].option2} onChange={(e) => { const v = e.target.value; const next = [...answers]; next[question] = v; setAnswers(next); setGuess(v); }} name={questions[question].key.toString()} type='radio' className='size-5 hidden' checked={answers[question] === questions[question].option2} disabled={submitted} />
                    </div>
                        <div className='w-full h-1 bg-optimaorange'></div>
                    <div className='flex justify-between items-center'>
                        <label htmlFor='option3' className='w-full bg-optimalightorange flex justify-between items-center'>{questions[question].option3}
                        <div className='w-8 h-8 bg-optimalightgreen rounded-lg border-2 border-optimalimegreen flex items-center justify-center'>{guess == questions[question].option3 ? "X" : ""}</div>
                        </label>
                        <input id="option3" value={questions[question].option3} onChange={(e) => { const v = e.target.value; const next = [...answers]; next[question] = v; setAnswers(next); setGuess(v); }} name={questions[question].key.toString()} type='radio' className='size-5 hidden' checked={answers[question] === questions[question].option3} disabled={submitted} />
                    </div>
                </div>
                <div className='text-black font-medium w-full bg-optimalightorange p-4 rounded-lg flex justify-between h-25 items-center border-5 border-optimaorange text-sm md:text-lg'>
                    <button id='previous' onClick={previousQuestion} className='bg-red-500 rounded-lg hover:bg-red-600 active:bg-red-700 w-24 h-12 md:w-30 md:h-15'>Föregående</button>
                    <p>{question + 1 + " / " + questions.length}</p>
                    {!(question== 9)?
                        <button id='next' onClick={nextQuestion} disabled={answers[question] === ""} className={'bg-green-500 rounded-lg w-24 h-12 md:w-30 md:h-15 ' + (answers[question] === "" ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600 active:bg-green-700')}>Nästa</button>
                        :
                        <button id='submit' onClick={submit} disabled={submitted || answers[question] === ""} className={'bg-green-500 rounded-lg w-24 h-12 md:w-30 md:h-15 ' + ((submitted || answers[question] === "") ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600 active:bg-green-700')}>{submitted ? 'Slutfört' : 'Slutför'}</button>
                    }
                </div>
            </div>
        </div>
    )
}