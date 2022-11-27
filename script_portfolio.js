const trigger = document.querySelector(".trigger");
const nav = document.querySelector(".full-screen-nav");
const backdrop = document.querySelector(".backdrop");
const container = document.querySelector(".container");
const body = document.querySelector("body");

// Creation de la classe open-nav quand la classe trigger est cliquer
trigger.addEventListener("click", () => nav.classList.add("open-nav"));
// Supprimer la classe open-nav quand l'utilisateur clique autre part
backdrop.addEventListener("click", () => nav.classList.remove("open-nav"));

// Creation de la classe open-nav quand la classe trigger est cliquer
trigger.addEventListener("click", () => container.classList.add("nav_is_open"));
// Supprimer la classe open-nav quand l'utilisateur clique autre part
backdrop.addEventListener("click", () =>
  container.classList.remove("nav_is_open")
);

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
