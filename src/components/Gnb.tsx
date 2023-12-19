import React from "react";
import Link from "next/link";
import styles from "@/components/Gnb.module.css";

export default function Gnb() {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <h1>UI Catalog</h1>
      </Link>
    </nav>
  );
}
