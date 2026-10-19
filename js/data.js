/* ==========================================================================
   VIRNEY STORE — data.js
   Data dummy produk (frontend-first). Nanti diganti fetch ke API Express: GET /games
   Bentuk satu item:
     slug  : id unik di URL           → topup.html?game=<slug>
     name  : nama game/produk
     pub   : publisher / keterangan singkat
     cat   : "game" | "voucher" | "pulsa" | "hiburan"   (sama dengan data-cat di chip)
     init  : inisial untuk placeholder gambar
     c1,c2 : warna placeholder (latar & kristal)
     from  : harga termurah (teks)
     pop   : true = tampil di "Populer sekarang"
     img   : (opsional) path gambar, contoh "assets/games/mobile-legends.webp"
   ========================================================================== */

const PRODUCTS = [
  // --- Top up game ---
  { slug: "mobile-legends",   name: "Mobile Legends",      pub: "Moonton",        cat: "game", init: "ML", c1: "#1F5A7A", c2: "#E9B949", from: "Rp1.500",  pop: true },
  { slug: "free-fire",        name: "Free Fire",           pub: "Garena",         cat: "game", init: "FF", c1: "#9A4A1C", c2: "#F2C14E", from: "Rp1.000",  pop: true },
  { slug: "pubg-mobile",      name: "PUBG Mobile",         pub: "Tencent",        cat: "game", init: "PG", c1: "#6B5A2E", c2: "#D9C38A", from: "Rp4.500",  pop: true },
  { slug: "valorant",         name: "Valorant",            pub: "Riot Games",     cat: "game", init: "VL", c1: "#8A2F35", c2: "#F07E7E", from: "Rp15.000", pop: true },
  { slug: "genshin-impact",   name: "Genshin Impact",      pub: "HoYoverse",      cat: "game", init: "GI", c1: "#2E5E6B", c2: "#BFE3D0", from: "Rp16.000", pop: true },
  { slug: "honor-of-kings",   name: "Honor of Kings",      pub: "Level Infinite", cat: "game", init: "HK", c1: "#7A5A1F", c2: "#F5D58A", from: "Rp3.000",  pop: true },
  { slug: "magic-chess",      name: "Magic Chess: Go Go",  pub: "Moonton",        cat: "game", init: "MC", c1: "#245B4A", c2: "#9BE3C3", from: "Rp2.000" },
  { slug: "cod-mobile",       name: "Call of Duty Mobile", pub: "Activision",     cat: "game", init: "CD", c1: "#3B4A3A", c2: "#B9C7A3", from: "Rp5.000" },
  { slug: "honkai-star-rail", name: "Honkai: Star Rail",   pub: "HoYoverse",      cat: "game", init: "HS", c1: "#2F4A6B", c2: "#C9D8EE", from: "Rp16.000" },
  { slug: "roblox",           name: "Roblox",              pub: "Roblox Corp.",   cat: "game", init: "RB", c1: "#4A4F55", c2: "#E5E7EA", from: "Rp15.000" },
  { slug: "arena-of-valor",   name: "Arena of Valor",      pub: "Garena",         cat: "game", init: "AV", c1: "#5E3A1F", c2: "#E9A86A", from: "Rp3.000" },
  { slug: "point-blank",      name: "Point Blank",         pub: "Zepetto",        cat: "game", init: "PB", c1: "#5A2A2A", c2: "#D98C6A", from: "Rp10.000" },

  // --- Voucher ---
  { slug: "google-play",  name: "Google Play",       pub: "Gift card", cat: "voucher", init: "GP", c1: "#1F6B4E", c2: "#F2C14E", from: "Rp20.000" },
  { slug: "steam-wallet", name: "Steam Wallet",      pub: "Valve",     cat: "voucher", init: "SW", c1: "#22384F", c2: "#8FB3D9", from: "Rp12.000" },
  { slug: "garena-shell", name: "Garena Shells",     pub: "Garena",    cat: "voucher", init: "GS", c1: "#8A3A1C", c2: "#F2A65A", from: "Rp10.000" },
  { slug: "psn",          name: "PlayStation Store", pub: "Sony",      cat: "voucher", init: "PS", c1: "#1F3D7A", c2: "#9DB8EE", from: "Rp100.000" },

  // --- Pulsa & data ---
  { slug: "telkomsel", name: "Telkomsel", pub: "Pulsa & paket data", cat: "pulsa", init: "TS",  c1: "#8A2530", c2: "#F59A9A", from: "Rp5.500" },
  { slug: "indosat",   name: "Indosat",   pub: "Pulsa & paket data", cat: "pulsa", init: "IM3", c1: "#8A6A15", c2: "#F5D25A", from: "Rp5.500" },
  { slug: "xl",        name: "XL Axiata", pub: "Pulsa & paket data", cat: "pulsa", init: "XL",  c1: "#1F4A7A", c2: "#8FC3EE", from: "Rp5.500" },
  { slug: "tri",       name: "Tri",       pub: "Pulsa & paket data", cat: "pulsa", init: "3",   c1: "#3A3F55", c2: "#C9CCE0", from: "Rp5.500" },

  // --- Hiburan ---
  { slug: "spotify", name: "Spotify Premium", pub: "Langganan", cat: "hiburan", init: "SP", c1: "#1A5E3A", c2: "#7FE0A8", from: "Rp25.000" },
  { slug: "netflix", name: "Netflix",         pub: "Langganan", cat: "hiburan", init: "NF", c1: "#6B1F1F", c2: "#E56A6A", from: "Rp54.000" },
  { slug: "vidio",   name: "Vidio Premier",   pub: "Langganan", cat: "hiburan", init: "VD", c1: "#7A2A45", c2: "#F09AB5", from: "Rp29.000" },
];
