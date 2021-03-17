import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

import "../styles/globals.css";
import { AuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const onExcludedPage = router.pathname === "/";

  return (
    <AuthProvider>
      <content>
        {!onExcludedPage && <Header />}
        <Component {...pageProps} />
        {!onExcludedPage && <Footer />}
      </content>
    </AuthProvider>
  );
}

export default MyApp;
