
// react imports 
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Alert, Button, Form, ListGroup, ListGroupItem } from 'react-bootstrap'

// firebase imports
import "firebase/database"
import { database } from '../../Utils/firebase'
import { useAuth } from '../../Contexts/Authcontext'

// CSS import
import "../../CSS/TodoList.css"

// context import
import { TodoContext } from '../../Contexts/TodoContext'


import {v4} from "uuid"
import { ADD_TO_DATABASE } from '../../Contexts/ACTION.TYPES'




export const TodoList = () => {


    const {currentUser} = useAuth();
    const user_input_todo = useRef();
    const {dispatch, todoList, render} = useContext(TodoContext)
    const [noValue, setNoValue] = useState(false)
    const [ todos, setTodos ] = useState()
    const [renderMe,setRenderMe] = useState(false)




    React.useEffect(() => {
        var data = []
        database.collection(currentUser.uid).where("typ", "==", "todo").get()
            .then(snap => {
                snap.docs.forEach(e => {
                    data.push(e.data())
                })
                setTodos(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [renderMe])


    const handleSubmit = (e) => {

        e.preventDefault();
        renderMe ? setRenderMe(false) : setRenderMe(true)

        const todo = user_input_todo.current.value

        if(todo === ""){   
            setNoValue(true)
        }
        else{
            setNoValue(false)

            const todoObject = {
                todo,
                id: v4(),
                typ: "todo"
            }

            //dispatching to the reducer
            dispatch({
                type: ADD_TO_DATABASE,
                payload : todoObject
            })  
        }
    }

        const Listgroup = document.getElementById("list")
        if(Listgroup!==null){
            Listgroup.addEventListener("click", (listItem => {

                database.collection(currentUser.uid).get().then(snap => {
                    snap.docs.forEach(doc => {
                        if(listItem.target.id === doc.data().id){
                            database.collection(currentUser.uid).doc(doc.id).delete()
                        }
                    })
                    renderMe ? setRenderMe(false) : setRenderMe(true)
                })
            }))

          
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
                    <ListGroup id = "list">
                        {todos && todos.map((item) => 
                            <ListGroupItem id={item.id}>
                                {item.todo}
                            </ListGroupItem>
                        )}
                    </ListGroup>
                </div>

        </div>
    )
}
