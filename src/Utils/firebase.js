import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyBEFDAHdH_y3qWiOs2kJmeFcdkbYyNPwVQ",
    authDomain: "testinterface-66c6a.firebaseapp.com",
    databaseURL: "https://testinterface-66c6a.firebaseio.com",
    projectId: "testinterface-66c6a",
    storageBucket: "testinterface-66c6a.appspot.com",
    messagingSenderId: "602033906897",
    appId: "1:602033906897:web:6811e2a36cf01f3ffa51f0",
    measurementId: "G-JZ752R6WRW"
}

export const config = firebase.initializeApp(firebaseConfig)
export const auth = config.auth()
export const database = firebase.firestore()

database.settings({timeStampsInSnapshots: true})

