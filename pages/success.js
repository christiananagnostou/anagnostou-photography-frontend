import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { API_URL } from "../utils/urls";
import styles from "../styles/Account.module.css";

const useOrder = (session_id) => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}/orders/confirm`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ checkout_session: session_id }),
        });
        const data = await res.json();
        setOrder(data);
      } catch (e) {
        setOrder(null);
      }
      setLoading(false);
    };

    fetchOrder();
  }, [session_id]);

  return { order, loading };
};

const Success = () => {
  const router = useRouter();
  const { session_id } = router.query;

  const { order, loading } = useOrder(session_id);

  return (
    <div className={styles.account_container}>
      <Head>
        <title>Thank you for your purchase</title>
        <meta name="description" content="Thank you for your purchase" />
      </Head>
      <h1>Great choice!</h1>
      <p>
        I want to personally thank you for supporting me by purchasing one of my photographs. I
        truly hope you enjoy your one-of-a-kind print.
      </p>
      {loading && <p>Loading...</p>}
      {order && <h5>Your order confirmation number: {order.id}</h5>}
    </div>
  );
};

export default Success;
