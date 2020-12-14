import React,{useEffect, useState} from 'react'
import {  Alert, Col, Row, Card, Modal, Button } from 'react-bootstrap'
import {useHistory } from 'react-router-dom'

import { useAuth } from '../../Contexts/Authcontext'
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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        if(!currentUser.displayName) handleShow()
    },[])
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Your name</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
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
