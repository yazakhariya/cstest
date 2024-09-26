import styles from "./TableModalSelectComponent.module.css";

export default function TableModalSelectComponent() {
  return (
    <div>
      <label>
        Select format
        <select>
          <option>Text</option>
          <option>Number</option>
        </select>
      </label>
      <input className={styles.modalInput} />
    </div>
  );
}
