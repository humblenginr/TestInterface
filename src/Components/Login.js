import React, { useContext, useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../Contexts/Authcontext"
import "../CSS/Login.css"


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const {login, currentUser} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()


    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to login")
    }

    setLoading(false)
  }

  return (

      <div className="containers" onclick="onclick">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="center">
          <h2 className="mb-3">Sign In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {/* custom input form starts */}
          <input type="email" placeholder="email" ref={emailRef} className="mb-2"/>
          {/* custom input form ends */}
          <input type="password" placeholder="password" ref={passwordRef} className="mb-2"/>
          <h2>&nbsp;</h2>

          {/* custom css button */}
          <div class="button_cont" align="center" >
            <a className="signInButton" onClick={handleSubmit}>Sign In</a>
          </div>
          {/* custom css button ends */}
          <span className="spn mt-3">New user? <Link to="/signup">Sign Up</Link></span>
        </div>
      </div>
  )
}