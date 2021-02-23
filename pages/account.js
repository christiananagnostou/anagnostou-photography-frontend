import { useContext } from "react";
import Link from "next/link";

import styles from "../styles/Account.module.css";
import AuthContext from "../context/AuthContext";
import { useOrders } from "../hooks";
import Meta from "../partials/seo-meta";

const account = () => {
  const { user, logoutUser, getToken } = useContext(AuthContext);

  const { orders, loading } = useOrders(user, getToken);

  if (!user) {
    return (
      <>
        <Meta
          title="Your Account"
          desc="Please login or register."
          canonical="https://awildchristian.com/account"
        />
        <div className={styles.account_container}>
          <p>Please login or register</p>
          <Link href="/">
            <a>Go Back</a>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Meta
        title="Your Account"
        desc="Your account page to review your orders."
        canonical="https://awildchristian.com/account"
      />

      <main className={styles.account_container}>
        <h1>Your Orders</h1>

        <table className={styles.table}>
          <tr>
            <th>Date</th>
            <th>Photo</th>
            <th>Total</th>
            <th>Status</th>
          </tr>

          {loading && <tr>Loading orders...</tr>}

          {orders.map((order) => (
            <tr className={styles.order} key={order.id}>
              <td>{new Date(order.created_at).toLocaleDateString("en-US")}</td>
              <td>
                <Link href={`/products/${order.product.slug}`}>
                  <a>{order.product.name}</a>
                </Link>
              </td>
              <td>${order.total}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </table>

        <div className={styles.user_controls}>
          <p>Logged in as: {user.email}</p>
          <a href="#" onClick={logoutUser} className={styles.logout}>
            Logout
          </a>
        </div>
      </main>
    </>
  );
};

export default account;
