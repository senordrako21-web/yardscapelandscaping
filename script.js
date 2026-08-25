document.querySelector('.menu-toggle')?.addEventListener('click', () => {
  const nav = document.querySelector('.nav nav');
  if (nav) nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
});
