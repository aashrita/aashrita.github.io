/* width-toggle.js
   Auto-injects narrow / wide / full toggle into any page that loads this script.
   Width preference is saved per-page in localStorage.
*/
(function () {
  const WIDTHS = ['container', 'container-wide', 'container-full'];
  const LABELS = { 'container': 'narrow', 'container-wide': 'wide', 'container-full': 'full' };
  const KEY = 'page-width:' + window.location.pathname;

  function getContainer() {
    return document.querySelector('section .container, section .container-wide, section .container-full');
  }

  function setWidth(w) {
    const el = getContainer();
    if (!el) return;
    WIDTHS.forEach(c => { el.classList.remove(c); });
    el.classList.add(w);
    document.querySelectorAll('.width-toggle button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.width === w);
    });
    try { localStorage.setItem(KEY, w); } catch (e) {}
  }

  function inject() {
    const el = getContainer();
    if (!el || el.querySelector('.width-toggle')) return; // already present

    const bar = document.createElement('div');
    bar.className = 'width-toggle';
    bar.setAttribute('aria-label', 'Page width');

    WIDTHS.forEach(w => {
      const btn = document.createElement('button');
      btn.textContent = LABELS[w];
      btn.dataset.width = w;
      if (el.classList.contains(w)) btn.classList.add('active');
      btn.addEventListener('click', () => setWidth(w));
      bar.appendChild(btn);
    });

    el.insertBefore(bar, el.firstChild);

    // Restore saved preference
    try {
      const saved = localStorage.getItem(KEY);
      if (saved && WIDTHS.includes(saved)) setWidth(saved);
    } catch (e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
