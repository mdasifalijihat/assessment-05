
let taskAssignedCount = parseInt(document.getElementById('minus').innerText);
let completedCount = parseInt(document.getElementById('count').innerText);

function updateCounts(){
    document.getElementById('minus').innerText = taskAssignedCount;
    document.getElementById('count').innerText = completedCount;
}