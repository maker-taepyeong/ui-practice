import Link from "next/link";
import styles from "@/styles/pages/page.home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>uicatalog/</h1>
      <Link href="/modal">modal</Link>
    </main>
  );
}
