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
