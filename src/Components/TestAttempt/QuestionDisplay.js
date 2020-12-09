import React, { useEffect, useState } from 'react'
import { FormGroup } from 'react-bootstrap';
import { Input, Label } from 'reactstrap';
import { database } from '../../Utils/firebase';

export const QuestionDisplay = () => {
    
    const [questions, setQuestions] = useState([])
    const [questionNo, setQuestionNo] = useState(JSON.parse(localStorage.qno))
    const [index, setIndex] = useState()

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
        document.getElementById("prev").addEventListener("click",() => {
            var value = JSON.parse(localStorage.qno) - 1;
            localStorage.qno = JSON.stringify(value);
            setQuestionNo(value)
        })
    },[])
    
    var currentQuestion;
    var option1, option2, option3, option4;

    questions.forEach(e => {
        if(e.No === JSON.parse(questionNo)){
        currentQuestion = e.Question;

        }
    })
    questions.forEach(e => {
        if(e.No === JSON.parse(questionNo)){
        option1 = e.Opt1;
        option2 = e.Opt2;
        option3 = e.Opt3;
        option4 = e.Opt4;

        }
    })


    return (
        <div>
            {currentQuestion && currentQuestion}
            <div className="options">
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                {option1 && option1}
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                {option2 && option2}
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                {option3 && option3}
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                {option4 && option4}
                            </Label>
                        </FormGroup>
                    </div>
        </div>
    )
}
