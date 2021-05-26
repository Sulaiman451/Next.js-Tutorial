import Head from "next/head";
import Image from "next/image";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        Ullamco officia cillum reprehenderit minim. Ullamco ad elit ad aliqua ex
        excepteur enim et aliqua do est. Proident ad elit quis enim do mollit
        minim pariatur.
      </p>
      <p>
        Ullamco officia cillum reprehenderit minim. Ullamco ad elit ad aliqua ex
        excepteur enim et aliqua do est. Proident ad elit quis enim do mollit
        minim pariatur.
      </p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  );
}
