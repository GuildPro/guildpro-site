let hasSeenHero = JSON.parse(localStorage.getItem('hasSeenHero')) || false;

if (!hasSeenHero) location.href = '/';
