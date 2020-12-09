
import React, { useEffect, useState } from 'react'
import { Alert, FormGroup } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Input, Label } from 'reactstrap'
import "../../CSS/AttemtPage.css"
import { database } from '../../Utils/firebase'
import { QuestionDisplay } from './QuestionDisplay'

export const AttemptPage = () => {

    const history =useHistory()



    useEffect(() => {
        const startDate = new Date()


        if(!(localStorage.a)){

            localStorage.a = startDate
            
        }



    }, [])





    

        
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
                     <QuestionDisplay></QuestionDisplay>

                    <div className="options">
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Option one
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Option two
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Option three
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Option four
                            </Label>
                        </FormGroup>
                    </div>
                </div>
                <div className="btnsGroup">
                    <div className="btn btn-success mr-3">Submit</div>
                    <div className="btn btn-success mr-3" id="next">Next</div>
                    <div className="btn btn-success mr-3">Previous</div>
                    <div className="btn btn-success mr-3" onClick={() => {
                        localStorage.removeItem("a");
                        clearInterval(timer)
                        history.push("/testlist")
                    }}>Abort</div>
                </div>
            </div>
            <div className="right-col col-4 mt-5 mb-5 ">
                <div className="timer text-dark border" id= "countdown">

                </div>
                <div className="qPalatte border ">
                    qPalatte
                </div>
            
            </div>
        
        </div>
    )
}
