import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import styles from "./page.module.scss";

const Home = () => {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.content}>
        <h1 className={styles.text}>Hello Next!</h1>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
