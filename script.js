
function spinRoulette() {
    const input = document.getElementById("rouletteInput").value;
    const challenges = input.split(",").map(item => item.trim()).filter(item => item);
    const result = document.getElementById("rouletteResult");

    if (challenges.length === 0) {
        result.textContent = "Please enter some challenges!";
        return;
    }

    const randomIndex = Math.floor(Math.random() * challenges.length);
    result.textContent = "Selected Challenge: " + challenges[randomIndex];
}
