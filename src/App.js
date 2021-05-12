import React, {useState, useEffect } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import SignIn from './components/Signin';
import './App.css';
import SignUp from "./components/SignUp";
import Success from "./components/Success";
import { CircularProgress } from '@material-ui/core'
import firebase from './components/firebase'

function App() {

const [firebaseInitialized, setFirebaseInitialized] = useState(false)

useEffect(() => {
    firebase.isInitialized().then(val => {
        setFirebaseInitialized(val)
    })
})

  return firebaseInitialized !== false ? (
    <div className="App">
     <Router>
        <Switch>
            <Route path= "/" exact={true}>
                <Redirect to="/signin" push={true}/>
            </Route>
            <Route path = "/signin" exact={true}>
                <SignIn />
            </Route>
            <Route path = "/signup" exact={true}>
                <SignUp />
            </Route>
            <Route path = "/success" exact={true}>
                <Success />
            </Route>
        </Switch>
     </Router>
    </div>
  ) : <div id = "loader"><CircularProgress /></div>
}

export default App;
