// === LUCIDE ICONS: Initialize Lucide icons on page load ===
document.addEventListener("DOMContentLoaded", () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});
