import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from 'reactstrap';
import { database } from '../../Utils/firebase'
import { useAuth } from '../../Contexts/Authcontext';

export const OnTestComplete = () => {

    
    var selectedAnswers = Object.values(JSON.parse(localStorage.selecAns));
    const [marks, setMarks] = useState(0)
    const history = useHistory();
    const {currentUser} = useAuth()
    

    useEffect(() => {
        
        var correctAnswers;

        
        
        database.collection("Answers").doc(localStorage.QuestionId).get().then(
            snap => {
                correctAnswers = snap.data().OrderedAns

                if(correctAnswers){
                    var value = 0;
                    for (let i = 0; i < selectedAnswers.length; i++) {
                        
                            if(selectedAnswers[i] === correctAnswers[i]){
                                 value++;
                            }
                        
                        
                    }
                    
                }
                setMarks(value)
                database.collection(currentUser.uid).doc("AttemptedTests").set({[localStorage.QuestionId]: value}, {merge: true})
            }
            
        )
            
    },[])

   



    return (
        <div>
            Hi, your test has completed!!
            <br></br>
            <h1>You have scored {marks} marks!</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Button color="primary" className="mb-5" onClick={() => {
                localStorage.removeItem("QuestionId")
                localStorage.removeItem("selecAns")
                history.push('/testlist')
            }}>Goto Testlist</Button>
            <br></br>
            <br></br>
            <br></br>
            <Button color="primary" onClick={() => {
                localStorage.removeItem("QuestionId")
                localStorage.removeItem("selecAns")
                history.push('/')
            }}>Home</Button>
        </div>
    )
}
