import React, { useState } from 'react';
import { signInWithEmailAndPassword,getAuth } from 'firebase/auth';
import "@/firebase"
import styles from "@/styles/signIn.module.css"

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn =(e)=>{
    e.preventDefault(); 
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email,password)
    .then((userCredential) => {
        console.log(userCredential);
    }).catch((error)=>{
        console.log(error)
    })
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSignIn}>
        <h1>Log In</h1>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type='submit'>Log In</button>
      </form>
    </div>
  );
};

export default SignIn;