import Head from "next/head";
import Image from "next/image";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Ullamco officia cillum reprehenderit minim. Ullamco ad elit ad aliqua
          ex excepteur enim et aliqua do est. Proident ad elit quis enim do
          mollit minim pariatur.
        </p>
        <p className={styles.text}>
          Ullamco officia cillum reprehenderit minim. Ullamco ad elit ad aliqua
          ex excepteur enim et aliqua do est. Proident ad elit quis enim do
          mollit minim pariatur.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
