const trigger = document.querySelector('.trigger');
const nav = document.querySelector('.full-screen-nav');
const backdrop = document.querySelector('.backdrop');
const container = document.querySelector('.container');

// Creation de la classe open-nav quand la classe trigger est cliquer
trigger.addEventListener('click', () => nav.classList.add('open-nav'));
// Supprimer la classe open-nav quand l'utilisateur clique autre part
backdrop.addEventListener('click', () => nav.classList.remove('open-nav'));

// Creation de la classe open-nav quand la classe trigger est cliquer
trigger.addEventListener('click', () => container.classList.add('nav_is_open'));
// Supprimer la classe open-nav quand l'utilisateur clique autre part
backdrop.addEventListener('click', () => container.classList.remove('nav_is_open'));
