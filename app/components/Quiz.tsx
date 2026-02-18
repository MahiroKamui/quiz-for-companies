"use client"

import { ChangeEvent, useState, useEffect } from 'react'

const questions = [
    {
        key: 1,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png",
        difficulty: "easy",
        // company: "Google",
        question: "Google originally started as a research project at which university?",
        answer: "Stanford University",
        option1: "Harvard University",
        option2: "Stanford University",
        option3: "MIT",
    },
    {
        key: 2,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/3840px-Microsoft_logo_%282012%29.svg.png",
        difficulty: "easy",
        // company: "Microsoft",
        question: "Microsoft was founded in which year?",
        answer: "1975",
        option1: "1980",
        option2: "1990",
        option3: "1975",
    },
    {
        key: 3,
        logo: "https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo.png",
        difficulty: "easy",
        // company: "Meta (Facebook)",
        question: "Meta (Facebook) originally launched under what name?",
        answer: "TheFacebook",
        option1: "TheFacebook",
        option2: "FaceConnect",
        option3: "SocialNet",
    },
    {
        key: 4,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/960px-Amazon_logo.svg.png",
        difficulty : "medium",
        // company: "Amazon",
        question: "Amazon Web Services (AWS) was launched in which year?", 
        answer: "2006",
        option1: "2006",
        option2: "2004",
        option3: "2008",
    },
    {
        key: 5,
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Netflix_Logomark.png",
        difficulty : "medium",
        // company: "Netflix",
        question: "Netflix uses which primary programming language for its backend services?",
        answer: "Java",
        option1: "Python",
        option2: "Java",
        option3: "Ruby",
    },
    {
        key: 6,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/960px-Adobe_Corporate_logo.svg.png",
        difficulty : "medium",
        // company: "Adobe",
        question: "Adobe is the creator of which widely used document file format?",
        answer: "PDF (Portable Document Format)",
        option1: "DOCX",
        option2: "PDF (Portable Document Format)",
        option3: "HTML",
    },
    {
        key: 7,
        logo: "https://pngimg.com/d/ibm_PNG19658.png",
        difficulty : "medium",
        // company: "IBM",
        question: "IBM is known for pioneering which early programming language?",
        answer: "FORTRAN",
        option1: "COBOL",
        option2: "FORTRAN",
        option3: "BASIC",
    },
    {
        key: 8,
        logo: "https://blockchain-expo.com/wp-content/uploads/2024/01/Oracle-Logo.png",
        difficulty : "hard",
        // company: "Oracle",
        question: "Oracle is primarily known for which type of enterprise software?",
        answer: "Database Management Systems",
        option1: "Customer Relationship Management (CRM)",
        option2: "Enterprise Resource Planning (ERP)",
        option3: "Database Management Systems",
    },
    {
        key: 9,
        logo: "https://www.salesforce.com/news/wp-content/uploads/sites/3/2020/08/SFDO-Logo-2020-RGB-Vert-FullColor.png?w=1218",
        difficulty : "hard",
        // https://www.salesforce.com/news/wp-content/uploads/sites/3/2020/08/SFDO-Logo-2020-RGB-Vert-FullColor.png?w=1218company: "Salesforce",
        question: "Salesforce popularized what cloud computing business model?",
        answer: "Software as a Service (SaaS)",
        option1: "Infrastructure as a Service (IaaS)",
        option2: "Platform as a Service (PaaS)",
        option3: "Software as a Service (SaaS)",
    },
    {
        key: 10,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/1280px-SAP_2011_logo.svg.png",
        difficulty : "hard",
        // company: "SAP",
        question: "SAP provides enterprise software mainly for managing what business functions?",
        answer: "Enterprise Resource Planning (ERP)",
        option1: "Enterprise Resource Planning (ERP)",
        option2: "Supply Chain Management (SCM)",
        option3: "Customer Relationship Management (CRM)",
    }
    
]


