// Smooth scrolling for navbar links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Search alert (dummy example)
const searchBtn = document.querySelector('button.bg-orange-500');
const searchInput = document.querySelector('input[type=text]');

if (searchBtn && searchInput) {
  searchBtn.addEventListener('click', () => {
    alert(`Searching for: ${searchInput.value}`);
  });
}
