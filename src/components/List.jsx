import styles from '../styles/list.module.css';
import { FaTrash } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";

export function List ({tugas, selesai, hapus}) {
  return (
    <div className={styles.list}>
      <button className={styles.checkContainer} onClick={() => selesai(tugas.id)}>
        {tugas.isCompleted ? <IoMdCheckmarkCircle /> : <div />}
      </button>
      <p className={tugas.isCompleted ? styles.tugasCompleted : ""}>{tugas.title}</p>
      <button className={styles.deleteButton} onClick={() => hapus(tugas.id)}>
        <FaTrash color='red'/>
      </button>
    </div>
  )
}