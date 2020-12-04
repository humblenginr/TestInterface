import React, { useContext, useEffect, useRef, useState } from 'react'
import { Alert, Button, Form, InputGroup, ListGroup, ListGroupItem } from 'react-bootstrap'
import "firebase/database"
import firebase from "firebase/app"
import "../../CSS/TodoList.css"
import {v4} from "uuid"
import { TodoContext } from '../../Contexts/TodoContext'
import { ADD_TO_DATABASE } from '../../Contexts/ACTION.TYPES'
import { useAuth } from '../../Contexts/Authcontext'
import { database } from '../../Utils/firebase'

export const TodoList = () => {
    const {currentUser} = useAuth()
    const user_input_todo = useRef();
    const {dispatch, todoList} = useContext(TodoContext)
    const [noValue, setNoValue] = useState(false)
    // const todoRef = firebase.database().ref().child(currentUser)



    //handle Submit
    const handleSubmit = (e) => {

        e.preventDefault();
        //Push the values to the state

    
        const todo = user_input_todo.current.value

        if(todo === ""){
            
            setNoValue(true)

        }
        else{
            setNoValue(false)

            const todoObject = {
                todo,
                id: v4()
            }
    
            dispatch({
                type: ADD_TO_DATABASE,
                payload : todoObject
            })

           
        }



    }


 


    return (
        <div className="todo-list  row">

                <div className="col-6 bg-primary text-white d-flex justify-content-center align-items-center">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="m-3">
                            <Form.Label>Enter the todo: </Form.Label>
                            <Form.Control className="formcont" ref={user_input_todo}></Form.Control>
                            {noValue && <Alert variant="danger">Please enter some todo</Alert>}
                        </Form.Group>
                        <Button className="btn-success ml-5" type="submit">ADD</Button>
                        
                    </Form>


                </div>
                <div className="col-6 todo-display ">
                    <ListGroup>
                    {/* {
                        todoRef.once('value', snap =>{
                            snap.map(todoObject => (
                                <ListGroupItem key={todoObject.id}>
                                    {todoObject.todo}
                                </ListGroupItem>
                            )

                        )
                            }

                        )
                    } */}
                    </ListGroup>
                </div>

        </div>
    )
}
