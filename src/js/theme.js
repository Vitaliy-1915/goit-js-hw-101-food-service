const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
   
const bodyClass = document.body;
const onCheckboxChangeClassBody = document.querySelector('#theme-switch-toggle');
onCheckboxChangeClassBody.addEventListener('click', changeClassBody);

bodyClass.classList.add(localStorage.getItem('theme') === null
    ? Theme.LIGHT: localStorage.getItem('theme'),);

onCheckboxChangeClassBody.checked = localStorage.getItem('theme') === Theme.DARK;

function toggleTheme(add, rem) {
  bodyClass.classList.replace(rem, add);
  localStorage.setItem('theme', add);
};

function changeClassBody(event) {
  if (event.target.checked) {
    toggleTheme(Theme.DARK, Theme.LIGHT);
    return;
  }
  toggleTheme(Theme.LIGHT, Theme.DARK);
};