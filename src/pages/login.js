import React, { useState } from "react";
import styles from "./login.module.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
          placeholder="Email"
        />
        <h3>Email</h3>
        <input
          onChange={(item) => setPassword(item.target.value)}
          value={password}
          className={styles.password}
          type="password"
          placeholder="Password"
        />
        <button
          onClick={() => console.log(email, " ", password)}
          className={styles.button}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
