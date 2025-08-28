/* main.js — unified menus + back-to-top for all pages */

/* ===== 1) Build a consistent 4-dropdown navbar across pages ===== */
(function () {
  const menus = document.querySelector('nav.menus');
  if (!menus) return;

  const NAV_HTML = `
    <details data-menu="home">
      <summary>Home</summary>
      <ul>
        <li><a href="index.html">Landing page</a></li>
      </ul>
    </details>

    <details data-menu="gear">
      <summary>Gear</summary>
      <ul>
        <li><a href="gear.html#daily-desktop">Desktop</a></li>
        <li><a href="gear.html#compute">Homelabpcs</a></li>
        <li><a href="gear.html#network">Network</a></li>
        <li><a href="gear.html#services">Other</a></li>
      </ul>
    </details>

    <details data-menu="projects">
      <summary>Projects</summary>
      <ul>
        <li><a href="raspberrypi.html">Pi-hole + Unbound</a></li>
        <li><a href="proxmox.html">Proxmox</a></li>
      </ul>
    </details>

    <details data-menu="resources">
      <summary>Resources</summary>
      <ul>
        <li><a href="https://github.com/milinko92/kubernix.github.io/tree/main" target="_blank" rel="noopener">GitHub page</a></li>
        <li><a href="https://blog.kubernix.com" target="_blank" rel="noopener">Personal blog</a></li>
      </ul>
    </details>
  `.trim();

  // Standardize menu contents
  menus.innerHTML = NAV_HTML;

  // Dropdown UX: open on hover, close on leave/click outside/ESC
  const items = Array.from(menus.querySelectorAll('details'));
  function closeAll(except) {
    items.forEach(d => { if (d !== except) d.removeAttribute('open'); });
  }
  items.forEach(d => {
    d.addEventListener('mouseenter', () => { d.setAttribute('open', ''); closeAll(d); });
    d.addEventListener('mouseleave', () => { d.removeAttribute('open'); });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('nav.menus')) closeAll();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });

  // Optional: clicking the "Home" summary itself navigates to index.html
  const homeSummary = menus.querySelector('details[data-menu="home"] > summary');
  if (homeSummary) {
    homeSummary.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'index.html';
    });
    homeSummary.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.location.href = 'index.html';
      }
    });
  }
})();

/* ===== 2) Ensure anchor IDs exist on gear.html sections ===== */
(function () {
  const headingMap = {
    'Daily Desktop': 'daily-desktop',
    'Compute': 'compute',
    'Network': 'network',
    'Services': 'services'
  };
  document.querySelectorAll('h2').forEach(h => {
    const txt = (h.textContent || '').trim();
    if (headingMap[txt]) h.id = headingMap[txt];
  });
})();

/* ===== 3) Back-to-top button (with graceful injection if missing) ===== */
(function () {
  let toTop = document.getElementById('toTop');
  if (!toTop) {
    toTop = document.createElement('button');
    toTop.id = 'toTop';
    toTop.setAttribute('aria-label', 'Back to top');
    toTop.textContent = '↑ Top';
    document.body.appendChild(toTop);
  }

  const showAfter = 300;
  function onScroll() {
    (window.scrollY > showAfter)
      ? toTop.classList.add('show')
      : toTop.classList.remove('show');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelectorAll('nav.menus details[open]').forEach(d => d.removeAttribute('open'));
  });
})();
