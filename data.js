// =======================================================
// FAIL DATA DASHBOARD - PROGRAM SIJIL OPERASI PERHOTELAN
// KOLEJ KOMUNITI BUKIT BERUANG, MELAKA
// =======================================================
// CARA EDIT:
// 1. Buka fail ini dengan Notepad atau mana-mana editor teks
// 2. Ubah nilai di antara tanda petikan " "
// 3. Simpan fail dan refresh browser
// =======================================================

const MAKLUMAT_PROGRAM = {
  nama: "PROGRAM SIJIL OPERASI PERHOTELAN",
  sesi: "SESI II 2026/2027",
  institusi: "KOLEJ KOMUNITI BUKIT BERUANG, MELAKA",
  ketuaProgram: "EN. MUHAMMAD FAHMI BIN MD SABRI",
  timbalanPengarah: "EN. MOHD KHAIROL NIZAM BIN MOHD ANUAR",
  pengarah: "EN. KHAIRUL ASHRAF BIN MUHAMMAD"
};

// =======================================================
// SENARAI PENSYARAH
// Untuk tambah pensyarah baru: salin blok { } dan ubah nilai
// jamMengajar       = jam mengajar kursus sahaja
// jamLantikanSektor = jam tugas lantikan sektor (KPRO / e-Learning / BKPKK)
//                     0 = tiada lantikan sektor
// catatanLantikan   = label lantikan sektor (kosongkan jika tiada)
// tarikhLahir       = format "DD/MM/YYYY" (boleh dikemaskini melalui dashboard)
// pendidikan        = senarai latar belakang pendidikan (array, boleh berbilang)
// sijilKompetensi   = senarai sijil kompetensi (array, boleh berbilang)
// NOTA: tarikhLahir, pendidikan, sijilKompetensi dan foto BOLEH dikemaskini
//       terus dari dashboard — data akan disimpan secara automatik
// =======================================================
const PENSYARAH = [
  {
    id: 1,
    nama: "EN. MUHAMMAD FAHMI BIN MD SABRI",
    namaRingkas: "En. Fahmi",
    inisial: "MF",
    gred: "DH12",
    jawatan: "Ketua Program",
    foto: "foto/fahmi.jpg",
    warna: "#1a56db",
    jamMengajar: 14,
    jamLantikanSektor: 6,
    catatanLantikan: "KPRO (6J)",
    tarikhLahir: "",
    pendidikan: [],
    sijilKompetensi: []
  },
  {
    id: 2,
    nama: "CIK SITI NORAKMA BINTI ABD MUIN",
    namaRingkas: "Cik Norakma",
    inisial: "SN",
    gred: "DH10",
    jawatan: "Pensyarah",
    foto: "foto/norakma.jpg",
    warna: "#7e3af2",
    jamMengajar: 19,
    jamLantikanSektor: 0,
    catatanLantikan: "",
    tarikhLahir: "",
    pendidikan: [],
    sijilKompetensi: []
  },
  {
    id: 3,
    nama: "PN. SITI SYAZANA BINTI MUHAMMAD SAUFI",
    namaRingkas: "Pn. Syazana",
    inisial: "SS",
    gred: "DH10",
    jawatan: "Setiausaha Program",
    foto: "foto/syazana.jpg",
    warna: "#057a55",
    jamMengajar: 20,
    jamLantikanSektor: 0,
    catatanLantikan: "",
    tarikhLahir: "",
    pendidikan: [],
    sijilKompetensi: []
  },
  {
    id: 4,
    nama: "PN. NAZUHA BINTI MOHD ZAHARI",
    namaRingkas: "Pn. Nazuha",
    inisial: "NZ",
    gred: "DH10",
    jawatan: "Pensyarah",
    foto: "foto/nazuha.jpg",
    warna: "#c27803",
    jamMengajar: 19,
    jamLantikanSektor: 0,
    catatanLantikan: "",
    tarikhLahir: "",
    pendidikan: [],
    sijilKompetensi: []
  },
  {
    id: 5,
    nama: "EN. KHAIROL HAKKEKY BIN HASHIM",
    namaRingkas: "En. Khairol",
    inisial: "KH",
    gred: "DH6",
    jawatan: "Pensyarah",
    foto: "foto/khairol.jpg",
    warna: "#e02424",
    jamMengajar: 20,
    jamLantikanSektor: 0,
    catatanLantikan: "",
    tarikhLahir: "",
    pendidikan: [],
    sijilKompetensi: []
  },
  {
    id: 6,
    nama: "PN. NURHIDAYATI BINTI HASSAN",
    namaRingkas: "Pn. Hidayati",
    inisial: "NH",
    gred: "DH10",
    jawatan: "Pegawai e-Pembelajaran",
    foto: "foto/nurhidayati.jpg",
    warna: "#1f9d55",
    jamMengajar: 14,
    jamLantikanSektor: 12,
    catatanLantikan: "PEG. E-LEARNING (12J)",
    tarikhLahir: "",
    pendidikan: [],
    sijilKompetensi: []
  },
  {
    id: 7,
    nama: "PN. RUMIZI BINTI ABDUL MANAF",
    namaRingkas: "Pn. Rumizi",
    inisial: "RM",
    gred: "DH9",
    jawatan: "Penyelaras BKPKK",
    foto: "foto/rumizi.jpg",
    warna: "#d61f69",
    jamMengajar: 15,
    jamLantikanSektor: 10,
    catatanLantikan: "PENYELARAS BKPKK (10J)",
    tarikhLahir: "",
    pendidikan: [],
    sijilKompetensi: []
  }
];

