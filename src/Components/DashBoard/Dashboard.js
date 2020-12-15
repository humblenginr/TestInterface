import React,{useEffect, useRef, useState} from 'react'
import {  Alert, Col, Row, Card, Modal, Button, Form, InputGroup, FormControl } from 'react-bootstrap'
import {useHistory } from 'react-router-dom'

import { useAuth } from '../../Contexts/Authcontext'
import { database } from '../../Utils/firebase'
import { Footer } from './Footer'
import { Navbar1 } from './Navbar1'
import { TestColumn } from './TestColumn'
import { TodoList } from './TodoList'
import { WelcomePage } from './WelcomePage'

export const Dashboard = () => {
    const {logout, currentUser} = useAuth()
    const [error, setError] = useState('')
    const history = useHistory()
    const [show, setShow] = useState(false);
    const formctrlref = useRef();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        if(!currentUser.displayName) handleShow()
    },[])

    function addName(name){
        console.log("code reached");
        currentUser.updateProfile({
            displayName: name
        }).then(() => {
            setShow(false);
        })
        
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose}>

                <Modal.Body>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Name</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl ref={formctrlref}></FormControl>    
                            </InputGroup>

                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => addName(formctrlref.current.value)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>


            <Navbar1></Navbar1>
            {error && <Alert variant="danger">{error}</Alert>}
            <WelcomePage></WelcomePage>
            <TestColumn></TestColumn>
            <TodoList></TodoList>  
            <Footer></Footer>
            
        </div>
    )
}
