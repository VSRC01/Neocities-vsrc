const body = document.body;
const toggleBtn = document.getElementById('theme_button');

let theme = localStorage.getItem('theme');

if (!theme) {
  theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' ;
}

body.classList.add(theme);

toggleBtn.addEventListener('click', (e) => {
  const newTheme = body.classList.contains('dark') ? 'light' : 'dark';
  body.classList.remove('dark', 'light');
  body.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
});
