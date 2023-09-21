import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB5YNj2-ywftY9UAGagkKXK4nQkUuBIpuc",
    authDomain: "trackyourexpenses-e6701.firebaseapp.com",
    projectId: "trackyourexpenses-e6701",
    storageBucket: "trackyourexpenses-e6701.appspot.com",
    messagingSenderId: "522799629020",
    appId: "1:522799629020:web:7a5344cf6c5b62250aea19",
    databaseURL: "https://trackyourexpenses-e6701-default-rtdb.firebaseio.com"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp)

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = (props) => {

    const signupUserWithEnailAndPassword = (email, password) => {
        createUserWithEmailAndPassword(firebaseAuth, email, password).then(value => alert("success"));
    }

    const putData = (key, data) => {
        set(ref(database, key), data);
    }

    return (
        <FirebaseContext.Provider value={{ signupUserWithEnailAndPassword, putData }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}
