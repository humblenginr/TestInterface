import "../../CSS/Welcome.css"
import React from 'react'
import { useAuth } from '../../Contexts/Authcontext'

import "firebase/auth"



export const WelcomePage = () => {


    const {currentUser} = useAuth()



    return (
        <div className="welcomepage">

            <span className="welcome-text">Welcome,<br></br> {currentUser.displayName}</span>
            <span className="body-text">Lets make learning fun</span>

        </div>
    )
}
