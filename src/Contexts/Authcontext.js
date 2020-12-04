import React, {  useContext, useEffect, useState } from 'react'
import {auth, database} from "../Utils/firebase"


const Authcontext = React.createContext();

//exporting context
export const useAuth =  () => {
    return useContext(Authcontext)
}


//exporting the provider
export function  AuthProvider ({children}) {

    
    const [loading, setLoading] = useState(true)


    //signup through firebase
    function signup (email, password) {
       return auth.createUserWithEmailAndPassword(email, password)
    }

    //login through firebase
    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    //logout through firebase
    const logout = () => {
        return auth.signOut()
    }

    //setting the user
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    //update profile method
            // TODO:complete this method!
            
    //update profile method ends 
   
    //defining state
    const [currentUser, setCurrentUser] = useState();
    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    



    return (
        <Authcontext.Provider value={value}>
            {!loading && children}
        </Authcontext.Provider>
    )
}
