import styles from "../styles/Gallery.module.css";
import { InViewImage } from "./InViewImage";

const Gallery = ({ products }) => {
  return (
    <div className={styles.product_container}>
      {products.map((product) => (
        <div className={styles.product} key={product.name}>
          <InViewImage
            image={product.image}
            href={`/products/${product.slug}`}
            imageStyles={styles.product_img}
            threshold={0.1}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
