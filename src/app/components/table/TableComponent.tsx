import styles from "./TableComponent.module.css";
import Image from "next/image";
import del from "@/app/assets/delete.svg";

async function getDocs() {
    const res = await fetch('http://127.0.0.1:8090/api/', { cache: 'no-store' });
    const data = await res.json();
    return data
}
export default async function TableComponent() {
  const files = await getDocs();
  console.log(files)


  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.header}>Data</th>
            <th className={styles.header}>File</th>
            <th className={styles.header}>Text</th>
            <th className={styles.header}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.buttonCreate}>
              <button className={styles.button}>Create</button>
            </td>
          </tr>
          {/* {files?.map((el) => {
            return (
              <tr key={el.id}>
                <td className={styles.body}>{el.name}</td>
                <td className={styles.body}>{el.name}</td>
                <td className={styles.body}>{el.text}</td>
                <td className={styles.body}>
                  <button className={styles.deleteButton}>
                    <Image width={30} src={del} alt={"Delete button"} />
                  </button>
                </td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
      <button className={styles.button}>Download</button>
    </div>
  );
}
