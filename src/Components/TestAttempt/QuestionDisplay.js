import React, { useEffect, useState } from 'react'
import { database } from '../../Utils/firebase';

export const QuestionDisplay = () => {
    
    const [questions, setQuestions] = useState([])
    const [questionNo, setQuestionNo] = useState(JSON.parse(localStorage.qno))

    useEffect(() => {
        const data = []
        database.collection("Questions").get().then(snap => {
            snap.docs.forEach(doc => {
                data.push(doc.data())
            })
            setQuestions(data)
        })
        document.getElementById("next").addEventListener("click",() => {
            var value = JSON.parse(localStorage.qno) + 1;
            localStorage.qno = JSON.stringify(value);
            setQuestionNo(value)
        })
    },[])
    
    var currentQuestion;

    questions.forEach(e => {
        if(e.No === JSON.parse(questionNo)){
        currentQuestion = e.Question
        }
    })


    return (
        <div>
            {currentQuestion && currentQuestion}
        </div>
    )
}
