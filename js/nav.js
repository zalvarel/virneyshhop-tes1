/* ==========================================================================
   VIRNEY STORE — nav.js
   Dipakai di SEMUA halaman. Muat paling akhir (setelah script halaman).
     1. Buka/tutup menu mobile
     2. Render ikon Lucide (<i data-lucide="nama-ikon">)
   ========================================================================== */

const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menuBtn");

if (nav && menuBtn) {
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
}

if (window.lucide) lucide.createIcons();
