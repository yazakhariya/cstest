import styles from "./TableComponent.module.css";
import Image from "next/image";
import del from "@/app/assets/delete.svg";

export default function TableComponent() {
  const mockData = [
    {
      id: 1,
      name: "Jakson",
      text: "10%",
    },
    {
      id: 2,
      name: " Mark",
      text: "10%",
    },
  ];

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
          {mockData.map((el) => {
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
          })}
        </tbody>
      </table>
      <button className={styles.button}>Download</button>
    </div>
  );
}
