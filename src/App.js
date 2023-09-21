import React from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
import Signup from './containers/Signup/Signup';
import { useFirebase } from './context/Firebase';

const db = getDatabase(app);

const App = () => {

  const firebase = useFirebase();

  console.log(firebase);
  const putData = () => {
    set(ref(db, "users/jay"), {
      id: 1,
      name: "Jay",
      age: 21,
    });
  }
  return (
    <div>
      Track Your Expenses

      <button onClick={putData}>Put Data</button>

      <Signup />
    </div>
  )
}

export default App
