import { useContext } from "react";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";

import styles from "../styles/BuyButton.module.css";
import AuthContext from "../context/AuthContext";
import { STRIPE_PK, API_URL } from "../utils/urls";

// Create Stripe object
const stripePromise = loadStripe(STRIPE_PK);

const BuyButton = ({ product }) => {
  const { user, getToken } = useContext(AuthContext);
  const router = useRouter();

  const redirectToLogin = () => {
    router.push("/login");
  };

  const handleBuy = async (e) => {
    const stripe = await stripePromise;
    console.log(stripe);
    const token = await getToken();
    console.log("handleBuy token", token);

    e.preventDefault();

    const res = await fetch(`${API_URL}/orders/`, {
      method: "POST",
      body: JSON.stringify({ product }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const session = await res.json();
    console.log("session", session);

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  };

  return (
    <>
      {!user && (
        <button className={styles.buy} onClick={redirectToLogin}>
          Login to buy
        </button>
      )}
      {user && (
        <button className={styles.buy} onClick={handleBuy}>
          BUY
        </button>
      )}
    </>
  );
};

export default BuyButton;
