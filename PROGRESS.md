# Progress Web — handayanikemuning.com

> Dokumen ini untuk sesi Claude selanjutnya. Baca dulu sebelum lanjut coding.

## Status

- [x] **Homepage (`index.html`)** — sudah dibuat & diupdate. 4 card layanan final sudah sinkron: Jeep Adventure, Kereta Wisata, Outbound, River Tubing — masing-masing link ke folder detailnya. "Family Gathering" diganti "River Tubing". "Paket Gathering" di section #layanan diganti "Paket River Tubing". Galeri filter "Gathering" diganti "Tubing". Footer "Layanan Kami" sudah 4 link final. **v18: SEMUA `div.ph` placeholder diganti foto asli** — hero, 4 card layanan, CTA box, galeri 6 foto (2 jeep + 1 kereta + 2 outbound + 1 tubing). Galeri dipangkas dari 10 placeholder → 6 item sesuai stok unik. Grid galeri diubah dari `repeat(5,1fr)` → `repeat(3,1fr)` (rapi 2×3). Class `.media-cover` ditambah di style.css.
- [x] **`jeep-adventure/index.html`** — SUDAH JADI. Detail lengkap.
- [x] **`outbound/index.html`** — SUDAH JADI. Detail lengkap.
- [x] **`tubing/index.html`** — SUDAH JADI. Detail lengkap.
- [x] **`kereta-kelinci/index.html`** — SUDAH JADI. Detail lengkap: breadcrumb, hero + price badge Rp 20.000/orang, info-stats 4 kolom, itinerary 5 langkah (naik kereta → kebun teh → persawahan → foto → kembali), include/exclude, 3 paket harga (Tiket Reguler/Paket Keluarga/Paket Rombongan), galeri preview 6 foto, FAQ 5 soal, CTA box, footer.
- [ ] Halaman Galeri lengkap (`galeri/index.html`) — masih folder kosong.
- [x] **Foto asli — sudah dipasang ke `index.html` (homepage).** 12 dari 13 foto terpakai. `jeep-adventure-6.webp` (3 pria di jeep merah "Seafarer") = **CADANGAN**, belum dipakai di mana pun — simpan untuk halaman detail `jeep-adventure/` sesi berikutnya. Halaman detail (`jeep-adventure/`, `outbound/`, `tubing/`, `kereta-kelinci/`) dan `galeri/index.html` **MASIH placeholder** — nunggu sesi berikutnya.
- [x] **Logo & favicon asli** — sudah dipasang.
- [ ] Nomor WhatsApp asli — masih dummy (`6281234567890` di `main.js`).
- [ ] `sitemap.xml`, `robots.txt`, `.htaccess`, `deploy.sh` — masih placeholder.

## 4 Layanan Final (sudah sinkron di semua file)

| Layanan | Folder | Status |
|---|---|---|
| Jeep Adventure | `jeep-adventure/` | ✅ Selesai |
| Kereta Wisata | `kereta-kelinci/` | ✅ Selesai |
| Outbound Team Building | `outbound/` | ✅ Selesai |
| River Tubing | `tubing/` | ✅ Selesai |

## Struktur file saat ini

```
handayanikemuning/
├── index.html                  ← homepage, SUDAH JADI (4 layanan final sinkron)
├── PROGRESS.md                 ← file ini
├── 404.html                    (placeholder kosong)
├── sitemap.xml                 (placeholder kosong)
├── robots.txt                  (placeholder kosong)
├── .htaccess                   (placeholder kosong)
├── deploy.sh                   (placeholder kosong)
├── assets/
│   ├── css/style.css           ← SUDAH JADI
│   ├── js/main.js              ← SUDAH JADI
│   └── images/
│       ├── logo/               ← SUDAH JADI
│       ├── favicon/            ← SUDAH JADI
│       ├── jeep-adventure/     ← 6 foto WebP, SIAP — belum dipasang ke HTML
│       ├── outbound/           ← 3 foto WebP, SIAP — belum dipasang ke HTML
│       ├── tubing/             ← 2 foto WebP, SIAP — belum dipasang ke HTML
│       └── kereta-kelinci/     ← 2 foto WebP, SIAP — belum dipasang ke HTML
├── jeep-adventure/index.html   (SUDAH JADI)
├── kereta-kelinci/index.html   (SUDAH JADI — dibuat sesi ini)
├── outbound/index.html         (SUDAH JADI)
├── tubing/index.html           (SUDAH JADI)
├── galeri/index.html           (placeholder kosong — perlu diisi)
├── tentang-kami/index.html     (placeholder kosong)
└── kontak/index.html           (placeholder kosong)
```

## Arsitektur teknis (wajib dibaca sebelum edit)

- **WhatsApp:** semua CTA pakai `href="#"` + `data-wa="<pesan>"`. `main.js` otomatis inject jadi link `wa.me/<PHONE>?text=...`. Ganti nomor di konstanta `PHONE` di `assets/js/main.js`.
- **Font:** Poppins (heading) + Inter (body) via Google Fonts CDN.
- **Warna:** `--navy: #0F1B3D` | `--orange: #F4811F` | `--green: #20B358`
- **Placeholder foto:** semua `<div class="ph ...">` + title="..." menjelaskan foto yang dibutuhkan.

## Foto — Status per halaman

| Halaman | Status |
|---|---|
| `index.html` (homepage) | ✅ Semua foto terpasang (hero, 4 card, CTA, galeri 6 foto) |
| `jeep-adventure/index.html` | ⏳ Masih `div.ph` placeholder |
| `outbound/index.html` | ⏳ Masih `div.ph` placeholder |
| `tubing/index.html` | ⏳ Masih `div.ph` placeholder |
| `kereta-kelinci/index.html` | ⏳ Masih `div.ph` placeholder |
| `galeri/index.html` | ⏳ Belum dibuat |

**Foto cadangan belum terpakai:** `jeep-adventure/jeep-adventure-6.webp` (3 pria di jeep merah "Seafarer") → simpan untuk halaman detail jeep-adventure.


