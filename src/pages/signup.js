import React, { useState } from "react";
import { signup } from "../utils/api";
import styles from "./signup.module.css";
import toast from "react-hot-toast";
function Signup() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  const onLoad = (res) => {
    console.log(res);
    toast.success("Successfully Registered!");
  };
  const onSubmit = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    };
    signup(data, onLoad);
  };

  return (
    <div className={styles.page}>
      <div className={styles.form}>
        <div className={styles.title}>
          <h1>Hello</h1>
          <h1>Start a new Journey!</h1>
        </div>
        <h3>First Name</h3>
        <input
          type="text"
          onChange={(item) => setFirstName(item.target.value)}
          value={firstName}
        />
        <h3>Last Name</h3>
        <input
          type="text"
          onChange={(item) => setLastName(item.target.value)}
          value={lastName}
        />
        <h3>Email</h3>
        <input
          type="text"
          onChange={(item) => setEmail(item.target.value)}
          value={email}
        />
        <h3>Password</h3>
        <input
          type="password"
          onChange={(item) => setPassword(item.target.value)}
          value={password}
        />
        <h3>Confirm Password</h3>
        <input
          type="password"
          onChange={(item) => setPasswordConfirm(item.target.value)}
          value={passwordConfirm}
        />
        <button onClick={() => onSubmit()}>Register</button>
      </div>
    </div>
  );
}

export default Signup;
