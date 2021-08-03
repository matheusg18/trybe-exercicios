const header = document.querySelector("header");
header.style.backgroundColor = "rgb(17, 176, 105)";

const footer = document.querySelector("footer");
footer.style.backgroundColor = "rgb(1, 53, 51)";

const emergencyTasks = document.querySelector(".emergency-tasks");
emergencyTasks.style.backgroundColor = "rgb(254, 159, 132)";

const noEmergencyTasks = document.querySelector(".no-emergency-tasks");
noEmergencyTasks.style.backgroundColor = "rgb(249, 219, 94)";

const emergencyTasksHeader = document.querySelectorAll(".emergency-tasks h3");
for (const header of emergencyTasksHeader) {
  header.style.backgroundColor = "rgb(165, 42, 243)";
}

const noEmergencyTasksHeader = document.querySelectorAll(
  ".no-emergency-tasks h3"
);
for (const header of noEmergencyTasksHeader) {
  header.style.backgroundColor = "rgb(35, 37, 37)";
}
