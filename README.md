<div align="center">

# ⚡ RVO // AUTONOMOUS VIEW-ONCE INTERCEPTOR ⚡
### *Next-Generation Stealth WhatsApp View-Once Interceptor & Telemetry Dashboard*

[![Node.js](https://img.shields.io/badge/Node.js-20.x%20%7C%2022.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Baileys](https://img.shields.io/badge/Engine-Baileys%20v7-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://github.com/WhiskeySockets/Baileys)
[![Protocol](https://img.shields.io/badge/Protocol-Signal%20MD%20Fanout-blue?style=for-the-badge&logo=signal&logoColor=white)](https://signal.org)
[![Tunnel](https://img.shields.io/badge/Tunnel-TryCloudflare%20HTTPS-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://cloudflare.com)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge)](https://github.com/makhc1/RVO-SYSTEM)

<p align="center">
  <b>Sistem Self-Bot WhatsApp mandiri tercanggih untuk menangkap, membuka, dan mengamankan seluruh media Sekali Lihat (View-Once) secara 100% senyap tanpa terdeteksi oleh lawan bicara maupun WhatsApp Mod Anti-Delete.</b>
</p>

---

</div>

## 📑 Daftar Isi
- [✨ Fitur Unggulan](#-fitur-unggulan)
- [🕵️ 3 Metode Stealth (Anti-Curiga)](#️-3-metode-stealth-anti-curiga)
- [🖥️ Tactical Telemetry Web Dashboard](#️-tactical-telemetry-web-dashboard)
- [🔑 Cara Mendapatkan Kunci Lisensi](#-cara-mendapatkan-kunci-lisensi)
- [🚀 Panduan Instalasi](#-panduan-instalasi)
  - [1. Pterodactyl Panel](#1-panel-pterodactyl)
  - [2. VPS Linux (Ubuntu / Debian)](#2-vps-linux-ubuntu--debian)
  - [3. Windows PC / Laptop](#3-windows-pc--laptop)
- [⚙️ Penjelasan File Konfigurasi (config.js)](#️-penjelasan-file-konfigurasi-configjs)
- [❓ Tanya Jawab (FAQ)](#-tanya-jawab-faq)
- [⚖️ Disclaimer](#️-disclaimer)

---

## ✨ Fitur Unggulan

- **🛡️ 100% Stealth & Ghost Mode**: Membuka media sekali lihat tanpa memicu kecurigaan pengirim dan kebal terhadap deteksi WhatsApp Mod (GBWhatsApp, YoWhatsApp, dll).
- **💬 Natural Chat Interceptor**: Cukup balas foto dengan obrolan biasa (seperti *"wkwk"*, *"keren"*), bot otomatis menyedot medianya ke Chat Pribadi Anda tanpa menghapus balasan Anda.
- **🌐 Industrial Web Control Panel**: Dashboard berbasis web (Dark-Tech CRT Style) dengan realtime telemetry console (Server-Sent Events) untuk memantau status bot, daftar media yang tertangkap, dan kontrol penuh.
- **⚡ TryCloudflare Quick Tunnel**: Membuat link HTTPS publik otomatis dan gratis setiap kali bot aktif, tanpa perlu membuka port (port forwarding) atau menyewa domain.
- **📱 Tactical WA Card Notifier**: Mengirimkan kartu embed gambar & link dashboard langsung ke Chat Pribadi Anda begitu bot berhasil terhubung.
- **💾 Local Storage Backup**: Menyimpan salinan media beresolusi penuh ke folder `./saved_media` dengan penamaan tanggal dan waktu WIB otomatis.
- **📲 Pairing Code Login**: Login super mudah langsung dari terminal menggunakan 8 digit Pairing Code tanpa perlu scan QR Code kamera.

---

## 🕵️ 3 Metode Stealth (Anti-Curiga)

Kebanyakan bot View-Once mengharuskan Anda membalas dengan tanda titik `.` lalu menghapusnya. Hal ini sering membuat teman curiga atau ketahuan oleh WhatsApp Mod yang memiliki fitur *Anti-Delete*.

**RVO-SYSTEM** menghadirkan 3 opsi pembukaan media tercanggih:

| Mode | Cara Pakai di WhatsApp HP | Jejak di Roomchat | Deteksi Anti-Delete Mod |
|---|---|---|---|
| **🟢 Mode 1: Natural Chat (Rekomendasi)** | Geser balas foto dengan kata santai: *"wkwk"*, *"astaga"*, *"apaan tuh"*, atau kirim emoji. | Balasan Anda tetap ada seperti mengobrol biasa. | **0% (Tidak Terdeteksi)** karena tidak ada pesan yang dihapus. |
| **👻 Mode 2: Ghost Trigger (Spasi Gaib)** | Geser balas foto dengan karakter spasi transparan (`\u200B`). | Balon chat tampak kosong dan lenyap dalam 1 detik. | Sangat minim jejak. |
| **⚡ Mode 3: Quick Symbol Trigger** | Geser balas foto dengan simbol pendek: `.`, `/`, `,`, `-`, `!`, `?`, `1`. | Otomatis dihapus oleh bot dalam 1 detik (`delete for everyone`). | Standar trigger. |

---

## 🖥️ Tactical Telemetry Web Dashboard

Bot ini dilengkapi panel kontrol web yang dapat diakses langsung dari browser HP maupun PC:

- **Host Matrix**: Menampilkan nomor WhatsApp yang terhubung, LID, Uptime server, dan total media yang berhasil dibuka.
- **Live Terminal Console**: Log streaming real-time berwarna via Server-Sent Events (SSE).
- **Captured Payload Registry**: Menampilkan daftar media View-Once yang terdeteksi secara real-time, status dekripsi, serta tombol **`[ 👁️ VIEW MEDIA ]`** untuk melihat langsung foto/video di browser dan **`[ 🔁 RE-SEND TO WA ]`**.
- **Live Config Toggle**: Mengubah pengaturan bot (Auto RVO, Forward Target, Mode Rahasia, dll) secara instan dari Web UI tanpa restart bot.

---

## 🔑 Cara Mendapatkan Kunci Lisensi

Bot ini menggunakan sistem otentikasi lisensi terenkripsi kriptografi (HMAC-SHA256) yang terikat langsung pada nomor WhatsApp Anda.

Untuk mendapatkan **Kunci Lisensi Resmi**, silakan hubungi Owner:
- **WhatsApp Resmi** : [wa.me/6289501524223](https://wa.me/6289501524223)
- **Telegram** : [@yukineko](https://t.me/yukineko)

### 📦 Pilihan Paket Lisensi:
1. **VIP Trial (7 Hari)** - Uji coba performa penuh.
2. **Standard VIP (30 Hari)** - Langganan bulanan aktif 24 jam.
3. **Pro VIP (90 Hari)** - Pilihan hemat 3 bulan.
4. **Permanent Sultan (Lifetime)** - Akses permanen tanpa batas masa aktif seumur hidup.

---

## 🚀 Panduan Instalasi

### 1. Panel Pterodactyl

1. Masuk ke panel Pterodactyl Anda, buka tab **File Manager**.
2. Upload file arsip `RVO-SYSTEM.zip` (atau clone repo ini).
3. Ekstrak file dan buka file `config.js`.
4. Masukkan kunci lisensi Anda pada bagian `licenseKey`:
   ```javascript
   licenseKey: "RVO-XXXX-XXXX-XXXX",
   ```
5. Buka tab **Console**, lalu ketik perintah instalasi:
   ```bash
   npm install
   npm start
   ```
6. Masukkan nomor WhatsApp Anda (diawali kode negara, contoh: `628123456789`) saat diminta di terminal.
7. Masukkan 8 digit kode pairing yang muncul ke WhatsApp HP Anda:  
   **WhatsApp > Titik Tiga / Pengaturan > Perangkat Tertaut > Tautkan dengan nomor telepon saja**.
8. Selesai! Bot otomatis aktif dan link dashboard publik akan dikirimkan ke chat Anda.

---

### 2. VPS Linux (Ubuntu / Debian)

```bash
# 1. Update paket & install Node.js 20+
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs git

# 2. Clone repositori
git clone https://github.com/makhc1/RVO-SYSTEM.git
cd RVO-SYSTEM

# 3. Install dependensi
npm install

# 4. Edit konfigurasi & masukkan License Key Anda
nano config.js

# 5. Jalankan bot (disarankan menggunakan PM2 agar online 24 jam)
npm install -g pm2
pm2 start index.js --name "rvo-bot"
pm2 logs rvo-bot
```

---

### 3. Windows PC / Laptop

1. Pastikan Anda telah menginstal [Node.js (LTS Version)](https://nodejs.org).
2. Download repo ini (klik **Code > Download ZIP**) lalu ekstrak.
3. Buka folder di terminal (Command Prompt / PowerShell).
4. Jalankan:
   ```cmd
   npm install
   npm start
   ```
5. Masukkan nomor WhatsApp Anda untuk mendapatkan Pairing Code.

---

## ⚙️ Penjelasan File Konfigurasi (config.js)

```javascript
export default {
  // Masukkan lisensi resmi yang Anda beli dari Owner
  licenseKey: "RVO-XXXX-XXXX-XXXX",

  // URL Server Validasi Lisensi Resmi
  licenseServerUrl: "http://localhost:4000",

  // Nomor HP untuk Pairing Code (Contoh: "628123456789"). Kosongkan untuk input di terminal.
  pairingNumber: "",

  // Aktifkan auto-download & forward View-Once (true = aktif)
  autoRvo: true,

  // Kirim hasil View-Once otomatis ke "Pesan ke Diri Sendiri" (Chat with Yourself)
  sendToSelf: true,

  // Munculkan foto hasil buka di roomchat obrolan asal (false = mode senyap/rahasia)
  autoRevealInCurrentChat: false,

  // Hapus pesan balasan trigger titik/simbol Anda dalam 1 detik
  deleteTriggerMessage: true,

  // Teruskan salinan foto ke nomor WA lain (opsional)
  forwardToOtherNumber: "",

  // Simpan salinan media ke folder lokal server (./saved_media)
  saveToLocalFolder: true,

  // Aktifkan Cloudflare Quick Tunnel untuk akses web dari luar jaringan
  autoTunnel: true,

  // Kirim link dashboard otomatis ke chat pribadi WhatsApp saat bot aktif
  sendTunnelUrlToChat: true
};
```

---

## ❓ Tanya Jawab (FAQ)

<details>
<summary><b>Q: Apakah nomor saya aman dari banned WhatsApp?</b></summary>
A: Sangat aman. Bot ini berjalan dengan arsitektur Multi-Device resmi Baileys v7 yang mensimulasikan sesi WhatsApp Web / Chrome di Linux Ubuntu, tidak mengirim spam massal, dan hanya memproses pesan media sekali lihat yang masuk.
</details>

<details>
<summary><b>Q: Kenapa saat balas foto dengan 'wkwk' pesannya tidak dihapus?</b></summary>
A: Itu adalah fitur <b>Natural Chat Stealth</b>! Bot sengaja tidak menghapus kata "wkwk" agar lawan bicara mengira Anda tertawa wajar, dan WhatsApp Mod Anti-Delete tidak mendeteksi ada pesan yang dihapus. Fotonya tetap tersedot otomatis ke Chat Pribadi Anda!
</details>

<details>
<summary><b>Q: Bagaimana jika lisensi saya habis?</b></summary>
A: Anda dapat memperpanjang masa aktif kapan saja dengan menghubungi Owner di WhatsApp atau Telegram. Kunci lisensi Anda akan langsung diperpanjang tanpa perlu instalasi ulang.
</details>

<details>
<summary><b>Q: Apakah bot ini membutuhkan kuota internet besar?</b></summary>
A: Tidak. Bot ini sangat hemat resource dan bandwidth karena memblokir sinkronisasi Story WhatsApp (@broadcast) dan Saluran (@newsletter) yang memakan kuota.
</details>

---

## ⚖️ Disclaimer

Program ini dibuat untuk tujuan edukasi, pembelajaran protokol Signal WhatsApp Multi-Device, dan pencadangan data pribadi (*personal backup*). Pengembang tidak bertanggung jawab atas segala bentuk penyalahgunaan perangkat lunak ini yang melanggar hukum privasi atau ketentuan layanan pihak ketiga.

---

<div align="center">
  <b>Developed with ❤️ by <a href="https://github.com/makhc1">makhc1</a></b><br>
  <sub>Copyright © 2026 RVO-SYSTEM. All rights reserved.</sub>
</div>
