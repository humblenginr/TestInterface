import { Reducer } from "./Reducer";
import firebase from "firebase/app"
import "firebase/database"
import { useAuth } from "./Authcontext";
import { database } from "../Utils/firebase";
import { ADD_TO_DATABASE } from "./ACTION.TYPES";
const { createContext, useState, useContext, useReducer, useEffect } = require("react");

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