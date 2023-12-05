import { useState } from 'react';
import Logo from '../assets/logo.svg';
import styles from '../styles/header.module.css';
import { FaPlus } from "react-icons/fa";

export function Header({ tambah }) {
  // Hook state untuk mengelola nilai input untuk menambahkan tugas baru
  const [input, setInput] = useState('');

  // Penangan acara untuk pengiriman formulir untuk menambahkan tugas baru
  const inputSubmit = (event) => {
    event.preventDefault();
    tambah(input);// Memanggil fungsi 'tambah' dengan nilai input saat ini untuk menambahkan tugas baru
    setInput('');// Mengosongkan bidang input setelah pengiriman formulir
  };

  // Penangan acara untuk memperbarui state 'input' berdasarkan input pengguna
  const inputGanti = (event) => {
    setInput(event.target.value);// Menetapkan state 'input' dengan nilai yang dimasukkan oleh pengguna
  };

  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo" />
      <form onSubmit={inputSubmit} className={styles.tambahtugas}>
        <input placeholder="Tambahkan Tugas" type="text" value={input} onChange={inputGanti}/>
        <button>
          <FaPlus size={20} />
        </button>
      </form>
    </header>
  );
}