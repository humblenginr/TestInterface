import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { database } from '../../Utils/firebase'

export const OnTestComplete = () => {

    const CorrectAnswers = [];
    const SelectedAnswers = [];
    var marks = 0;
    const [render, setRender] = useState()
    const history  = useHistory()
    

    useEffect(() => {
        database.collection("Answers").doc("Question1").get().then(
            snap => {
                var data;
                data = snap.data();
                for(var values of Object.values(data)){
                    CorrectAnswers.push(values)
                }

                for (let i = 0; i < CorrectAnswers.length; i++) {
                    SelectedAnswers.push(JSON.parse(localStorage.getItem(i+1)))
                    
                }

                for (let i = 0; i < SelectedAnswers.length; i++) {
                    if(SelectedAnswers[i] === CorrectAnswers[i]) {
                        marks++
                        
                    };  
                }
                setRender(marks);

                document.getElementById("homeBtn").addEventListener("click", () => {

         
                    for (let i = 0; i < SelectedAnswers.length; i++) {
                        var item = i+1;
                        localStorage.removeItem(item)
                        
                    }
                    history.push("/")
    
                
    
    
            })
                
            } 
    
        )



    },[])

    function Evaluate () {

    }

    Evaluate()

    return (
        <div>
            HI, you have scored <br></br>
            <h1>{render && render}</h1>
            <br></br>
            marks

            <div className="btn btn-outline-primary ml-5" id="homeBtn">Home</div>
            
        </div>
    )
}
