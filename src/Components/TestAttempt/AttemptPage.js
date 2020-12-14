
import React, { useEffect, useState } from 'react'
import { Alert, FormGroup } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Input, Label } from 'reactstrap'
import { useAuth } from '../../Contexts/Authcontext'
import "../../CSS/AttemtPage.css"
import { database } from '../../Utils/firebase'
import {Button} from "reactstrap"

export const AttemptPage = () => {

    const [questions, setQuestions] = useState()
    const [options, setOptions] = useState()
    var questionToBeDisplayed ;
    const [currentQuestionNo,setCurrentQuestionNo] = useState(0);
    const [selectedOption,setSelectedOption] = useState();
    

        


 const history =useHistory()


    useEffect(() => {
        const startDate = new Date()
        const questions = [];
        var options = []
        
        

        if(!(localStorage.a)){

            localStorage.a = startDate
            
        }
        



        database.collection("Questions").doc(localStorage.QuestionId).collection("Question").get().then(
            snap => {
                snap.docs.forEach( doc => {
                    questions.push(doc.data().Question)
                    options.push(doc.data().Options)
                    
                })
                
            setQuestions(questions)
            setOptions(options)
            }
        )

    }, [])

        if(questions) questionToBeDisplayed = questions[currentQuestionNo];
        if(options) var optionsToBeDisplayed = options[currentQuestionNo];
        
        
    const timer = setInterval(() => {
        var endDate = new Date()
        var seconds = (Date.parse(endDate) - Date.parse(localStorage.a))/1000
        var minutes = Math.floor(seconds/60)
        document.getElementById("countdown").innerHTML = minutes + "  :  " + seconds%60;
        if(minutes === 180){
            clearInterval(timer);
            localStorage.removeItem("a");
            history.push('/testcomplete')
        }

        
    },1000)


    
    return (
        <div className="row Row">
            <div className=" left-col col-8 mt-5 mb-5">
                <div className="userCred border">
                    user cred
                </div>
                <div className="qDisplay border">
                    <div className="Group">
                    {questionToBeDisplayed && questionToBeDisplayed}
                    <br></br>
                    <br></br>
                    <br></br>
                    {optionsToBeDisplayed && optionsToBeDisplayed.map( e => (
                        <Button color="light" className = "mb-4 "onClick={() => {
                            setSelectedOption(e)
                        }} active={selectedOption === e}>{e} </Button>
                    ))}
                    </div>
                </div>
                <div className="btnsGroup">
                    <div className="btn btn-success mr-3" onClick={() => {
                        clearInterval(timer);
                        localStorage.removeItem('a')
                        history.push('/testcomplete')
                    }}>Submit</div>
                    <div className="btn btn-success mr-3" onClick ={() => {
                        var value = currentQuestionNo + 1;
                        setCurrentQuestionNo(value)
                        var obj = JSON.parse(localStorage.selecAns);
                        obj[value] = selectedOption;
                        localStorage.selecAns = JSON.stringify(obj)
                    
                        
                        
                    
                    }}>Save and Next</div>
                    <div className="btn btn-success mr-3" onClick= {() => {
                            var value = currentQuestionNo - 1;
                            setCurrentQuestionNo(value)
                    }}>Previous</div>
                    <div className="btn btn-success mr-3" onClick={() => {
                        clearInterval(timer);
                        localStorage.removeItem("a");
                        localStorage.removeItem("QuestionId")
                        localStorage.removeItem("selecAns")
                        history.push('/testlist')
                    }}>Abort</div>
                </div>
            </div>
            <div className="right-col col-4 mt-5 mb-5 ">
                <div className="timer text-dark border" id= "countdown">

                </div>
                <div className="qPalatte border ">
                    {questions && 
                    questions.map( (e,index) => {
                        return(
                            <Button className="mr-2 mt-3" onClick={() => {
                                setCurrentQuestionNo(index)
                            }}>{index+1}</Button>
                        )
                    })}
                </div>
            
            </div>
        
        </div>
    )


}
