function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Functions Declarations
function createDays() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const fridays = [4, 11, 18, 25];
  const holidays = [24, 25, 31];
  const daysList = document.getElementById("days");

  for (const day of dezDaysList) {
    let dayListItem = document.createElement("li");
    dayListItem.className = "day";
    dayListItem.innerText = day;

    if (fridays.includes(day)) {
      dayListItem.className += " friday";
    }

    if (holidays.includes(day)) {
      dayListItem.className += " holiday";
    }

    daysList.appendChild(dayListItem);
  }
}

function createHolidayButton(buttonName) {
  const holidayButton = document.createElement("button");
  holidayButton.innerText = buttonName;
  holidayButton.id = "btn-holiday";

  document.querySelector(".buttons-container").appendChild(holidayButton);
}

function holidaysHighlight() {
  const initialColor = "rgb(238, 238, 238)";
  const highlightColor = "rgb(255, 92, 247)";
  const holidays = document.getElementsByClassName("holiday");
  const isHighlighted = holidays[0].style.backgroundColor === highlightColor;

  if (isHighlighted) {
    for (const day of holidays) {
      day.style.backgroundColor = initialColor;
    }
  } else {
    for (const day of holidays) {
      day.style.backgroundColor = highlightColor;
    }
  }
}

function createFridayButton(buttonname) {
  const fridayButton = document.createElement("button");
  fridayButton.innerText = buttonname;
  fridayButton.id = "btn-friday";

  document.querySelector(".buttons-container").appendChild(fridayButton);
}

function fridayHighlight() {
  const highlightText = "Sextou!!!";
  const fridays = [4, 11, 18, 25];
  const fridaysListItems = document.getElementsByClassName("friday");
  const isHighlighted = fridaysListItems[0].innerText === highlightText;

  if (isHighlighted) {
    for (let i = 0; i < fridaysListItems.length; i += 1) {
      fridaysListItems[i].innerText = fridays[i];
    }
  } else {
    for (const fridayListItem of fridaysListItems) {
      fridayListItem.innerText = highlightText;
    }
  }
}

function dayZoom(event) {
  event.target.style.fontSize = "1.5em";
}

function dayBackToNormal(event) {
  event.target.style.fontSize = null;
}

function addEventListenerToDays() {
  const days = document.getElementsByClassName("day");

  for (const day of days) {
    day.addEventListener("mouseover", dayZoom);
    day.addEventListener("mouseout", dayBackToNormal);
    day.addEventListener("click", taskHighlight);
  }
}

function addTask(taskName) {
  const taskSpan = document.createElement("span");
  taskSpan.innerText = taskName;

  document.querySelector(".my-tasks").appendChild(taskSpan);
}

function colorAddedTask(color) {
  const coloredDiv = document.createElement("div");
  coloredDiv.className = "task";
  coloredDiv.style.backgroundColor = color;

  document.querySelector(".my-tasks").appendChild(coloredDiv);
}

function selectTask(event) {
  let isSelected = event.target.className.includes("selected");

  if (isSelected) {
    event.target.className = event.target.className.replace("selected", "");
    event.target.className = event.target.className.trim();
  } else {
    event.target.className += " selected";
  }
}

function taskHighlight(event) {
  const isColorSelected = document.querySelector(".selected") !== null;
  const initialColor = "#777";
  const highlightColor = document.querySelector(".task").style.backgroundColor;
  const isHighlighted = event.target.style.color === highlightColor;

  if (isColorSelected && !isHighlighted) {
    event.target.style.color = highlightColor;
  } else {
    event.target.style.color = initialColor;
  }
}

function addAppointment(event) {
  const inputField = document.getElementById("task-input");
  const isInputFieldEmpty = inputField.value === "";
  const wasTriggeredByInputField = event.target === inputField;

  if (
    (wasTriggeredByInputField && event.keyCode === 13) ||
    !wasTriggeredByInputField
  ) {
    if (isInputFieldEmpty) {
      alert("Campo de compromissos está vazio!");
    } else {
      const appointmentListItem = document.createElement("li");
      appointmentListItem.innerText = inputField.value;
      inputField.value = "";

      document.querySelector(".task-list").appendChild(appointmentListItem);
    }
  }
}

// Functions Calls
createDays();
createHolidayButton("Feriados");
createFridayButton("Sexta-feira");

const holidayButton = document.getElementById("btn-holiday");
const fridayButton = document.getElementById("btn-friday");

holidayButton.addEventListener("click", holidaysHighlight);
fridayButton.addEventListener("click", fridayHighlight);
addEventListenerToDays();
addTask("Terminar o exercicio");
colorAddedTask("red");

const colorTaskDiv = document.querySelector(".task");

colorTaskDiv.addEventListener("click", selectTask);

const addAppointmentButton = document.getElementById("btn-add");
const inputField = document.getElementById("task-input");

addAppointmentButton.addEventListener("click", addAppointment);
inputField.addEventListener("keyup", addAppointment);
