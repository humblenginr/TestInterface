
import React, { useEffect, useState } from 'react'
import "../../CSS/AttemtPage.css"
import {gsap}  from "gsap"

export const AttemptPage = () => {


        

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
                <div className="timer text-dark border">
                        hello
                </div>
                <div className="qPalatte border ">
                    qPalatte
                </div>
            
            </div>
        
        </div>
    )
}
