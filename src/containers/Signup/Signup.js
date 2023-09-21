import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase"

const auth = getAuth(app)

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then(value => alert("success"));
    }

    return (
        <div className='signup-page'>
            <label for="">Email</label>
            <input
                type='email'
                required
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label for="">Password</label>
            <input
                type='email'
                required
                placeholder='Enter your Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={createUser}>Signup</button>
        </div>
    )
}

export default Signup
