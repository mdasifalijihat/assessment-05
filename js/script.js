
const TOTAL_CARDS = document.querySelectorAll(".cards").length;
let taskAssignedCount = TOTAL_CARDS;  
let completedCount = 0;  

function updateCounts() {
    document.getElementById("minus").innerText = taskAssignedCount;
    document.getElementById("count").innerText = completedCount;
}

function addToActivityLog(taskTitle) {
    const logContainer = document.getElementById("history-create");
    const logItem = document.createElement("p");
    logItem.classList.add("bg-gray-100", "p-2", "rounded-lg", "my-2", "text-md",);

    // Get current date and time
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();

    logItem.innerText = `You have completed the task "${taskTitle}" on ${formattedDate} at ${formattedTime}`;
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

    // alert dynamic
    alert(`${taskTitle}`);

    addToActivityLog(taskTitle);
   

    taskAssignedCount -= 1;
    completedCount += 1;
    updateCounts();

    // Disable button 
    button.innerText = "Completed";
    button.disabled = true;
    button.classList.add("opacity-90", "cursor-not-allowed");

    // Check if all tasks 
    if (completedCount === TOTAL_CARDS) {
        alert("Congratulations! You have completed all tasks.")
    }
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

// Clear history button
document.querySelector(".btn-history-clear").addEventListener("click", function () {
    document.getElementById("history-create").innerHTML = "";
});
