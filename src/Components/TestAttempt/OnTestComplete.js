import React, { useEffect, useState } from 'react'
import { database } from '../../Utils/firebase'

export const OnTestComplete = () => {

    
    var selectedAnswers = Object.values(JSON.parse(localStorage.selecAns));
    const [marks, setMarks] = useState(0)
    
    

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
                console.log(correctAnswers);
            }
            
        )
            

    },[])

    // if(correctAnswers) console.log(correctAnswers);



    return (
        <div>
            Hi, your test has completed!!
            <br></br>
            <h1>You have scored {marks} marks!</h1>
        </div>
    )
}
