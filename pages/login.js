import { useContext, useState } from "react";

import Meta from "../partials/seo-meta";
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
      <Meta
        title="Login - A Wild Christian"
        desc="Login to A Wild Christian. View and purchase prints of Christian Anagnostou's favorite photographs."
        canonical="https://awildchristian.com/login"
      />

      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Welcome</h2>
        <h4>
          After entering your email, open your inbox to access the one-time-use sign in link. This
          "magic link" is a secure way to authenticate and identify yourself as a valid user
        </h4>
        <div className={styles.form_group}>
          <label htmlFor="email">Email Address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default login;