export default function Quiz() {
    let [score, setScore] = useState(0)
    let [showResults, setShowResults] = useState(false)
    let [question, setQuestion] = useState(0)
    let [guess, setGuess] = useState("")
    let [error, setError] = useState("")
    let [answers, setAnswers] = useState<{ [key: number]: string}>({})
    let [scoredQuestions, setScoredQuestions] = useState<number[]>([])



    useEffect(() => {
    setGuess(answers[question] || "")
    }, [question])


    function checkAnswer() {
        const correctAnswer = questions[question].answer
        const currentAnswer = answers[question]

        if (currentAnswer === correctAnswer && !scoredQuestions.includes(question)) {
            setScore(prev => prev + 1)
            setScoredQuestions(prev => [...prev, question])
        }
    }
    
    function isMissingAnswer() {
        if(guess == "") {
            setError("Please select an answer before continuing")
            return true
        }
        setError("")
        return false
    }

    function previousQuestion() {
        if(question > 0) setQuestion(question-1);
    }

    function nextQuestion() {
        if (isMissingAnswer()) return
        checkAnswer()
        
        if (question < questions.length - 1) {
            setQuestion(question + 1)
        }
    }


    function submit() {
        if(isMissingAnswer()) return;
        checkAnswer()
        setShowResults(true)
    }

    function radioChange(e: ChangeEvent<HTMLInputElement>) {
        setError("")
        const value = e.target.value
        setGuess(value)
        
        setAnswers(prev => ({
            ...prev,
            [question]: value
        }))
}



    if (showResults) {
    return (
        <div className="flex flex-col items-center h-100 justify-center  bg-optimalightgreen text-black">
            <h1 className="text-3xl font-bold mb-4">Quiz Completed!</h1>
            <p className="text-xl mb-4">
                Your Score: {score} / {questions.length}
            </p>
            <button
                onClick={() => {
                    setScore(0);
                    setQuestion(0);
                    setGuess("");
                    setAnswers([])
                    setShowResults(false);
                }}
                className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600"
            >
                Restart Quiz
            </button>
        </div>
    );
}

    return (
        <div id='quizContainer'>
            <div id='quiz' className='bg-optimalightgreen p-10 rouded-xl flex flex-col items-center mb-10 mt-10 rounded-xl border-5 border-optimalimegreen w-100 h-150 md:w-150 lg:w-200'>
                <img
                className=' h-20 mt-2'
                src={questions[question].logo}
                />
                <div>
                <h1
                className='text-black font-bold text-2xl mb-4 mt-4'
                >
                    {/*questions[question].company*/}
                </h1>
                </div>
                <div className='h-20 w-full bg-optimalimegreen rounded-lg mb-5 p-5 flex items-center justify-center border-5 border-optimalimegreen'>
                <span
                className='text-black font-medium text-sm md:text-lg'
                >
                    {questions[question].question}
                </span>
                </div>
                <div className='h-50 text-black font-medium mb-6 w-full bg-optimalightorange p-4 rounded-lg flex flex-col align-center justify-evenly border-5 border-optimaorange text-sm md:text-lg'>
                        <div className='flex justify-between items-center'>
                            <label htmlFor='option1' className='w-full bg-optimalightorange flex justify-between items-center'>{questions[question].option1}
                                <div className='w-8 h-8 bg-optimalightgreen rounded-lg border-2 border-optimalimegreen flex items-center justify-center'>{guess == questions[question].option1 ? "X" : ""}</div>
                            </label>
                            <input id='option1' value={questions[question].option1} onChange={(e) => radioChange(e)} name={questions[question].key.toString()} type='radio' className='size-5 hidden' />
                        </div>
                        <div className='w-full h-1 bg-optimaorange'></div>
                        <div className='flex justify-between items-center'>
                            <label htmlFor='option2' className='w-full bg-optimalightorange flex justify-between items-center'>{questions[question].option2}
                                <div className='w-8 h-8 bg-optimalightgreen rounded-lg border-2 border-optimalimegreen flex items-center justify-center'>{guess == questions[question].option2 ? "X" : ""}</div>
                            </label>
                            <input id="option2" value={questions[question].option2} onChange={(e) => radioChange(e)} name={questions[question].key.toString()} type='radio' className='size-5 hidden' />
                        </div>
                        <div className='w-full h-1 bg-optimaorange'></div>
                        <div className='flex justify-between items-center'>
                            <label htmlFor='option3' className='w-full bg-optimalightorange flex justify-between items-center'>{questions[question].option3}
                                <div className='w-8 h-8 bg-optimalightgreen rounded-lg border-2 border-optimalimegreen flex items-center justify-center'>{guess == questions[question].option3 ? "X" : ""}</div>
                            </label>
                            <input id="option3" value={questions[question].option3} onChange={(e) => radioChange(e)} name={questions[question].key.toString()} type='radio' className='size-5 hidden' />
                        </div>
                </div>
                    <div id='quizContainer' className='pb-5'></div>
                    {error && (
                        <p>
                            {error}
                        </p>
                    )}
                <div className='text-black font-medium text-lg w-full bg-optimalightorange p-4 rounded-lg flex justify-between h-25 items-center border-5 border-optimaorange'>
                    <button id='previous' onClick={previousQuestion} className='bg-red-500 rounded-lg hover:bg-red-600 active:bg-red-700 w-24 h-12 md:w-30 md:h-15'>Previous</button>
                    <p>{question + 1 + " / " + "10"}</p>
                    <div>
                        <span>score: {score}</span><br></br>
                        <button onClick={() => setQuestion(9)} className='w-10 h-10 bg-red-700'/>
                    </div>
                    {!(question== 9)?<button id='next' onClick={nextQuestion} className='bg-green-500 rounded-lg hover:bg-green-600 active:bg-green-700 w-24 h-12 md:w-30 md:h-15'>Next</button>:
                    <button id='submit' onClick={submit} className='bg-green-500 rounded-lg hover:bg-green-600 active:bg-green-700 w-24 h-12 md:w-30 md:h-15'>Submit</button>
                    }
                </div>
            </div>
        </div>
    )
}