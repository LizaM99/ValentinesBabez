function goToScreen(number) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(`screen${number}`).classList.add('active');
}

// NO button movement
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200;
  const y = Math.random() * 80;
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Quiz logic
function answer(correct) {
  const result = document.getElementById("quizResult");
  const nextBtn = document.getElementById("nextBtn");

  if (correct) {
    result.textContent = "Correct 💕 You know us so well.";
    nextBtn.style.display = "inline-block";
  } else {
    result.textContent = "Wrong 😤 Try again!";
  }
}

// Confetti (simple alert for now)
function confetti() {
  alert("🎉 I LOVE YOU 🎉");
}
