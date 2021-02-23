import styles from "../../styles/Gallery.module.css";
import Gallery from "../../components/Gallery";
import { API_URL } from "../../utils/urls";
import Meta from "../../partials/seo-meta";

const Album = ({ album }) => {
  return (
    <>
      <Meta
        title={`${album.name} - A Wild Christian`}
        desc={`${album.description}`}
        canonical={`https://awildchristian.com/albums${album.slug}`}
      />

      <div>
        <div className={styles.album_info}>
          <h2>{album.name}</h2>
          <p>{album.description}</p>
        </div>
        <Gallery products={album.products} />
      </div>
    </>
  );
};

export async function getStaticProps({ params: { album } }) {
  const album_res = await fetch(`${API_URL}/albums/?slug=${album}`);
  const found = await album_res.json();

  return { props: { album: found[0] } };
}

export async function getStaticPaths() {
  const album_res = await fetch(`${API_URL}/albums/`);
  const albums = await album_res.json();

  return {
    paths: albums.map((album) => ({
      params: { album: String(album.slug) },
    })),
    fallback: false,
  };
}

export default Album;
