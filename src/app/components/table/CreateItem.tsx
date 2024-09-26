"use client";
import { useState } from "react";
import styles from "./CreateItem.module.css";
import TableModal from "./TableModal";

export default function CreateItem() {
  const [openModal, setModalOpen] = useState<boolean>(false);

  const handleCreateItem = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <button onClick={() => handleCreateItem()} className={styles.button}>
        Create
      </button>
      {openModal === true ? (
        <TableModal setModalOpen={setModalOpen} />
      ) : null}
    </div>
  );
}
