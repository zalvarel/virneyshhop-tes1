# Virney Store — Design System

Panduan visual untuk semua halaman Virney Store. Semua token & komponen sudah ada di `css/base.css` — **pakai class yang ada, jangan bikin warna/bentuk baru.**

## Identitas

Diturunkan dari logo (V-mahkota kristal emerald + stik game) dan maskot (penguin bermahkota kristal, jubah emerald berlist emas).

- **Kristal / facet** → sudut terpotong, belah ketupat, bukan rounded/pill.
- **Emerald** → warna utama (tombol, aktif).
- **Emas** → aksen kedua (harga, promo, penanda judul). Pakai hemat.
- **Gelap** → latar selalu hitam-hijau. Tidak ada mode terang.

## Warna (`:root` di base.css)

| Token | Hex | Dipakai untuk |
|---|---|---|
| `--bg` | `#06140D` | Latar halaman |
| `--surface` | `#0A2117` | Isi kartu |
| `--surface-2` | `#0E2C1F` | Isi kartu saat hover |
| `--line` | `#174B37` | Border 1px semua komponen |
| `--emerald` | `#147A5A` | Tombol utama, chip aktif |
| `--emerald-2` | `#1E9C74` | Hover tombol, border saat hover/fokus |
| `--gem` | `#5FE0B4` | Ikon, link, titik aktif, outline fokus |
| `--gold` | `#D6A84E` | Harga, label promo, judul kolom footer, penanda section |
| `--text` | `#EAF4EE` | Teks utama |
| `--muted` | `#93AE9F` | Teks sekunder |

Dilarang: ungu, neon, glassmorphism, gradien warna-warni di UI (gradien hanya untuk latar hero & placeholder game).

## Tipografi

- **Judul** (`h1`, `h2`, nama brand, harga besar): `var(--font-display)` = **Chakra Petch** 700.
- **Teks biasa**: `var(--font-body)` = **Plus Jakarta Sans** 400/500/600.
- Sentence case. Tidak ada label ALL CAPS (kecuali wordmark "VIRNEY STORE").
- Ukuran: hero 30–54px · judul section 22–28px · body 15px · keterangan 12.5–14px.

## Bentuk

- **Sudut terpotong** di kiri-atas & kanan-bawah. Tidak ada `border-radius`.
- Ukuran potongan (`--c`): tombol/chip 8–9px · kartu 12–14px · hero 22px.
- **Belah ketupat** (`rotate(45deg)`) menggantikan bullet, dot slider, penanda menu aktif.
- Border selalu 1px `--line`, berubah ke `--emerald-2` saat hover.

## Komponen

| Class | Fungsi | Catatan |
|---|---|---|
| `.facet` | Kotak bersudut potong + border 1px | Dasar semua kartu. Atur `--c` (potongan) & `--fill` (warna isi) |
| `.btn .btn-primary` | Tombol utama emerald | Satu per area |
| `.btn .btn-gold` | Tombol promo/flash sale | Jarang dipakai |
| `.btn .btn-ghost .facet` | Tombol garis | Wajib pakai `.facet` |
| `.tag` | Label emas kecil | Untuk promo/status |
| `.chip .facet` | Filter/tab | Aktif: `aria-selected="true"` |
| `.sec-head` | Judul section + deskripsi | `<h2>` otomatis dapat belah ketupat emas |
| `.card .facet` | Kartu game di `.grid` | Isi: `.art` + `.card-body` |
| `.art` | Gambar game | Placeholder pakai `--c1`, `--c2`, inisial di `<span>` |
| `.grid` | Grid kartu | 6 → 4 → 3 → 2 kolom |
| `.diamond` | Penanda belah ketupat emas | |

Contoh:

```html
<!-- Kartu biasa -->
<div class="facet" style="padding:20px">Isi</div>

<!-- Kartu dengan potongan besar & isi emerald -->
<div class="facet" style="--c:20px; --fill:var(--emerald)">Isi</div>

<!-- Tombol -->
<a class="btn btn-primary" href="#">Top up sekarang</a>
<a class="btn btn-ghost facet" href="#">Masuk</a>

<!-- Judul section -->
<div class="sec-head"><div><h2>Pilih nominal</h2><p>Harga sudah termasuk pajak.</p></div></div>
```

## Ikon

[Lucide](https://lucide.dev) via `<i data-lucide="nama-ikon"></i>`, dirender oleh `js/nav.js`. Ukuran 16–20px, warna `--gem` untuk ikon dekoratif.

## Aset (`assets/`)

| File | Pakai di |
|---|---|
| `logo-emblem.png` | Navbar (tinggi 44px desktop / 38px HP) |
| `logo-virney-store.webp` | Footer (lebar 230px). Jangan di navbar — tulisannya jadi terlalu kecil |
| `mascot-penguin.webp` | Hero beranda, state kosong/error, halaman sukses |
| `favicon.png` | `<link rel="icon">` |

Maskot penguin = elemen paling mencolok. Satu kali per halaman, jangan ditempel di mana-mana.

## Layout

- Konten di dalam `.wrap` (maks 1200px, padding kiri-kanan `--gutter`).
- Jarak antar section: `.section` (48px atas).
- Rata kiri. Tengah hanya untuk tombol "Tampilkan lebih banyak".
- Breakpoint: `1024px` (tablet) dan `720px` (HP).

## Copywriting

- Bahasa Indonesia santai, sapa "kamu".
- Tombol = aksi jelas: "Top up sekarang", "Cek transaksi", bukan "Submit".
- State kosong/error: jelaskan apa yang terjadi + apa yang bisa dilakukan, tanpa minta maaf.
