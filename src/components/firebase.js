import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'


const config = {
    apiKey: "AIzaSyBNIwnaXbJCsRotL2Ohxy6Y4WryecX_-ks",
    authDomain: "first-app-95ff0.firebaseapp.com",
    databaseURL: "https://first-app-95ff0-default-rtdb.firebaseio.com",
    projectId: "first-app-95ff0",
    storageBucket: "first-app-95ff0.appspot.com",
    messagingSenderId: "85648231964",
    appId: "1:85648231964:web:a94da09d34ceb52387d9d9",
    measurementId: "G-QSECF3WS5C"
}

class Firebase {
    constructor(){
app.initializeApp(config)
this.auth = app.auth()
this.db = app.firestore()
}

signin(email, password){
    return this.auth.signInWithEmailAndPassword(email, password)
}

logOut (){
    return this.auth.signOut()
}

async register(name, email, password){
    await this.auth.createUserWithEmailAndPassword(email, password)
    return this.auth.currentUser.updateProfile({
        displayName: name
    })
}

isInitialized(){
    return new Promise(resolve => {
        this.auth.onAuthStateChanged(resolve)
    })
}

getCurrentUsername(){
    return this.auth.currentUser && this.auth.currentUser.displayName;
}

}

export default new Firebase()