let root = document.querySelector(':root');

let themeSwitcher = document.querySelector('.mode-switcher');
let theme = localStorage.getItem('theme') || 'dark';
if (!theme && theme != 'light') localStorage.setItem('theme', 'dark');

setTheme(theme);

function setTheme(th) {
  let rootStyle = getComputedStyle(root);
  let landingImage = document.querySelector('#logo-landing');
  if (landingImage) landingImage.src = `../assets/guildpro_logos/logo-landing-${theme}.png`;

  root.style.setProperty('--background-color', `var(--background-color-${th})`);
  root.style.setProperty('--background-secondary', `var(--background-secondary-${th})`);
  root.style.setProperty('--text-color-main', `var(--text-color-main-${th})`);
  root.style.setProperty('--text-color-secondary', `var(--text-color-secondary-${th})`);
  root.style.setProperty('--text-color-highlight', `var(--text-color-highlight) !important`);

  themeSwitcher.innerText = rootStyle.getPropertyValue(`--mode-switcher-to-${th}`);
}

themeSwitcher.addEventListener('click', () => {
  localStorage.setItem('theme', theme == 'dark' ? 'light' : 'dark');

  location.reload();
});
