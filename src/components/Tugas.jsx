import { List } from '../components/List';
import styles from '../styles/tugas.module.css';

export function Tugas({ tugas, selesai, hapus }) {
  // Menghitung total jumlah tugas dan jumlah tugas yang telah selesai
  const totalTugas = tugas.length; // Jumlah total tugas
  const tugasSelesai = tugas.filter(tugas => tugas.isCompleted).length;

  return (
    <section className={styles.tugas}>
      <header className={styles.header}>
        <div>
          <p>Tugas</p>
          <span>{totalTugas}</span>
        </div>
        <div>
          <p className={styles.text}>Tugas Selesai</p>
          <span>{tugasSelesai} Dari {totalTugas}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tugas.map(tugas => (
          <List key={tugas.id} tugas={tugas} selesai={selesai} hapus={hapus}/>
        ))}
      </div>
    </section>
  )
}