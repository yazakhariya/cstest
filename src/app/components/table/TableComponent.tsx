"use client"

import { getItems } from "../../../../api";
import styles from "./TableComponent.module.css";
import Image from "next/image";
import del from "@/app/assets/delete.svg";
import { useState } from "react";

interface IElem {
  name: string;
  date: number;
  text: string;
  id: number;
}

export default async function TableComponent() {
  const [openModal, setModalOpen] = useState<boolean>(false)
  const files = await getItems();

  const handleCtreateItem = () => {
    setModalOpen(true)
  }

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
              <button onClick={() => handleCtreateItem()} className={styles.button}>Create</button>
              {modalOpen === "true" ? <TableModal openModal={openModal} setModalOpen={setModalOpen} /> : null}
            </td>
          </tr>
          {files?.map((el: IElem) => {
            return (
              <tr key={el.id}>
                <td className={styles.body}>{el.name}</td>
                <td className={styles.body}>{el.date}</td>
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
