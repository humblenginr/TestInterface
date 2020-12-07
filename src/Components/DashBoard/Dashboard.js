import React,{useState} from 'react'
import {  Alert, Col, Row, Card } from 'react-bootstrap'
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


    return (
        <div>
            <Navbar1></Navbar1>
            {error && <Alert variant="danger">{error}</Alert>}
            <WelcomePage></WelcomePage>
            <TestColumn></TestColumn>
            <TodoList></TodoList>  
            <Footer></Footer>
            
        </div>
    )
}
