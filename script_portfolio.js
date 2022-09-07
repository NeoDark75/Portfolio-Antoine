const trigger = document.querySelector('.trigger');
const nav = document.querySelector('.full-screen-nav');
const backdrop = document.querySelector('.backdrop');
const container = document.querySelector('.container');
const body = document.querySelector('body');

// Creation de la classe open-nav quand la classe trigger est cliquer
trigger.addEventListener('click', () => nav.classList.add('open-nav'));
// Supprimer la classe open-nav quand l'utilisateur clique autre part
backdrop.addEventListener('click', () => nav.classList.remove('open-nav'));

// Creation de la classe open-nav quand la classe trigger est cliquer
trigger.addEventListener('click', () => container.classList.add('nav_is_open'));
// Supprimer la classe open-nav quand l'utilisateur clique autre part
backdrop.addEventListener('click', () => container.classList.remove('nav_is_open'));


document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      container.classList.add('nuit');
      body.classList.add('bodynuit');
      container.classList.remove('jour');
      body.classList.remove('bodyjour');
      console.log('Checked');
    } else {
      container.classList.add('jour');
      body.classList.add('bodyjour');
      container.classList.remove('nuit');
      body.classList.remove('bodynuit');
      console.log('Not checked');
    }
  });
});