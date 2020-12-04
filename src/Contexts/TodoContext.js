import { Reducer } from "./Reducer";
import firebase from "firebase/app"
import "firebase/database"
import { useAuth } from "./Authcontext";
const { createContext, useState, useContext, useReducer } = require("react");

export const TodoContext = createContext();

export const TodoProvider = (props) =>{

    const [todoList, dispatch] = useReducer(Reducer, [])
    const {currentUser} = useAuth()
    
    return(
        <TodoContext.Provider value ={{todoList, dispatch, currentUser}}>
            {props.children}
        </TodoContext.Provider>
    )
}