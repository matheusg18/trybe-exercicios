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
  const friday = [4, 11, 18, 25];
  const holiday = [24, 25, 31];
  const daysList = document.getElementById("days");

  for (const day of dezDaysList) {
    let dayListItem = document.createElement("li");
    dayListItem.className = "day";
    dayListItem.innerText = day;

    if (friday.includes(day)) {
      dayListItem.className += " friday";
    }

    if (holiday.includes(day)) {
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

// Functions Calls
createDays();
createHolidayButton("Feriados");
document
  .getElementById("btn-holiday")
  .addEventListener("click", holidaysHighlight);
