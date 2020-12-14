import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import "../../CSS/testList.css"
import { database } from '../../Utils/firebase'

export const TestList = () => {
    
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        const data = [];
        database.collection("Questions").get().then(snap => {
            snap.docs.forEach(
                doc => {
                    data.push(doc.id)
                }
            )
            setQuestions(data)
        })
    },[])

    return (
        <div className="main d-flex justify-content-center align-items-center border vh-100" >
            <div className="testList text-white">
                {
                    questions.map( q => (
                        <div className="group mb-5">
                            <div>{q}</div>
                            <Button color="light" href="/testattempt" onClick = {() => {
                                localStorage.QuestionId = q
                                localStorage.selecAns = JSON.stringify({})
                            }}> Attempt</Button>
                        </div>
                    ))
                }
                
            </div>
            
        </div>
    )
}


{/* <div className="group">
<div>TestName</div>
<a href="/testattempt"> Attempt</a>
</div> */}