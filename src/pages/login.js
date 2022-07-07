import React from "react";
import styles from "./login.module.css";

function Login() {
  return (
    <div className={styles.page}>
      <div className={styles.form}>
        <div className={styles.title}>
          <h1>Hey missed you</h1>
          <h1>Welcome back</h1>
        </div>
        <h3>Login</h3>
        <input className={styles.email} type="text" placeholder="Email" />
        <h3>Email</h3>
        <input
          className={styles.password}
          type="password"
          placeholder="Password"
        />
        <button className={styles.button}>Login</button>
      </div>
    </div>
  );
}

export default Login;