// =======================================================
// AGIHAN KURSUS
// pensyarahId : ID pensyarah di atas
// peranan     : "Utama" atau "Assist"
// Untuk tambah kursus baru: salin baris { } dan ubah nilai
// =======================================================
const KURSUS = [
  // ---- En. Fahmi (ID 1) ----
  { pensyarahId: 1, kod: "SOP10242", nama: "Restaurant Concept Creation", kelas: "SOP 1", jam: 3, peranan: "Utama" },
  { pensyarahId: 1, kod: "SOP30332", nama: "Guest Service Excellence", kelas: "SOP 3", jam: 4, peranan: "Utama" },
  { pensyarahId: 1, kod: "SOP10253", nama: "Food & Beverage Service", kelas: "SOP 1", jam: 5, peranan: "Utama" },
  { pensyarahId: 1, kod: "PSH",      nama: "Pengurusan Kursus Pendek & Promosi", kelas: "PSH", jam: 2, peranan: "Utama" },
  // ---- Cik Norakma (ID 2) ----
  { pensyarahId: 2, kod: "SOP30353", nama: "M.I.C.E. in Hospitality Industry", kelas: "SOP 3", jam: 5, peranan: "Utama" },
  { pensyarahId: 2, kod: "SOP20293", nama: "Front Office Operation", kelas: "SOP 2", jam: 5, peranan: "Utama" },
  { pensyarahId: 2, kod: "SOP30332", nama: "Guest Service Excellence", kelas: "SOP 3", jam: 4, peranan: "Kedua" },
  { pensyarahId: 2, kod: "SOP10242", nama: "Restaurant Concept Creation", kelas: "SOP 1", jam: 3, peranan: "Kedua" },
  { pensyarahId: 2, kod: "PSH",      nama: "Pengurusan Kursus Pendek & Promosi", kelas: "PSH", jam: 2, peranan: "Utama" },
  // ---- Pn. Syazana (ID 3) ----
  { pensyarahId: 3, kod: "SOP10263", nama: "Hotel & Resort Recreation", kelas: "SOP 1", jam: 6, peranan: "Utama" },
  { pensyarahId: 3, kod: "SOP20303", nama: "Tourism & Hospitality Marketing", kelas: "SOP 2", jam: 3, peranan: "Utama" },
  { pensyarahId: 3, kod: "SOP20273", nama: "Restaurant Operation", kelas: "SOP 2", jam: 6, peranan: "Utama" },
  { pensyarahId: 3, kod: "SOP20312", nama: "Digital Entrepreneurship for Service Industry", kelas: "SOP 2", jam: 3, peranan: "Utama" },
  { pensyarahId: 3, kod: "PSH",      nama: "Pengurusan Kursus Pendek & Promosi", kelas: "PSH", jam: 2, peranan: "Utama" },
  // ---- Pn. Nazuha (ID 4) ----
  { pensyarahId: 4, kod: "SOP10233", nama: "Fundamentals of Hospitality Industry", kelas: "SOP 1", jam: 3, peranan: "Utama" },
  { pensyarahId: 4, kod: "SUG10022", nama: "Pematuhan Teknologi Hijau", kelas: "SOP 3", jam: 3, peranan: "Utama" },
  { pensyarahId: 4, kod: "SOP20283", nama: "Housekeeping Operation", kelas: "SOP 2", jam: 5, peranan: "Kedua" },
  { pensyarahId: 4, kod: "SOP30353", nama: "M.I.C.E. in Hospitality Industry", kelas: "SOP 3", jam: 5, peranan: "Utama" },
  { pensyarahId: 4, kod: "SPAK",     nama: "Sistem Penasihatan Akademik Kolej", kelas: "SOP 2", jam: 1, peranan: "Utama" },
  { pensyarahId: 4, kod: "PSH",      nama: "Pengurusan Kursus Pendek & Promosi", kelas: "PSH", jam: 2, peranan: "Utama" },
  // ---- En. Khairol (ID 5) ----
  { pensyarahId: 5, kod: "SOP30323", nama: "Contemporary Barista Service", kelas: "SOP 3", jam: 6, peranan: "Utama" },
  { pensyarahId: 5, kod: "SOP20273", nama: "Restaurant Operation", kelas: "SOP 2", jam: 6, peranan: "Utama" },
  { pensyarahId: 5, kod: "SOP10253", nama: "Food & Beverage Service", kelas: "SOP 1", jam: 5, peranan: "Kedua" },
  { pensyarahId: 5, kod: "SPAK",     nama: "Sistem Penasihatan Akademik Kolej", kelas: "SOP 1", jam: 1, peranan: "Utama" },
  { pensyarahId: 5, kod: "PSH",      nama: "Pengurusan Kursus Pendek & Promosi", kelas: "PSH", jam: 2, peranan: "Utama" },
  // ---- Pn. Nurhidayati (ID 6) ----
  { pensyarahId: 6, kod: "SOP30343", nama: "Basic Accounting", kelas: "SOP 3", jam: 4, peranan: "Utama" },
  { pensyarahId: 6, kod: "SOP20312", nama: "Digital Entrepreneurship for Service Industry", kelas: "SOP 2", jam: 3, peranan: "Utama" },
  { pensyarahId: 6, kod: "SOP20293", nama: "Front Office Operation", kelas: "SOP 2", jam: 5, peranan: "Kedua" },
  { pensyarahId: 6, kod: "PSH",      nama: "Pengurusan Kursus Pendek & Promosi", kelas: "PSH", jam: 2, peranan: "Utama" },
  // ---- Pn. Rumizi (ID 7) ----
  { pensyarahId: 7, kod: "SOP30363", nama: "Personal Development for Hotelier", kelas: "SOP 3", jam: 5, peranan: "Utama" },
  { pensyarahId: 7, kod: "SKU10252", nama: "Foodservice Sanitation", kelas: "SOP 1", jam: 2, peranan: "Utama" },
  { pensyarahId: 7, kod: "SOP20283", nama: "Housekeeping Operation", kelas: "SOP 2", jam: 5, peranan: "Kedua" },
  { pensyarahId: 7, kod: "SPAK",     nama: "Sistem Penasihatan Akademik Kolej", kelas: "SOP 2", jam: 1, peranan: "Utama" },
  { pensyarahId: 7, kod: "PSH",      nama: "Pengurusan Kursus Pendek & Promosi", kelas: "PSH", jam: 2, peranan: "Utama" }
];

