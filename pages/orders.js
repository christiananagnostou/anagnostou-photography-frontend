import { useContext } from "react";
import Link from "next/link";

import styles from "../styles/Orders.module.css";
import AuthContext from "../context/AuthContext";
import { useOrders } from "../hooks";
import Meta from "../partials/seo-meta";
import ButtonLink from "../components/ButtonLink";
import Circle from "../components/SVGs/Circle";

const orders = () => {
  const { user, logoutUser, getToken } = useContext(AuthContext);

  const { orders, loading } = useOrders(user, getToken);

  if (!user) {
    return (
      <>
        <Meta
          title="Your Orders - A Wild Christian"
          desc="Your account page to review your orders."
          canonical="https://awildchristian.com/orders"
        />

        <div className={styles.orders_container}>
          <h1>Please login to view your orders</h1>
          <div className={styles.button}>
            <ButtonLink route="/" color="orange" text="GO BACK" />
          </div>
        </div>

        <Circle styles={styles.circle} />
      </>
    );
  }

  return (
    <>
      <Meta
        title="Your Orders - A Wild Christian"
        desc="Your account page to review your orders."
        canonical="https://awildchristian.com/orders"
      />

      <main className={styles.orders_container}>
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
              <Link href={`/products/${order.product.slug}`}>
                <td className={styles.product_link}>
                  <a>{order.product.name}</a>
                </td>
              </Link>
              <td>${order.total}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </table>

        <div className={styles.user_controls}>
          <p>Logged in as: {user.email}</p>
          <div onClick={logoutUser} className={styles.button}>
            <ButtonLink text="LOGOUT" color="blue" route="#" />
          </div>
        </div>
      </main>

      <Circle styles={styles.circle} />
    </>
  );
};

export default orders;
