import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link, withRouter } from "react-router-dom";
import { useState } from 'react';
import firebase from './firebase';


const SignUp = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");


    return(
          <MuiThemeProvider>
            <React.Fragment>
            <AppBar title = "MY APP" />
                 <TextField
                 hintText = "Enter your name"
                 floatingLabelText = "Name"
                 onChange = {(event) => setName(event.target.value)}
                 />
                <br />
                 <TextField
                  hintText = "Enter your email"
                  floatingLabelText = "Email"
                  onChange = {(event) => setEmail(event.target.value)}
                 />
                 <br />
                 <TextField
                  hintText = "Enter your password"
                  floatingLabelText = "Password"
                  onChange = {(event) => setPassword(event.target.value)}
                 />
                 <br />
                 
              <button type = "submit" component = {Link} onClick = {SignUp}  >
              
                  Submit
              </button>
              
             
            </React.Fragment>
          </MuiThemeProvider>
 )
    async function SignUp(){
      try {
        await firebase.register(name, email,password)

        props.history.replace('/signin')
      }
      catch(error){
        alert(error.message)
      }
    }

}


export default withRouter(SignUp);