// =======================================================
// TUGAS SAMPINGAN
// Untuk tambah tugas baru: salin baris { } dan ubah nilai
// =======================================================
const TUGAS_SAMPINGAN = [
  // ---- En. Fahmi (ID 1) ----
  { pensyarahId: 1, tugas: "Ketua Program Sijil Operasi Perhotelan" },
  { pensyarahId: 1, tugas: "Jawatankuasa Keselamatan & Kesihatan Pekerjaan (Wakil Pengurusan)" },
  { pensyarahId: 1, tugas: "Pelulus Nota Minta Program" },
  { pensyarahId: 1, tugas: "PIC Bengkel D'Cendana" },
  { pensyarahId: 1, tugas: "PIC Bilik D'Kasturi" },
  // ---- Cik Norakma (ID 2) ----
  { pensyarahId: 2, tugas: "Pegawai Penyelidikan & Penerbitan" },
  { pensyarahId: 2, tugas: "Penyelaras Jadual Waktu Program" },
  { pensyarahId: 2, tugas: "Pengesah Perolehan Program" },
  { pensyarahId: 2, tugas: "Penyelaras PSH" },
  { pensyarahId: 2, tugas: "PIC Bilik D'Saffron" },
  // ---- Pn. Syazana (ID 3) ----
  { pensyarahId: 3, tugas: "Setiausaha Program" },
  { pensyarahId: 3, tugas: "Pengurus Industry on Campus (IOC)" },
  { pensyarahId: 3, tugas: "Pegawai Pemeriksa Aset Alih" },
  { pensyarahId: 3, tugas: "Peminta Perolehan Program" },
  { pensyarahId: 3, tugas: "PIC Bankuet D'Bayu" },
  // ---- Pn. Nazuha (ID 4) ----
  { pensyarahId: 4, tugas: "Penyelaras Penasihat Akademik (PPAK)" },
  { pensyarahId: 4, tugas: "Penyelaras Peperiksaan Program" },
  { pensyarahId: 4, tugas: "Penyelaras e-Pembelajaran Program" },
  { pensyarahId: 4, tugas: "Peminta Perolehan Unit Peperiksaan / e-Learning" },
  { pensyarahId: 4, tugas: "Pegawai Pemeriksa Aset Alih" },
  { pensyarahId: 4, tugas: "PIC Bilik Kuliah D'Cengkih" },
  // ---- En. Khairol (ID 5) ----
  { pensyarahId: 5, tugas: "Jawatankuasa Smart Green BT: 5" },
  { pensyarahId: 5, tugas: "Jawatankuasa Keselamatan & Kesihatan Pekerjaan (Wakil Kakitangan)" },
  { pensyarahId: 5, tugas: "Penerima Perolehan Program" },
  { pensyarahId: 5, tugas: "Penyelaras Disiplin Program" },
  { pensyarahId: 5, tugas: "PIC Restoran D'Serai" },
  // ---- Pn. Nurhidayati (ID 6) ----
  { pensyarahId: 6, tugas: "Pegawai e-Pembelajaran" },
  { pensyarahId: 6, tugas: "Pegawai Pemeriksa Aset Alih" },
  { pensyarahId: 6, tugas: "Pelulus Nota Minta Perolehan e-Learning" },
  { pensyarahId: 6, tugas: "Penyelaras Keusahawanan Program" },
  { pensyarahId: 6, tugas: "PIC Studio Digital" },
  // ---- Pn. Rumizi (ID 7) ----
  { pensyarahId: 7, tugas: "Penyelaras Bantuan Kewangan Pelajar Kolej Komuniti (BKPKK)" },
  { pensyarahId: 7, tugas: "Penyelaras Latihan Industri Program" },
  { pensyarahId: 7, tugas: "Penerima Perolehan Unit Hal Ehwal Pelajar / Unit Sukan / UJK" },
  { pensyarahId: 7, tugas: "PIC Rajawali Suite" }
];

