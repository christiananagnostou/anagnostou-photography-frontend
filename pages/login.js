import Head from "next/head";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

import styles from "../styles/Login.module.css";

const login = () => {
  const [email, setEmail] = useState("");
  const { loginUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email);
  };

  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.jpg" />
        <meta name="description" content="Login here to make purchases" />
      </Head>

      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Welcome</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default login;
