import React from "react";
import styles from "./contoh.module.css";

export default function Contoh() {
  return (
    <>
      <button className={styles.btn}>Berubah</button>
      <button className={styles.btnSuccess}>Tetap</button>
      <button className={styles.btnSm}>Tetap</button>
    </>
  );
}
