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

var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });