import { Dispatch, SetStateAction } from "react";
import styles from "./TableModal.module.css";
import Image from "next/image";
import close from "@/app/assets/close.svg";
import TableModalSelectComponent from "./TableModalSelectComponent";

type Props = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

export default function TableModal({ setModalOpen }: Props) {
  const handleCloseClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setModalOpen(false);
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <button className={styles.buttonClose} onClick={handleCloseClick}>
            <Image width={15} src={close} alt={"Close button"} />
          </button>
        </div>
        <div className={styles.modalBody}>
          <input className={styles.modalInput} placeholder="name" />
          <TableModalSelectComponent />
          <input className={styles.modalInput} placeholder="file" />
          <button className={styles.button}>Add</button>
        </div>
      </div>
    </div>
  );
}
