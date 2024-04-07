const element = document.getElementById('typing');
const texts = ['Aaryaman Singh', 'Studying Mechanical Engineering @ UofT', 'Interested in Tech & Entrepreneurship'];
let textIndex = 0;
let charIndex = 0;
let typingDelay = 150;
let erasingDelay = 100;
let newTextDelay = 1000; // Adjusted for readability
let initialText = "I'm "; // Initial text to always show

// Adjust type function to append rather than replace
function type() {
  if (charIndex < texts[textIndex].length) {
    element.textContent = initialText + texts[textIndex].substring(0, charIndex + 1);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

// Adjust erase function to preserve initial text
function erase() {
  if (charIndex > 0) {
    element.textContent = initialText + texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textIndex++;
    if (textIndex >= texts.length) textIndex = 0;
    charIndex = 0; // Reset charIndex for the next text
    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Start typing with the initial text in place
  element.textContent = initialText;
  setTimeout(type, typingDelay);
});

