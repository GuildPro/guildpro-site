let localStorage = window.localStorage;

slidePage(false);

let arrow = document.querySelector('.arrow span');
let scrollPage = document.querySelector('.scroll');

arrow.addEventListener('click', e => {
  // slidePage(true);
  let hero = document.querySelector('.hero');
  hero.classList.add('slidingOut');
  hero.style.visibility = 'hidden';

  scrollPage.classList.add('slidingIn');
  localStorage.setItem('hasSeenHero', 'true');
  // location.reload();
});

scrollPage.addEventListener('animationend', e => {
  // let homeContainer = document.querySelector('.home-container');

  // homeContainer.classList.add('slidingIn');
  location.href = '/main.html';
});

function slidePage(clicked) {
  console.log('clicked', clicked);
  let homePage = document.querySelector('.home');
  let scrollPage = document.querySelector('.scroll');
  let hero = document.querySelector('.hero');
  if (localStorage.getItem('hasSeenHero') === 'true') return (location.href = '/main.html');
  if (localStorage.getItem('hasSeenHero') === 'false' || !clicked) {
    hero.classList.add('recover');
    homePage.classList.add('recoverPage');
    scrollPage.style.visibility = 'hidden';

    return;
  } else hero.classList.add('hidden');
}
