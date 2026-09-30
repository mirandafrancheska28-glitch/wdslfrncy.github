document.addEventListener('DOMContentLoaded', () => {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(link => {
    if (link.dataset.page === current) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
  const form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      document.querySelector('#formStatus').textContent =
        'Thank you for your message! This demo form does not send or store submissions.';
      form.reset();
    });
  }
});