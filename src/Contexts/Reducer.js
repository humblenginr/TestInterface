


import { database } from "../Utils/firebase";
import  { ADD_TO_DATABASE, REMOVE_FROM_DATABASE } from "./ACTION.TYPES"
import { useAuth } from "./Authcontext";



export const Reducer = (state, action) => {

    const {currentUser} = useAuth();


   switch (action.type) {
       case ADD_TO_DATABASE:
           database.collection(currentUser.uid).add({Todo: action.payload.todo,
                                                    TodoId: action.payload.id})
         break;


        case REMOVE_FROM_DATABASE:
            return state.filter(todo => todo.id !== action.payload
            )


       default:
           return state;
   }
}