document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href$=".ipa"]');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      link.setAttribute('aria-label', 'Downloading Animal Sounds 2.0.ipa');
    });
  });
});
