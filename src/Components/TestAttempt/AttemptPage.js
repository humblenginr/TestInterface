
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import "../../CSS/AttemtPage.css"

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
                    qDisplay
                </div>
                <div className="btnsGroup">
                    <div className="btn btn-success mr-3">Submit</div>
                    <div className="btn btn-success mr-3">Next</div>
                    <div className="btn btn-success mr-3">Previous</div>
                    <div className="btn btn-success mr-3">Abort</div>
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
