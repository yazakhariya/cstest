import styles from "./page.module.css";
import TableComponent from "./components/table/TableComponent";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.head}>
          <div className={styles.header_text}>
            <h1>Next.js CRUD-table</h1>
          </div>
        </div>
        <TableComponent />
      </main>
    </div>
  );
}
