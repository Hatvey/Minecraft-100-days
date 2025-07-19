
const daysContainer = document.getElementById("daysContainer");

function updateProgress() {
  const dayBlocks = document.querySelectorAll(".day-block");
  let totalChecked = 0;
  let totalBoxes = 0;

  dayBlocks.forEach(block => {
    const checkboxes = block.querySelectorAll('input[type="checkbox"]');
    const checked = block.querySelectorAll('input[type="checkbox"]:checked');
    const percent = (checked.length / checkboxes.length) * 100;
    totalChecked += checked.length;
    totalBoxes += checkboxes.length;

    const fill = block.querySelector(".day-progress-fill");
    fill.style.width = `${percent}%`;
  });

  const overall = (totalChecked / totalBoxes) * 100;
  document.getElementById("progressFill").style.width = `${overall}%`;
}

const goalTexts = Array.from({ length: 100 }, (_, i) => `Goal ${i + 1}`);

for (let day = 1; day <= 10; day++) {
  const start = (day - 1) * 10;
  const dayGoals = goalTexts.slice(start, start + 10);
  const dayDiv = document.createElement("div");
  dayDiv.className = "day-block";

  const h3 = document.createElement("h3");
  h3.textContent = `Day ${day}`;
  dayDiv.appendChild(h3);

  const progressBar = document.createElement("div");
  progressBar.className = "day-progress-bar";
  progressBar.innerHTML = `<div class="day-progress-fill"></div>`;
  dayDiv.appendChild(progressBar);

  const ul = document.createElement("ul");
  dayGoals.forEach(goal => {
    const li = document.createElement("li");
    li.innerHTML = `<label><input type="checkbox" onchange="updateProgress()"> ${goal}</label>`;
    ul.appendChild(li);
  });

  dayDiv.appendChild(ul);
  daysContainer.appendChild(dayDiv);
}

function runRoulette() {
  const players = document.getElementById("playerNames").value.trim().split("\n").filter(p => p);
  const challenges = document.getElementById("challenges").value.trim().split("\n").filter(c => c);

  if (players.length === 0 || challenges.length === 0) {
    alert("Please enter player names and challenges.");
    return;
  }

  const player = players[Math.floor(Math.random() * players.length)];
  const challenge = challenges[Math.floor(Math.random() * challenges.length)];

  document.getElementById("rouletteResult").textContent = `${player} will do: ${challenge}`;
}
