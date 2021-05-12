import React, { useState } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { Link , withRouter} from "react-router-dom";
import firebase from './firebase';

const SignIn = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signInWithEmailAndPasswordHandler = 
            (event,email, password) => {
                event.preventDefault();
    };

    
    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if(name === 'userEmail') {
            setEmail(value);
        }
        else if(name === 'userPassword'){
          setPassword(value);
        }
    };
  
      return(
         <MuiThemeProvider>
             <React.Fragment>
                 <AppBar title = "MY APP" />
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
                               
            <button type= "submit" component={Link} onClick = {signin}  >
                        Log In
                    </button>
                

                 <br />

                <h5>Don't have an account?</h5>
                    <Link to = "/signup"> SignUp</Link>
                
             </React.Fragment>
         </MuiThemeProvider>
      )

      async function signin(){
          try{
              await firebase.signin(email,password)
              props.history.replace('/success');
          }
          catch(error){
              alert(error.message)
          }
      }
  }




export default withRouter(SignIn);