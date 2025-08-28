// Dropdown menus
(function(){
  const menus = document.querySelector('nav.menus');
  if (!menus) return;
  const items = Array.from(menus.querySelectorAll('details'));
  function closeAll(except){ items.forEach(d => { if (d !== except) d.removeAttribute('open'); }); }
  items.forEach(d => {
    d.addEventListener('mouseenter', () => { d.setAttribute('open',''); closeAll(d); });
    d.addEventListener('mouseleave', () => { d.removeAttribute('open'); });
  });
  document.addEventListener('click', e => { if (!e.target.closest('nav.menus')) closeAll(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });
})();

// Back-to-top button
(function(){
  const toTop = document.getElementById('toTop');
  if (!toTop) return;
  const showAfter = 300;
  function onScroll(){ (window.scrollY > showAfter) ? toTop.classList.add('show') : toTop.classList.remove('show'); }
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();
  toTop.addEventListener('click', () => {
    window.scrollTo({ top:0, behavior:'smooth' });
    document.querySelectorAll('nav.menus details[open]').forEach(d => d.removeAttribute('open'));
  });
})();
