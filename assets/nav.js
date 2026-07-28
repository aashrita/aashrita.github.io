/* nav.js — shared navigation for aashrita.github.io
   Drop <div id="nav-root"></div> at the top of every page's <body>,
   then load this script. It injects the nav and marks the active link.

   To add a new nav item: edit the `links` array below. That's it.
*/

(function () {
  const links = [
    { label: "about",    href: "/index.html" },
    { label: "research", href: "/research.html" },
    { label: "wiki",     href: "/wiki.html" },
  ];

  // Resolve root-relative href against actual base
  // so this works both locally and on GitHub Pages
  const current = window.location.pathname.replace(/\/$/, "") || "/index.html";

  const navHTML = `
    <nav>
      <div class="container">
        <a class="nav-name" href="/index.html">aashrita mangu</a>
        <ul class="nav-links">
          ${links.map(l => {
            const href = l.href;
            // Mark active if path ends with this href or is root + about
            const isActive = current.endsWith(href.replace(/^\//, "")) ||
                             (current === "" && href === "/index.html") ||
                             (current === "/" && href === "/index.html");
            return `<li><a href="${href}"${isActive ? ' class="active"' : ""}>${l.label}</a></li>`;
          }).join("")}
        </ul>
      </div>
    </nav>
  `;

  const root = document.getElementById("nav-root");
  if (root) root.outerHTML = navHTML;
})();
