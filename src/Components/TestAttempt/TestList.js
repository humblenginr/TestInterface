import React, { useEffect } from 'react'
import "../../CSS/testList.css"

export const TestList = () => {
    useEffect(() => {
        const links = document.getElementsByClassName("links")
        for (let i = 0; i < 7; i++) {
            links[i].addEventListener("click", () => {
                localStorage.removeItem("a")
                localStorage.qno = JSON.stringify(1);
            })
            
        }
    },[])
    
    return (
        <div className="main d-flex justify-content-center align-items-center border vh-100" >
            <div className="testList text-white">
                <div className="group">
                    <div>TestName</div>
                    <a href="/testattempt" className= "links btn-success"> Attempt</a>
                </div>
                <div className="group mt-5">
                    <div>TestName</div>
                    <a href="/testattempt" className= "links btn-success"> Attempt</a>
                </div>
                <div className="group mt-5">
                    <div>TestName</div>
                    <a href="/testattempt" className= "links btn-success"> Attempt</a>
                </div>
                <div className="group mt-5">
                    <div>TestName</div>
                    <a href="/testattempt" className="links btn-success"> Attempt</a>
                    </div>
                <div className="group mt-5">
                    <div>TestName</div>
                    <a href="/testattempt" className= "links btn-success"> Attempt</a>
                </div>
                <div className="group mt-5">
                    <div>TestName</div>
                    <a href="/testattempt" className= "links btn-success"> Attempt</a>
                </div>
                <div className="group mt-5 md-5">
                    <div>TestName</div>
                    <a href="/testattempt" className= "links btn-success"> Attempt</a>
                </div>
                
            </div>
            
        </div>
    )
}
