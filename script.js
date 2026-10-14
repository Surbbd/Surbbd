document.getElementById('year').textContent = new Date().getFullYear();
const menuButton = document.getElementById('menuButton');
const nav = document.getElementById('nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));
// Replace these placeholders with your own details before publishing.
const profile = {
  name: 'YOUR NAME',
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://www.linkedin.com/'
};
document.querySelectorAll('.brand').forEach(el => {
  el.innerHTML = `<span class="mark">${profile.name.trim().charAt(0).toUpperCase() || 'Y'}.</span> ${profile.name}`;
});
document.title = `${profile.name} — Developer Portfolio`;
document.getElementById('emailLink').href = `mailto:${profile.email}`;
document.getElementById('githubLink').href = profile.github;
document.getElementById('linkedinLink').href = profile.linkedin;
