const texts = ['Aaryaman Singh', 'Studying Mechanical Engineering'];
let textIndex = 0;
let charIndex = 0;
let typingDelay = 150;
let erasingDelay = 100;
let newTextDelay = 1000;
let initialText = "I'm ";
let element = document.getElementById('typing');

function type() {
  if (charIndex < texts[textIndex].length) {
    element.textContent = initialText + texts[textIndex].substring(0, charIndex + 1);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    element.textContent = initialText + texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    charIndex = 0;
    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOMContentLoaded event triggered");
  element.textContent = initialText;
  setTimeout(type, typingDelay);
});

document.addEventListener("pageshow", function(event) {
  console.log("Page show event triggered", event);
  if (!element || !element.textContent.includes(texts[textIndex])) {
    console.log("Restarting typing effect");
    element = document.getElementById('typing');  // Re-fetch the element to avoid any stale references
    element.textContent = initialText;
    setTimeout(type, typingDelay);
  }
});