// =======================================================
// SENARAI KURSUS PROGRAM SIJIL OPERASI PERHOTELAN
// klasifikasi : "Wajib" atau "Teras Disiplin" atau "Latihan Industri"
// k = Kuliah, a = Amali, t = Tutorial, l = Lain-lain
// kredit = Nilai Kredit
// =======================================================
const SENARAI_KURSUS = [
  // ---- SEMESTER 1 ----
  { semester: 1, klasifikasi: "Wajib",          kod: "MPU11022", nama: "Pengajian Malaysia",                              k: 2, a: 0, t: 0, l: 0, kredit: 2 },
  { semester: 1, klasifikasi: "Wajib",          kod: "SUE10031", nama: "Communicative English",                           k: 1, a: 0, t: 1, l: 0, kredit: 1 },
  { semester: 1, klasifikasi: "Wajib",          kod: "SBC10022", nama: "Aplikasi Komputer",                               k: 1, a: 2, t: 0, l: 0, kredit: 2 },
  { semester: 1, klasifikasi: "Wajib",          kod: "SOP10233", nama: "Fundamentals of Hospitality Industry",            k: 3, a: 0, t: 0, l: 0, kredit: 3 },
  { semester: 1, klasifikasi: "Teras Disiplin", kod: "SKU10252", nama: "Foodservice Sanitation",                          k: 2, a: 0, t: 0, l: 0, kredit: 2 },
  { semester: 1, klasifikasi: "Teras Disiplin", kod: "SOP10242", nama: "Restaurant Concept Creation",                     k: 1, a: 2, t: 0, l: 0, kredit: 2 },
  { semester: 1, klasifikasi: "Teras Disiplin", kod: "SOP10253", nama: "Food and Beverage Service",                       k: 1, a: 4, t: 0, l: 0, kredit: 3 },
  { semester: 1, klasifikasi: "Teras Disiplin", kod: "SOP10263", nama: "Hotel and Resort Recreation",                     k: 0, a: 6, t: 0, l: 0, kredit: 3 },
  // ---- SEMESTER 2 ----
  { semester: 2, klasifikasi: "Wajib",          kod: "MPU13061", nama: "Kursus Integriti dan Antirasuah",                 k: 0, a: 0, t: 2, l: 0, kredit: 1 },
  { semester: 2, klasifikasi: "Wajib",          kod: "MPU13042", nama: "Pendidikan Islam",                                k: 2, a: 0, t: 0, l: 0, kredit: 2 },
  { semester: 2, klasifikasi: "Wajib",          kod: "MPU13052", nama: "Pendidikan Moral",                                k: 2, a: 0, t: 0, l: 0, kredit: 2 },
  { semester: 2, klasifikasi: "Teras Disiplin", kod: "SOP20273", nama: "Restaurant Operation",                            k: 0, a: 6, t: 0, l: 0, kredit: 3 },
  { semester: 2, klasifikasi: "Teras Disiplin", kod: "SOP20283", nama: "Housekeeping Operation",                          k: 1, a: 4, t: 0, l: 0, kredit: 3 },
  { semester: 2, klasifikasi: "Teras Disiplin", kod: "SOP20293", nama: "Front Office Operation",                          k: 1, a: 4, t: 0, l: 0, kredit: 3 },
  { semester: 2, klasifikasi: "Teras Disiplin", kod: "SOP20303", nama: "Tourism and Hospitality Marketing",               k: 3, a: 0, t: 0, l: 0, kredit: 3 },
  { semester: 2, klasifikasi: "Teras Disiplin", kod: "SOP20312", nama: "Digital Entrepreneurship for Service Industry",   k: 1, a: 2, t: 0, l: 0, kredit: 2 },
  // ---- SEMESTER 3 ----
  { semester: 3, klasifikasi: "Wajib",          kod: "SUE20041", nama: "Workplace English",                               k: 1, a: 0, t: 1, l: 0, kredit: 1 },
  { semester: 3, klasifikasi: "Wajib",          kod: "SUG10022", nama: "Pematuhan Teknologi Hijau",                       k: 1, a: 2, t: 0, l: 0, kredit: 2 },
  { semester: 3, klasifikasi: "Teras Disiplin", kod: "SOP30323", nama: "Contemporary Barista Service",                    k: 0, a: 6, t: 0, l: 0, kredit: 3 },
  { semester: 3, klasifikasi: "Teras Disiplin", kod: "SOP30332", nama: "Guest Service Excellence",                        k: 0, a: 4, t: 0, l: 0, kredit: 2 },
  { semester: 3, klasifikasi: "Teras Disiplin", kod: "SOP30343", nama: "Basic Accounting",                                k: 2, a: 0, t: 2, l: 0, kredit: 3 },
  { semester: 3, klasifikasi: "Teras Disiplin", kod: "SOP30353", nama: "M.I.C.E in Hospitality Industry",                 k: 1, a: 4, t: 0, l: 0, kredit: 3 },
  { semester: 3, klasifikasi: "Teras Disiplin", kod: "SOP30363", nama: "Personal Development for Hotelier",               k: 1, a: 4, t: 0, l: 0, kredit: 3 },
  // ---- SEMESTER 4 ----
  { semester: 4, klasifikasi: "Latihan Industri", kod: "SUT40078", nama: "Latihan Industri",                              k: 0, a: 0, t: 0, l: 0, kredit: 8 }
];
