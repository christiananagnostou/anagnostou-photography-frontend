import styles from "../styles/Gallery.module.css";
import { API_URL } from "../utils/urls";
import { InViewImage } from "../components/InViewImage";
import Meta from "../partials/seo-meta";

const albums = ({ albums }) => {
  return (
    <>
      <Meta
        title="Albums - A Wild Christian"
        desc="All albums on A Wild Christian. View and purchase prints of Christian Anagnostou's favorite photographs."
        canonical="https://awildchristian.com/albums"
      />
      <div className={styles.product_container}>
        {albums.map((album) => (
          <div className={styles.album} key={album.name}>
            <InViewImage
              image={album.products[0].image}
              href={`/albums/${album.slug}`}
              imageStyles={styles.product_img}
              threshold={0.2}
            >
              <p className={styles.album_name}>{album.name}</p>
            </InViewImage>
          </div>
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const album_res = await fetch(`${API_URL}/albums/`);
  const albums = await album_res.json();

  return { props: { albums: albums.reverse() } };
}

export default albums;
