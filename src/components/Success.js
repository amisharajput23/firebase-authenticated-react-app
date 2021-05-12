import React, {useState } from 'react';
import { AppBar } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import FlatButton from 'material-ui/FlatButton';
import { Link, withRouter } from "react-router-dom";
import firebase from './firebase';

const Success = (props) => {
     if (!firebase.getCurrentUsername()){
        alert('Please signin first')
        props.history.replace('/signin')
        return null
    }
   
      
        const buttonStyle = {
            color: 'white'
        }
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "MY APP" >
                    <FlatButton key={1} label="Dashboard" style={buttonStyle}/>
                    <br />
                    <Link to = "/signin" >
 <FlatButton key={2} label="LogOut" style={buttonStyle}/>            
 </Link>
                    </AppBar>
                    
                    <h1>WELCOME,{firebase.getCurrentUsername()} </h1>
                </React.Fragment>
            </MuiThemeProvider>
        )
    
        }


export default withRouter(Success);