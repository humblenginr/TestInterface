import { Reducer } from "./Reducer";
import firebase from "firebase/app"
import "firebase/database"
import { useAuth } from "./Authcontext";
import { database } from "../Utils/firebase";
const { createContext, useState, useContext, useReducer, useEffect } = require("react");

export const TodoContext = createContext();

export const TodoProvider = (props) =>{

    const [todoList, dispatch] = useReducer(Reducer, [])
    const {currentUser} = useAuth()

    useEffect(() => {
        todoList.forEach(obj => {
            database.collection(currentUser.uid).add(obj)
        })
    },[todoList, currentUser.uid])
    
    return(
        <TodoContext.Provider value ={{todoList, dispatch, currentUser}}>
            {props.children}
        </TodoContext.Provider>
    )
}