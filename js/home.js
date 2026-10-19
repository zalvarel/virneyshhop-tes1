/* ==========================================================================
   VIRNEY STORE — home.js
   Logika khusus beranda. Butuh data.js (PRODUCTS) dimuat lebih dulu.
     1. Helper render (art, card, pop)
     2. Populer sekarang
     3. Katalog: filter kategori (chip) + pencarian
     4. Slider promo hero
   ========================================================================== */


/* 1. HELPER RENDER -------------------------------------------------------- */

// Gambar game: placeholder inisial, ditimpa <img> kalau product.img ada
function renderArt(p) {
  const img = p.img ? `<img src="${p.img}" alt="" loading="lazy">` : "";
  return `<div class="art" style="--c1:${p.c1};--c2:${p.c2}" aria-hidden="true"><span>${p.init}</span>${img}</div>`;
}

// Kartu di grid katalog
function renderCard(p) {
  return `
    <a class="card facet" href="topup.html?game=${p.slug}">
      ${renderArt(p)}
      <div class="card-body"><b>${p.name}</b><small>${p.pub}</small></div>
    </a>`;
}

// Baris di "Populer sekarang"
function renderPop(p) {
  return `
    <a class="pop facet" href="topup.html?game=${p.slug}">
      ${renderArt(p)}
      <span><b>${p.name}</b><small>${p.pub}</small></span>
      <span class="from">mulai<strong>${p.from}</strong></span>
    </a>`;
}

const stripTags = (s) => s.replace(/[<>&"]/g, "");


/* 2. POPULER SEKARANG ----------------------------------------------------- */
document.getElementById("popular").innerHTML =
  PRODUCTS.filter((p) => p.pop).map(renderPop).join("");


/* 3. KATALOG -------------------------------------------------------------- */
const grid = document.getElementById("grid");
const searchInputs = document.querySelectorAll('input[type="search"]');
let activeCat = "game";
let query = "";

function renderGrid() {
  const q = query.trim().toLowerCase();
  // Kalau sedang mencari: cari di semua kategori. Kalau tidak: tampilkan kategori aktif.
  const list = PRODUCTS.filter((p) => (q ? p.name.toLowerCase().includes(q) : p.cat === activeCat));

  grid.innerHTML = list.length
    ? list.map(renderCard).join("")
    : `<div class="empty">
         <img src="assets/mascot-penguin.webp" alt="">
         <div><b>"${stripTags(q)}" belum ada di Virney Store</b>Coba kata kunci lain, atau minta game ini lewat Chat CS.</div>
       </div>`;
}

// Klik chip kategori
document.getElementById("chips").addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  document.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-selected", c === chip));
  activeCat = chip.dataset.cat;
  query = "";
  searchInputs.forEach((i) => (i.value = ""));
  renderGrid();
});

// Ketik di kolom cari (navbar desktop & mobile)
searchInputs.forEach((input) =>
  input.addEventListener("input", (e) => {
    query = e.target.value;
    renderGrid();
    if (query && window.scrollY < 200) document.getElementById("katalog").scrollIntoView({ block: "start" });
  })
);

renderGrid();


/* 4. SLIDER PROMO --------------------------------------------------------- */
const SLIDE_INTERVAL = 5000; // ms
const slider = document.getElementById("slider");
const slides = [...slider.querySelectorAll(".slide")];
const dotsBox = document.getElementById("dots");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
let current = 0;
let timer;

// Buat titik (belah ketupat) sesuai jumlah slide
slides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.setAttribute("aria-label", `Tampilkan promo ${i + 1}`);
  dot.addEventListener("click", () => { goTo(i); restart(); });
  dotsBox.appendChild(dot);
});

function goTo(i) {
  current = (i + slides.length) % slides.length;
  slides.forEach((s, j) => s.classList.toggle("active", j === current));
  [...dotsBox.children].forEach((d, j) => d.classList.toggle("active", j === current));
}

function restart() {
  clearInterval(timer);
  if (!reduceMotion) timer = setInterval(() => goTo(current + 1), SLIDE_INTERVAL);
}

document.getElementById("prev").addEventListener("click", () => { goTo(current - 1); restart(); });
document.getElementById("next").addEventListener("click", () => { goTo(current + 1); restart(); });

// Berhenti saat kursor di atas banner
slider.addEventListener("mouseenter", () => clearInterval(timer));
slider.addEventListener("mouseleave", restart);

// Swipe di HP
let touchX = 0;
slider.addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX), { passive: true });
slider.addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 40) { goTo(current + (dx < 0 ? 1 : -1)); restart(); }
});

restart();
