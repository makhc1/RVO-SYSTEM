// ============================================================
// KONFIGURASI SELFBOT AUTO-RVO
// ============================================================

export default {
  // ============================================================
  // SISTEM LISENSI (Wajib Diisi oleh Pengguna / Pembeli Bot)
  // ============================================================
  // Masukkan Kunci Lisensi resmi yang dibeli dari Owner (Contoh: "RVO-ABCD-1234-WXYZ")
  licenseKey: process.env.LICENSE_KEY || "",

  // Masukkan nomor HP akun WhatsApp kamu untuk Pairing Code (Contoh: "628123456789")
  // Jika dikosongkan (""), bot akan menanyakan nomor di terminal atau menampilkan QR Code.
  pairingNumber: process.env.PAIRING_NUMBER || "",

  // Aktifkan auto-download dan forward View-Once (true = aktif)
  autoRvo: true,

  // Kirim hasil View-Once otomatis ke "Pesan ke Diri Sendiri" (Chat with Yourself)
  sendToSelf: true,

  // Kirim juga hasil auto-rvo langsung ke obrolan/grup tempat pesan dikirim (true/false)
  // Set FALSE jika ingin mode rahasia (hanya masuk ke Chat Pribadi kamu tanpa teman tahu)
  autoRevealInCurrentChat: false,

  // Hapus otomatis pesan trigger reply kamu (misal ketik . atau .rvo) agar tidak ada jejak di roomchat
  deleteTriggerMessage: true,

  // Jika ingin diteruskan ke nomor WhatsApp lain atau nomor tertentu, isi di sini
  // (Contoh: "6289501524223" atau "628123456789")
  forwardToOtherNumber: "",

  // Simpan juga salinan file ke folder lokal "./saved_media" (true/false)
  saveToLocalFolder: true,

  // Lokasi folder penyimpanan media lokal
  mediaDir: "./saved_media",

  // Nama folder sesi login
  sessionDir: "./session",

  // Aktifkan Dashboard Web Admin Control Panel
  enableWeb: true,

  // Aktifkan Cloudflare Quick Tunnel (TryCloudflare: https://*.trycloudflare.com)
  // Membuat URL publik HTTPS otomatis gratis tanpa akun Cloudflare & tanpa buka port
  autoTunnel: true,

  // Kirim link publik Cloudflare otomatis ke Chat Pribadi (Chat with Yourself) saat bot aktif
  sendTunnelUrlToChat: true,

  // Mode Stealth: Aktifkan trigger buka media via React Emoji (Bisa emoji apa saja di HP)
  enableReactionTrigger: true,

  // Otomatis hapus kembali emoji reaction setelah media terkirim agar tidak ada jejak sama sekali
  autoRemoveReaction: true,

  // Port server web lokal (otomatis mengikuti environment PORT dari Pterodactyl jika ada)
  webPort: process.env.PORT ? parseInt(process.env.PORT) : 3000
};

