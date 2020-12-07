import React from 'react';
import {TodoProvider} from "../Contexts/TodoContext"
import "bootstrap/dist/css/bootstrap.min.css"
import SignUp from './SignUp';
import { AuthProvider } from '../Contexts/Authcontext';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard } from './DashBoard/Dashboard';
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import { TestList } from './TestAttempt/TestList';
import { AttemptPage } from './TestAttempt/AttemptPage';



const App = () => {
  return (     
            <Router>
              <AuthProvider>
                <TodoProvider>
                    <Switch>
                      <Route path="/signup" component={SignUp}/>
                      <PrivateRoute exact path="/" component={Dashboard}/>
                      <Route path="/login" component={Login}/>
                      <Route path="/testlist" component={TestList}/>
                      <Route path="/testattempt" component={AttemptPage}/>
                    </Switch>  
                </TodoProvider>             
              </AuthProvider>
            </Router>
  )
}

export default App;