const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const message = document.getElementById('message');
const mainImage = document.getElementById('mainImage');
const questionText = document.getElementById('questionText'); // Assuming this is the ID of the question text element

// Update the image to a GIF when "Yes" is clicked
yesButton.addEventListener('click', () => {
  message.textContent = 'SHE SAID YESSSSSSS! ❤️❤️❤️❤️❤️❤️❤️❤️❤️';
  message.style.color = '#ffffff';
  message.style.fontWeight = 'bold';
  message.style.fontSize = '2em'; 

  // Change PNG to GIF
  mainImage.src = 'rajnandinii.gif';

  // Hide the question text and buttons
  questionText.style.display = 'none';
  yesButton.style.display = 'none';
  noButton.style.display = 'none';

  createHearts();
  setTimeout(() => {
    message.textContent += ' 🎉';
    launchConfetti();
  }, 500);
});

// Function to create and animate heart elements
function rainHearts() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  document.body.appendChild(heart);

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 2 + 3 + 's';

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Function to continuously create hearts
function createHearts() {
  setInterval(rainHearts, 300);
}

// Playful message when "No" is clicked
noButton.addEventListener('click', () => {
  message.textContent = 'Oh no! Are you sure? 😢';
  message.style.color = '#ff4d4d';
});

// Make "No" button move away
noButton.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});