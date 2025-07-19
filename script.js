const challenges = [
  {
    title: "Goal 1",
    goals: [
      "Collect 20 stacks of cobblestone",
      "Gather 2 stacks of coal",
      "Mine 3 stacks of iron",
      "Collect 2 stacks of gold"
    ]
  },
  {
    title: "Goal 2",
    goals: [
      "Craft full iron armor",
      "Build a stone sword and shield",
      "Make 10 torches",
      "Create a safe shelter"
    ]
  },
  {
    title: "Goal 3",
    goals: [
      "Build a wheat farm",
      "Fence an area for animals",
      "Collect 10 seeds and plant them",
      "Tame one animal"
    ]
  },
  {
    title: "trading iron farm",
    goals: [
      "Collect 2100 stone bricks & 1148 glass",
      "Gather 112 beds & 112 villagers",
      "Prepare 559 trapdoors, 504 logs, 12 hoppers",
      "Assemble and test the full build"
    ]
  }
];

const challengesContainer = document.getElementById("challengesContainer");

challenges.forEach((challenge, index) => {
  const challengeDiv = document.createElement("div");
  challengeDiv.className = "challenge";

  const title = document.createElement("h2");
  title.textContent = challenge.title;
  challengeDiv.appendChild(title);

  const progressBar = document.createElement("div");
  progressBar.className = "progress-bar";
  progressBar.innerHTML = `<div class="progress-fill" id="progress-${index}"></div>`;
  challengeDiv.appendChild(progressBar);

  const ul = document.createElement("ul");
  challenge.goals.forEach(goal => {
    const li = document.createElement("li");
    li.innerHTML = `<label><input type="checkbox" onchange="updateProgress()"> ${goal}</label>`;
    ul.appendChild(li);
  });

  challengeDiv.appendChild(ul);
  challengesContainer.appendChild(challengeDiv);
});

function updateProgress() {
  let totalGoals = 0;
  let totalChecked = 0;

  challenges.forEach((_, index) => {
    const challengeDiv = document.querySelectorAll(".challenge")[index];
    const checkboxes = challengeDiv.querySelectorAll('input[type="checkbox"]');
    const checked = [...checkboxes].filter(cb => cb.checked).length;
    const percent = (checked / checkboxes.length) * 100;
    document.getElementById(`progress-${index}`).style.width = percent + "%";

    totalGoals += checkboxes.length;
    totalChecked += checked;
  });

  const overallPercent = (totalChecked / totalGoals) * 100;
  document.getElementById("mainProgress").style.width = overallPercent + "%";
}
