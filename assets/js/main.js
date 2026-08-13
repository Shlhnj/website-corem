// Scroll reveal for sections and shoreline dividers
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal, .shoreline-divider').forEach((el) => io.observe(el));
}

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navlinks = document.querySelector('.navlinks');
if (toggle && navlinks) {
  toggle.addEventListener('click', () => {
    const open = navlinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Language toggle (EN / ID), persisted in localStorage
(function () {
  const buttons = document.querySelectorAll('[data-lang-btn]');
  if (!buttons.length) return;

  function setActiveButton(lang) {
    buttons.forEach((b) => b.classList.toggle('active', b.getAttribute('data-lang-btn') === lang));
  }

  function setLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    try { localStorage.setItem('corem-lang', lang); } catch (e) {}
    setActiveButton(lang);
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang-btn')));
  });

  const current = document.documentElement.getAttribute('data-lang') || 'en';
  setActiveButton(current);
})();
