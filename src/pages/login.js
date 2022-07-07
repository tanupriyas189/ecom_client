import React, { useState } from "react";
import { login } from "../utils/api";
import styles from "./login.module.css";
import toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onLoad = (res) => {
    console.log(res);
    toast.success("Successfully logged in!");
  };

  const onSubmit = () => {
    const data = {
      email: email,
      password: password,
    };

    login(data, onLoad);
  };

  return (
    <div className={styles.page}>
      <div className={styles.form}>
        <div className={styles.title}>
          <h1>Hey missed you</h1>
          <h1>Welcome back</h1>
        </div>
        <h3>Login</h3>
        <input
          onChange={(item) => setEmail(item.target.value)}
          value={email}
          className={styles.email}
          type="text"
        />
        <h3>Email</h3>
        <input
          onChange={(item) => setPassword(item.target.value)}
          value={password}
          className={styles.password}
          type="password"
        />
        <button onClick={() => onSubmit()} className={styles.button}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
