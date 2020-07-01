const theme = localStorage.getItem('theme');
if (theme === 'dark') {
  document.documentElement.setAttribute('color-mode', 'dark');
  document.querySelector('.toggler').style.transform =
    'translateX(-145%) translateY(-50%)';
}

function changeMode(el) {
  if (document.documentElement.getAttribute('color-mode') === 'light') {
    document.documentElement.setAttribute('color-mode', 'dark');
    localStorage.setItem('theme', 'dark');
    el.style.transition = 'transform 0.2s ease-in-out';
    el.style.transform = 'translateX(-145%) translateY(-50%)';
  } else {
    document.documentElement.setAttribute('color-mode', 'light');
    localStorage.setItem('theme', 'light');
    el.style.transition = 'transform 0.2s ease-in-out';
    el.style.transform = 'translateX(0%) translateY(-50%)';
  }
}

//Event listener
const toggler = document.querySelector('.toggler');
toggler.addEventListener('click', (e) => changeMode(e.target));
