import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Contexts/Authcontext'
import { database } from '../../Utils/firebase'

export const AttemptedTests = () => {
    const {currentUser} = useAuth()
    const [attemptedTests, setAttemptedTests] = useState()
    useEffect(() => {
        
        database.collection(currentUser.uid).doc('AttemptedTests').get().then(
            snap => {
                setAttemptedTests(snap.data())
            }
        )
    },[])

    if(attemptedTests)     console.log(attemptedTests)

    return (
        <div>
            {attemptedTests && Object.keys(attemptedTests).map((e,index) => (
                <h3 id={index}>{e}</h3>
            ))}
            <br></br>
            <h1>Marks</h1>
            <br></br>
            {attemptedTests && Object.values(attemptedTests).map((e,index) => (
                <h3 id={index}>{e}</h3>
            ))}
        </div>
    )
}
