/* nav.js — shared navigation for aashrita.github.io
   To add a nav item: edit the `links` array below only.
*/
(function () {
  const depth = window.location.pathname.split('/').length - 2;
  const root  = depth > 1 ? '../' : '';

  const links = [
    { label: "about",    href: root + "index.html" },
    { label: "research", href: root + "research.html" },
    { label: "thesis",   href: root + "thesis.html" },
    { label: "wiki",     href: root + "wiki.html" },
  ];

  const current = window.location.pathname;

  const navHTML = `
    <nav>
      <div class="container">
        <a class="nav-name" href="${root}index.html">aashrita mangu</a>
        <ul class="nav-links">
          ${links.map(l => {
            const isActive = current.endsWith(l.label === 'about' ? 'index.html' : l.label + '.html')
                          || (current.endsWith('/') && l.label === 'about');
            return `<li><a href="${l.href}"${isActive ? ' class="active"' : ''}>${l.label}</a></li>`;
          }).join('')}
        </ul>
      </div>
    </nav>`;

  const root_el = document.getElementById('nav-root');
  if (root_el) root_el.outerHTML = navHTML;
})();
