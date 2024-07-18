document.addEventListener("DOMContentLoaded", () => {
  const flowersContainer = document.querySelector(".flowers");
  const birdsContainer = document.querySelector(".birds");
  const sorryText = document.getElementById("sorry");
  const loveText = document.getElementById("love");

  // Create and animate flowers
  for (let i = 0; i < 30; i++) {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.top = `${Math.random() * 100}%`;
    flower.style.left = `${Math.random() * 100}%`;
    flowersContainer.appendChild(flower);
  }

  // Create and animate birds
  for (let i = 0; i < 5; i++) {
    const bird = document.createElement("div");
    bird.classList.add("bird");
    bird.style.top = `${Math.random() * 80 + 10}%`;
    bird.style.left = `${Math.random() * 80 + 10}%`;
    bird.style.animationDelay = `${Math.random() * 10}s`;
    birdsContainer.appendChild(bird);
  }

  // Animate text
  setTimeout(() => {
    sorryText.style.opacity = 1;
    setTimeout(() => {
      loveText.style.opacity = 1;
    }, 2000);
  }, 1000);
});
