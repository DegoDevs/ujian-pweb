import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tugas } from "./components/Tugas";

// Mendefinisikan konstanta untuk kunci yang digunakan dalam local storage
const LOCAL_STORAGE_KEY = "daftartugas:webstorage";

function App() {
  
  const [tugas, setTugas] = useState([]); // Hook state untuk mengelola array 'tugas'

  // Hook useEffect untuk memuat tugas dari local storage saat komponen dimuat
  useEffect(() => {
    const load = localStorage.getItem(LOCAL_STORAGE_KEY); // Mengambil data dari local storage
    if (load) {
      setTugas(JSON.parse(load)); // Jika data ada, parse dan set state 'tugas'
    }
  }, []);

  // Fungsi untuk memperbarui baik state maupun local storage dengan data tugas baru
  const storageData = (tugasBaru) => {
    setTugas(tugasBaru); // Set state 'tugas' dengan data tugas baru
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tugasBaru)); // Menyimpan data tugas baru di local storage setelah mengonversinya menjadi string JSON
  };

  // Fungsi untuk menambahkan tugas baru
  const tambahData = (inputTugas) => {
    // Membuat array baru dari tugas dengan menambahkan tugas baru
    const tugasBaru = [
      ...tugas,
      {
        id: crypto.randomUUID(), // Menghasilkan ID unik untuk tugas baru menggunakan crypto.randomUUID()
        title: inputTugas, // Mengatur judul tugas baru dengan input yang diberikan
        isCompleted: false, // Mengatur status penyelesaian awal tugas baru menjadi false
      },
    ];
    storageData(tugasBaru); // Memperbarui state dan local storage dengan data tugas baru
  };

  // Fungsi untuk menghapus tugas berdasarkan ID
  const hapusData = (tugasId) => {
    const tugasBaru = tugas.filter((tugas) => tugas.id !== tugasId); // Membuat array baru dari tugas tanpa tugas yang memiliki ID yang spesifik
    storageData(tugasBaru); // Memperbarui state dan local storage dengan data tugas yang telah diubah
  };

  // Fungsi untuk mengalihkan status penyelesaian suatu tugas berdasarkan ID
  const ceklis = (tugasId) => {
    // Membuat array baru dari tugas dengan status penyelesaian yang diubah untuk tugas yang spesifik
    const tugasBaru = tugas.map((tugas) =>
      tugas.id === tugasId
        ? { ...tugas, isCompleted: !tugas.isCompleted }
        : tugas
    );
    storageData(tugasBaru); // Memperbarui state dan local storage dengan data tugas yang telah diubah
  };

  return (
    <div>
      <Header tambah={tambahData} />
      <Tugas tugas={tugas} selesai={ceklis} hapus={hapusData} />
    </div>
  );
}

export default App;
