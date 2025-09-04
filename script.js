
// Theme toggle with localStorage
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');

function setTheme(next) {
  if (next === 'light') root.classList.add('light');
  else root.classList.remove('light');
  localStorage.setItem('theme', next);
}

const saved = localStorage.getItem('theme');
if (saved) setTheme(saved);
toggle?.addEventListener('click', () => {
  const nowLight = root.classList.toggle('light');
  localStorage.setItem('theme', nowLight ? 'light' : 'dark');
});

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
