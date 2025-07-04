function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
function filterProjects(category) {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.style.display = (category === 'all' || card.classList.contains(category)) ? 'block' : 'none';
  });
}
