import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import Providers from "@/store/Providers";
import styles from "./page.module.scss";

const Home = () => {
  return (
    <Providers>
      <main className={styles.main}>
        <Header />
        <section className={styles.content}>
          <ProductGrid />
        </section>
        <Footer />
      </main>
    </Providers>
  );
};

export default Home;
