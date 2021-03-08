import { useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

import { fromImageToUrl, API_URL } from "../../utils/urls";
import { twoDecimals } from "../../utils/format";
import BuyButton from "../../components/BuyButton";
import styles from "../../styles/Product.module.css";
import Meta from "../../partials/seo-meta";

const Product = ({ product }) => {
  const [showInfo, setShowInfo] = useState(false);
  const toggleShowInfo = () => {
    setShowInfo(!showInfo);
  };

  const info = () => {
    return (
      <>
        <p>Total paper size 8”x12”, unframed.</p>
        <p>
          Printed on premium lustre photo paper 255 gsm with Epson ultra chrome k3 inks. They are
          archival and will last up to 75 years.
        </p>
        <p>All orders will be shipped within 7 business days of the order date.</p>
        <p className={styles.note}>
          **Prints will be flat packed within North America. International orders are rolled in a
          mailing tube**
        </p>
      </>
    );
  };

  return (
    <div className={styles.product}>
      <Meta
        title={`${product.meta_title} - A Wild Christian`}
        desc={`${product.meta_description} View and purchase ${product.meta_title}.`}
        canonical={`https://awildchristian.com/products/${product.slug}`}
        image={fromImageToUrl(product.image)}
      />

      <img src={fromImageToUrl(product.image)} alt={product.name} className={styles.image} />
      <div className={styles.product_info}>
        <h3 className={styles.image_name}>{product.name}</h3>
        {product.meta_description && (
          <p className={styles.image_description}>- {product.meta_description}</p>
        )}
        {showInfo ? (
          <>
            <button className={styles.toggle} onClick={toggleShowInfo}>
              CLOSE <BiUpArrow />
            </button>
            {info()}
          </>
        ) : (
          <button className={styles.toggle} onClick={toggleShowInfo}>
            ORDER INFO <BiDownArrow />
          </button>
        )}
        <p className={styles.price}>
          ${twoDecimals(product.price)} <BuyButton product={product} />
        </p>
      </div>
    </div>
  );
};

export async function getStaticProps({ params: { product } }) {
  const product_res = await fetch(`${API_URL}/products/?slug=${product}`);
  const found = await product_res.json();

  return { props: { product: found[0] } };
}

export async function getStaticPaths() {
  const product_res = await fetch(`${API_URL}/products/`);
  const products = await product_res.json();

  return {
    paths: products.map((product) => ({
      params: { product: String(product.slug) },
    })),
    fallback: false, // Show 404 if the param is not matched
  };
}

export default Product;
