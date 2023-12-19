import Link from "next/link";
import styles from "@/styles/pages/home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>menu</h1>
      <ul>
        <li>
          <Link href="/accordion">accordion</Link>
        </li>
        <li>
          <Link href="/modal">modal</Link>
        </li>
      </ul>
    </main>
  );
}
