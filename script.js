function goToScreen(target) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  if (typeof target === "number") {
    document.getElementById(`screen${target}`).classList.add('active');
  } else {
    document.getElementById(`screen${target}`).classList.add('active');
  }
}



function showLock(button) {
  button.style.cursor = "not-allowed";
}

function hideLock(button) {
  button.style.cursor = "pointer";
}


let scrollIndex = 0;

/* function scrollPhotos(direction) {
  const strip = document.getElementById("photoStrip");
  const photos = strip.children;
  const visibleCount = 3;
  const photoHeight = 80 + 8; // image height + gap

  scrollIndex += direction;

  if (scrollIndex < 0) scrollIndex = 0;
  if (scrollIndex > photos.length - visibleCount) {
    scrollIndex = photos.length - visibleCount;
  }

  strip.style.transform = `translateY(-${scrollIndex * photoHeight}px)`;
}*/



// NO button movement
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.querySelector(".buttons");

noBtn.addEventListener("mouseover", () => {
  const containerRect = container.getBoundingClientRect();
  const yesRect = yesBtn.getBoundingClientRect();

  let x, y;
  let overlapping = true;

  while (overlapping) {
    x = Math.random() * (containerRect.width - noBtn.offsetWidth);
    y = Math.random() * (containerRect.height - noBtn.offsetHeight);

    const noRect = {
      left: containerRect.left + x,
      right: containerRect.left + x + noBtn.offsetWidth,
      top: containerRect.top + y,
      bottom: containerRect.top + y + noBtn.offsetHeight
    };

    overlapping = !(
      noRect.right < yesRect.left ||
      noRect.left > yesRect.right ||
      noRect.bottom < yesRect.top ||
      noRect.top > yesRect.bottom
    );
  }

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Password Logic
function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("passwordError");

  const correctPassword = "18/02/2024"; 

  if (input === correctPassword) {
    error.textContent = "";
    goToScreen(2);
  } else {
    error.textContent = "Hmm… try again 😏 And make sure to include the /";
  }
}


// Quiz logic
function answer(correct) {
  const result = document.getElementById("quizResult");
  const nextBtn = document.getElementById("nextBtn");

  if (correct) {
    result.textContent = "Correct 💕 Not too much of a goldfish memory then!";
    nextBtn.style.display = "inline-block";
  } else {
    result.textContent = "Wrong 😤 Try again!";
  }
}

// Confetti (simple alert for now)
function confetti() {
  alert("🎉 I LOVE YOU 🎉");
}
