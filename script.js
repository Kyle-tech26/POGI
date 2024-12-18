
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.querySelector('.typing-text');
    const words = ['Im a Designer.', 'Im a Gamer.','Im a Programmer.','Front/Back-end Developer.'];
    let wordIndex = 0;
    let charIndex = 0;
    
    function typeWord() {
        if (charIndex < words[wordIndex].length) {
            typingText.textContent += words[wordIndex][charIndex];
            charIndex++;
            setTimeout(typeWord, 150); // Adjust typing speed here
        } else {
            setTimeout(deleteWord, 1000); // Pause before starting to delete
        }
    }
    
    function deleteWord() {
        if (charIndex > 0) {
            typingText.textContent = typingText.textContent.slice(0, -1);
            charIndex--;
            setTimeout(deleteWord, 100); // Adjust deleting speed here
        } else {
            wordIndex = (wordIndex + 1) % words.length; // Switch to next word
            setTimeout(typeWord, 500); // Pause before starting to type next word
        }
    }
    
    typeWord();
});
