# RVO System - Autonomous View-Once Interceptor

Autonomous WhatsApp View-Once Interceptor and Real-Time Telemetry Dashboard.

[![Node.js Version](https://img.shields.io/badge/Node.js-20.x%20%7C%2022.x-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Engine](https://img.shields.io/badge/Engine-Baileys%20v7-25D366?style=flat-square&logo=whatsapp&logoColor=white)](https://github.com/WhiskeySockets/Baileys)
[![Protocol](https://img.shields.io/badge/Protocol-Signal%20MD%20Fanout-blue?style=flat-square&logo=signal&logoColor=white)](https://signal.org)
[![Tunnel](https://img.shields.io/badge/Tunnel-Cloudflare%20Quick%20Tunnel-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://cloudflare.com)
[![Build](https://img.shields.io/badge/Build-Production%20Release-brightgreen?style=flat-square)](https://github.com/makhc1/RVO-SYSTEM)

---

## Daftar Isi

1. [Deskripsi Proyek](#deskripsi-proyek)
2. [Arsitektur dan Mekanisme Kerja](#arsitektur-dan-mekanisme-kerja)
3. [Metode Intersepsi Stealth](#metode-intersepsi-stealth)
4. [Fitur Sistem](#fitur-sistem)
5. [Spesifikasi dan Kebutuhan Sistem](#spesifikasi-dan-kebutuhan-sistem)
6. [Panduan Instalasi dan Deployment](#panduan-instalasi-dan-deployment)
   - [Panel Pterodactyl](#1-panel-pterodactyl)
   - [Server Linux (Ubuntu / Debian)](#2-server-linux-ubuntu--debian)
   - [Sistem Operasi Windows](#3-sistem-operasi-windows)
7. [Referensi Konfigurasi (config.js)](#referensi-konfigurasi-configjs)
8. [Otorisasi dan Lisensi](#otorisasi-dan-lisensi)
9. [Pertanyaan Umum (FAQ)](#pertanyaan-umum-faq)
10. [Kebijakan Privasi dan Batasan Hukum](#kebijakan-privasi-dan-batasan-hukum)

---

## Deskripsi Proyek

RVO System adalah perangkat lunak otomasi berbasis Node.js yang dirancang untuk mendeteksi, mengekstraksi, dan menyimpan pesan media View-Once (Sekali Lihat) pada protokol WhatsApp Multi-Device secara asinkron.

Aplikasi ini menggunakan arsitektur Signal Protocol Multi-Device Fanout untuk mengidentifikasi stub pesan terenkripsi, menangkap payload media tanpa mengubah alur percakapan, serta mendistribusikan salinan media terdekripsi ke saluran pribadi pemilik akun.

---

## Arsitektur dan Mekanisme Kerja

Pada pembaruan protokol WhatsApp Multi-Device modern, pesan View-Once yang dikirimkan pada obrolan pribadi (1-on-1) tidak mendistribusikan kunci media terenkripsi secara langsung ke perangkat tertaut (linked devices), melainkan mengirimkan penanda pesan berupa stub `unavailable: view_once`.

RVO System menangani batasan ini melalui dua jalur pemrosesan:

1. **Jalur Otomatis (Direct Payload Extraction):**  
   Untuk pesan View-Once yang menyertakan kunci media secara langsung (misalnya pengiriman dokumen atau konteks grup tertentu), bot secara otomatis mengunduh buffer media dari Content Delivery Network (CDN) WhatsApp dan meneruskannya ke obrolan pribadi pemilik.

2. **Jalur Intersepsi Quoted Context (Stealth Quoted Bridging):**  
   Ketika pengguna melakukan aksi balas (swipe-reply) pada perangkat seluler utama, klien WhatsApp utama menyematkan deskriptor media terdekripsi lengkap di dalam struktur `contextInfo.quotedMessage`. Bot mengintersepsi paket data keluar tersebut secara *real-time*, mendekripsi konten media, dan menyimpannya secara lokal serta meneruskannya ke ruang penyimpanan pribadi pemilik.

---

## Metode Intersepsi Stealth

Aplikasi ini menyediakan tiga skema pembukaan media untuk menjaga kerahasiaan operasional di dalam ruang percakapan:

| Metode | Prosedur Penggunaan | Dampak pada Ruang Obrolan | Status Deteksi WhatsApp Mod |
|---|---|---|---|
| **Metode A: Natural Chat Interceptor** | Balas pesan media dengan teks percakapan biasa (contoh: "wkwk", "baik", emoji biasa). | Pesan balasan tetap ada di dalam percakapan seperti komunikasi normal. | **Tidak Terdeteksi (0%)** karena tidak ada aksi penghapusan pesan yang memicu modul anti-delete. |
| **Metode B: Ghost Trigger** | Balas pesan media menggunakan karakter zero-width space (`\u200B`). | Balon teks terlihat kosong dan dihapus otomatis dalam 1 detik. | Sangat minim jejak visual. |
| **Metode C: Symbol Trigger** | Balas pesan media menggunakan karakter simbol (`.`, `/`, `,`, `-`, `!`, `?`, `1`). | Pesan dihapus otomatis oleh bot dalam tempo 1 detik (`delete for everyone`). | Standar trigger. |

---

## Fitur Sistem

- **Panel Kontrol Web Terintegrasi:**  
  Antarmuka berbasis web untuk memantau status operasional bot, statistik sesi, identitas nomor terhubung, serta log aktivitas waktu-nyata melalui Server-Sent Events (SSE).

- **Cloudflare Quick Tunnel:**  
  Penyediaan terowongan publik HTTPS secara otomatis melalui protokol Cloudflare Tunnel tanpa memerlukan konfigurasi port forwarding pada router atau penyewaan domain publik.

- **Penyimpanan Lokal Terstruktur:**  
  Penyimpanan otomatis seluruh media hasil dekripsi ke direktori `./saved_media` dengan format penamaan berbasis stempel waktu dan identitas pengirim.

- **Notifikasi Terformat ke Ruang Obrolan:**  
  Pengiriman tautan panel kontrol dan laporan telemetri ke obrolan pribadi saat koneksi sesi pertama kali terbentuk.

- **Otentikasi Kriptografis Berbasis Lisensi:**  
  Mekanisme validasi lisensi terpusat yang diverifikasi menggunakan algoritma HMAC-SHA256 dan terikat pada nomor telepon akun pengguna.

---

## Spesifikasi dan Kebutuhan Sistem

- **Runtime Environment:** Node.js versi 20.x LTS atau 22.x LTS
- **Package Manager:** npm versi 9.x atau yang lebih baru
- **Sistem Operasi:** Linux (Ubuntu 20.04+, Debian 11+, CentOS 8+), Windows 10/11, Windows Server 2019+, atau macOS
- **Koneksi Internet:** Koneksi internet aktif dengan akses stabil ke domain WhatsApp dan Cloudflare

---

## Panduan Instalasi dan Deployment

### 1. Panel Pterodactyl

1. Masuk ke dasbor Pterodactyl, buka menu **Files**.
2. Unggah seluruh berkas proyek ke direktori utama (root) server.
3. Buka berkas `config.js` dan lengkapi nilai pada atribut `licenseKey`:
   ```javascript
   licenseKey: "RVO-XXXX-XXXX-XXXX",
   ```
4. Pindah ke tab **Console** dan jalankan perintah:
   ```bash
   npm install
   npm start
   ```
5. Masukkan nomor telepon WhatsApp Anda (termasuk kode negara, contoh: `628123456789`) saat diminta di terminal.
6. Masukkan 8 digit kode pairing yang muncul pada konsol ke aplikasi WhatsApp di ponsel Anda:
   **WhatsApp > Pengaturan > Perangkat Tertaut > Tautkan dengan nomor telepon saja**.
7. Proses inisialisasi selesai. Bot siap beroperasi.

---

### 2. Server Linux (Ubuntu / Debian)

1. Perbarui daftar paket dan pasang Node.js:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs git
   ```

2. Unduh repositori:
   ```bash
   git clone https://github.com/makhc1/RVO-SYSTEM.git
   cd RVO-SYSTEM
   ```

3. Pasang dependensi:
   ```bash
   npm install
   ```

4. Sesuaikan konfigurasi pada `config.js`:
   ```bash
   nano config.js
   ```

5. Jalankan aplikasi menggunakan Process Manager (PM2):
   ```bash
   sudo npm install -g pm2
   pm2 start index.js --name "rvo-system"
   pm2 save
   pm2 startup
   ```

---

### 3. Sistem Operasi Windows

1. Unduh dan pasang Node.js versi LTS dari portal resmi [nodejs.org](https://nodejs.org).
2. Ekstrak repositori ini ke direktori lokal Anda.
3. Buka terminal (Command Prompt atau PowerShell) pada direktori tersebut.
4. Jalankan perintah instalasi dan eksekusi:
   ```cmd
   npm install
   npm start
   ```
5. Lakukan proses penautan perangkat melalui kode pairing.

---

## Referensi Konfigurasi (config.js)

Berikut rincian parameter konfigurasi yang tersedia pada berkas `config.js`:

```javascript
export default {
  // Kunci lisensi resmi yang terdaftar pada sistem validasi
  licenseKey: process.env.LICENSE_KEY || "",

  // URL server validasi lisensi
  licenseServerUrl: process.env.LICENSE_SERVER_URL || "http://localhost:4000",

  // Nomor telepon akun untuk inisialisasi pairing code (kosongkan untuk input interaktif)
  pairingNumber: process.env.PAIRING_NUMBER || "",

  // Mengaktifkan intersepsi dan pengunduhan media View-Once otomatis
  autoRvo: true,

  // Meneruskan media terdekripsi ke obrolan pribadi pemilik (Chat with Yourself)
  sendToSelf: true,

  // Menampilkan media terdekripsi pada obrolan asal (false untuk mode rahasia)
  autoRevealInCurrentChat: false,

  // Menghapus pesan balasan trigger secara otomatis dari ruang obrolan
  deleteTriggerMessage: true,

  // Nomor telepon tujuan penerusan sekunder (opsional)
  forwardToOtherNumber: "",

  // Menyimpan salinan media ke direktori lokal (./saved_media)
  saveToLocalFolder: true,

  // Jalur direktori penyimpanan media lokal
  mediaDir: "./saved_media",

  // Direktori penyimpanan kredensial sesi login Baileys
  sessionDir: "./session",

  // Mengaktifkan server antarmuka web
  enableWeb: true,

  // Mengaktifkan Cloudflare Quick Tunnel untuk akses publik antarmuka web
  autoTunnel: true,

  // Mengirimkan tautan publik antarmuka web ke obrolan pribadi saat koneksi terbentuk
  sendTunnelUrlToChat: true,

  // Mengaktifkan trigger pembukaan media melalui reaksi emoji
  enableReactionTrigger: true,

  // Menghapus reaksi emoji secara otomatis setelah pemrosesan selesai
  autoRemoveReaction: true,

  // Port jaringan untuk antarmuka web lokal
  webPort: process.env.PORT ? parseInt(process.env.PORT) : 3000
};
```

---

## Otorisasi dan Lisensi

Penggunaan perangkat lunak ini memerlukan otorisasi berupa Kunci Lisensi resmi yang terverifikasi ke server pusat. Kunci lisensi terikat secara permanen pada identitas nomor telepon akun yang didaftarkan.

Untuk permohonan lisensi, aktivasi, atau perpanjangan durasi langganan, hubungi pengembang melalui kontak berikut:

- **WhatsApp Administrasi:** [wa.me/6289501524223](https://wa.me/6289501524223)
- **Telegram Administrasi:** [@yukineko](https://t.me/yukineko)

Tersedia opsi lisensi dengan durasi 30 hari, 90 hari, dan lisensi permanen (Lifetime).

---

## Pertanyaan Umum (FAQ)

**Q: Apakah penggunaan perangkat lunak ini berisiko terhadap pemblokiran akun?**  
A: Perangkat lunak ini mengimplementasikan spesifikasi resmi Baileys Multi-Device yang mereplikasi sesi WhatsApp Web standar. Aplikasi tidak melakukan aktivitas pengiriman pesan massal atau interaksi otomatis yang melanggar batasan frekuensi normal.

**Q: Mengapa pesan balasan pada Metode A tidak dihapus secara otomatis?**  
A: Ini merupakan fitur disengaja pada sistem intersepsi percakapan natural. Dengan membiarkan pesan balasan tetap ada, lawan bicara tidak menyadari adanya proses ekstraksi media, dan modul anti-delete pada aplikasi pihak ketiga tidak akan terpicu.

**Q: Apakah perangkat lunak ini dapat berjalan tanpa sambungan internet pada server lisensi?**  
A: Validasi awal memerlukan sambungan jaringan ke server lisensi. Akun yang terdaftar sebagai Master Root memiliki pengecualian validasi luring permanen.

---

## Kebijakan Privasi dan Batasan Hukum

Perangkat lunak ini dikembangkan secara eksklusif untuk tujuan edukasi, penelitian arsitektur protokol komunikasi terenkripsi, dan pencadangan data pribadi pemilik akun (*personal backup*).

Pengembang tidak bertanggung jawab atas segala bentuk pemanfaatan perangkat lunak ini yang melanggar regulasi privasi, ketentuan layanan pihak ketiga, atau peraturan perundang-undangan yang berlaku di wilayah hukum terkait. Pengguna bertanggung jawab penuh atas segala konsekuensi operasional yang timbul akibat penggunaan sistem ini.

---

Dokumentasi ini dikelola oleh pengembang resmi repositori RVO-SYSTEM.  
Hak Cipta (c) 2026 makhc1. Seluruh hak cipta dilindungi undang-undang.
