import React, {useContext, useState} from 'react'
import { Nav, NavDropdown, NavLink, Navbar, Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { useAuth } from '../../Contexts/Authcontext';
import "../../CSS/Navbar.css"



export const Navbar1 = () => {

    const [error, setError] = useState("")
    const history = useHistory()
    const {logout} = useAuth()

        //handling logout
        async function handleLogout () {
            setError("")
            
            try{
               
                await logout()
                history.push("/login")
    
            }catch{
                setError("Unable to log Out!")
            }
        }


    return (
        <Navbar className="navBar" fixed="top">
            <Navbar.Brand href="#home" className="text-white">Test Interface</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse >
                <Navbar.Text >
                    <Button className="btn-danger button" onClick={handleLogout}>Log out</Button>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

