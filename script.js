const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle('open');
  }
});
