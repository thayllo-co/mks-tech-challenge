import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import styles from "./page.module.scss";

const Home = () => {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.content}>
        <ProductGrid />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
