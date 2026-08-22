document.querySelector('.menu-toggle')?.addEventListener('click',()=>document.querySelector('.main-nav')?.classList.toggle('open'));
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.main-nav')?.classList.remove('open')));
