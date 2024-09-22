import styles from "./page.module.css";
import Image from "next/image";
import logo from "./logo.svg";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.head}>
          <div className={styles.header_text}>
            <h1>Тестовое задание</h1>
            <h3>Frontend-разработчик: Захария Яна Владимировна</h3>
          </div>
          <Image src={logo} alt={"Page logo"} />
        </div>
      </main>
    </div>
  );
}
