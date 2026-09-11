/* width-toggle.js
   Shows the nav width control and handles narrow / wide / full switching.
   Width preference is saved per-page in localStorage.
*/
(function () {
  const WIDTHS = ['container', 'container-wide', 'container-full'];
  const KEY = 'page-width:' + window.location.pathname;

  function getContainer() {
    return document.querySelector('section .container, section .container-wide, section .container-full');
  }

  function setWidth(w) {
    const el = getContainer();
    if (!el) return;
    WIDTHS.forEach(c => el.classList.remove(c));
    el.classList.add(w);
    document.querySelectorAll('.nw-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.width === w);
    });
    try { localStorage.setItem(KEY, w); } catch (e) {}
  }

  function init() {
    const el = getContainer();
    if (!el) return; // no resizable container on this page

    // Show the nav width control
    const nav = document.getElementById('nav-width');
    if (nav) {
      nav.style.display = 'flex';
      nav.querySelectorAll('.nw-btn').forEach(btn => {
        btn.addEventListener('click', () => setWidth(btn.dataset.width));
      });
    }

    // Restore saved preference; default to narrow ('container')
    try {
      const saved = localStorage.getItem(KEY);
      setWidth(saved && WIDTHS.includes(saved) ? saved : 'container');
    } catch (e) {
      setWidth('container');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
