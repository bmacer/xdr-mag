import Image from "next/image";
import styles from "./page.module.css";
import Something from "./random-component";

export default function Home() {
  return (
    <main className={styles.main}>
      <Something />
    </main>
  );
}
