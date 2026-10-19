# Virney Store — Frontend

Platform top up game (Mobile Legends, Free Fire, PUBG, Valorant, dll). Frontend-first dengan data dummy; backend nanti Node.js/Express + PostgreSQL (Prisma), pembayaran Midtrans, supplier Digiflazz & VIPayment.

## Wajib dibaca sebelum mengubah UI

**`DESIGN.md`** — warna, font, bentuk sudut terpotong, komponen. Semua halaman harus mengikuti ini.

## Struktur

```
index.html          Beranda
css/base.css        Token + komponen + navbar + footer (SEMUA halaman)
css/home.css        Khusus beranda
js/data.js          Data dummy PRODUCTS (nanti diganti API GET /games)
js/home.js          Logika beranda: populer, katalog + filter, slider
js/nav.js           Menu mobile + render ikon Lucide (SEMUA halaman, muat terakhir)
assets/             Logo, emblem, maskot penguin, favicon
```

## Aturan

- HTML/CSS/JS biasa, tanpa framework & tanpa build step.
- Halaman baru: muat `css/base.css` + file CSS halaman itu sendiri (mis. `css/topup.css`), lalu `js/nav.js` paling akhir.
- Salin blok `<header class="nav">` dan `<footer>` dari `index.html` **persis**; ganti hanya `aria-current="page"` ke menu yang aktif.
- Pakai token CSS (`var(--emerald)` dll) — jangan tulis hex baru.
- Pakai komponen yang ada (`.facet`, `.btn`, `.chip`, `.card`, `.sec-head`) sebelum membuat yang baru. Komponen baru yang dipakai >1 halaman masuk ke `base.css`.
- Semua teks UI dalam Bahasa Indonesia santai.
- Harus responsif (cek 390px & 1366px) dan bisa dipakai pakai keyboard.

## Halaman yang direncanakan

- `topup.html?game=<slug>` — form User ID/Zone ID, pilih nominal, pilih metode bayar
- `cek-transaksi.html` — cari status pesanan
- `games.html` — katalog lengkap / daftar harga
- `login.html`, `register.html`
