const toggle = document.getElementById('theme');
     const body = document.body;

     toggle.addEventListener('click', ()=>{
         body.classList.toggle('dark')
    })

//const themeButton = document.getElementById('theme');
        //const body = document.body;

        //themeButton.addEventListener('click', () => {
            // Toggle the "dark" class on the body
           // body.classList.toggle('dark');
        //});

const words = ["learn", "connect", "build futures", "enjoy the world", "make friends"];
let wordIndex = 0;
let charIndex = 0;
const typewriter = document.querySelector('.typewriter');

function type() {
    if (wordIndex === words.length) {
        wordIndex = 0;
    }
    
    const currentWord = words[wordIndex];
    if (charIndex < currentWord.length) {
        typewriter.textContent += currentWord.charAt(charIndex);
        charIndex++;
        setTimeout(type, 150); // Adjust typing speed here
    } else {
        setTimeout(erase, 1000); // Wait before erasing
    }
}

function erase() {
    if (charIndex > 0) {
        const currentWord = words[wordIndex];
        typewriter.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100); // Adjust erasing speed here
    } else {
        wordIndex++;
        setTimeout(type, 500); // Delay before typing the next word
    }
}

// Start the typewriter effect
type();

const menuButton = document.getElementById('menu-button');
const featureList = document.querySelector('.feature-list');

menuButton.addEventListener('click', () => {
  featureList.classList.toggle('open');
  menuButton.classList.toggle('close');
});

featureList.addEventListener('click', () => {
  featureList.classList.remove('open');
  menuButton.classList.remove('close');
});
