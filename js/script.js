let taskAssignedCount = parseInt(document.getElementById("minus").innerText);
let completedCount = parseInt(document.getElementById("count").innerText);

function updateCounts() {
  document.getElementById("minus").innerText = taskAssignedCount;
  document.getElementById("count").innerText = completedCount;
}

function addToActivityLog(taskTitle) {
  const logContainer = document.getElementById("history-create");

  const logItem = document.createElement("p");
  logItem.classList.add("bg-gray-100", "p-2", "rounded-lg", "my-2", "text-sm");

  // Get current date and time
  const now = new Date();
  const formattedDate = now.toLocaleDateString();
  const formattedTime = now.toLocaleTimeString();

  logItem.innerText = `✅ Completed: ${taskTitle} on ${formattedDate} at ${formattedTime}`;

  logContainer.appendChild(logItem);
}

function handleCompleteButtonClick(event) {
  const button = event.target;
  const card = button.closest(".cards");

  if (!card) {
    console.error("No parent card found");
    return;
  }

  const taskTitle = card.querySelector("h3").innerText;

  alert(`Selected Card: ${taskTitle}`);

  addToActivityLog(taskTitle);

  alert("Task Added to Activity Log");

  taskAssignedCount -= 1;
  completedCount += 1;
  updateCounts();

  // Disable button
  button.innerText = "Disable";
  button.disabled = true;
  button.classList.add("opacity-90", "cursor-not-allowed");
}

function setupEventListeners() {
  const buttons = document.querySelectorAll(".btn-class");
  buttons.forEach((button) => {
    button.addEventListener("click", handleCompleteButtonClick);
  });
}

function init() {
  updateCounts();
  setupEventListeners();
}

init();
