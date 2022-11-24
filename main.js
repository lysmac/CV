window.addEventListener("DOMContentLoaded", main);

function main() {
  const progress = convertToPercentage(totalCourseLength, courseProgress);
  console.log(progress);
  document.getElementById("progress").style.width = `${progress}%`;

  myEventListeners();
}

function myEventListeners() {
  const findus = document.getElementById("findus");
  const wille = document.getElementById("wille");
  const myface = document.getElementById("myface");

  findus.addEventListener("mouseover", () => {
    myface.classList.toggle("findusface");
  });
  findus.addEventListener("mouseout", () => {
    myface.classList.toggle("findusface");
  });

  wille.addEventListener("mouseover", () => {
    myface.classList.toggle("willeface");
  });
  wille.addEventListener("mouseout", () => {
    myface.classList.toggle("willeface");
  });
}

const startDate = new Date("2022-10-31");
const endDate = new Date("2023-02-03");
const currentDate = new Date();

const totalCourseLength = dateDifferential(startDate, endDate);
const courseProgress = dateDifferential(startDate, currentDate);

/**Tar ett datum och gör det till dagar istället för MS  */
function dateStringToDays(dirtyDate) {
  const cleanedDate = Math.ceil(dirtyDate / (1000 * 60 * 60 * 24));
  return cleanedDate;
}

/** Räknar ut differensen mellan två datum */
function dateDifferential(dateOne, dateTwo) {
  const dateOneClean = dateStringToDays(dateOne);
  const dateTwoClean = dateStringToDays(dateTwo);

  const differential = dateTwoClean - dateOneClean;
  return differential;
}

/** Hur stor del av progress är i procent av total. Rundar också av */
function convertToPercentage(total, progress) {
  const result = (progress * 100) / total;
  const roundedResult = Math.round(result);
  return roundedResult;
}

/** Kollar om dagens datum infaller mellan två angivna datum */
function isCourseActive(start, stop) {
  if (currentDate > start && currentDate < stop) {
    console.log("Det är mellan de aktuella datumen");
  } else {
    console.log("Datumet är inte mellan de aktuella datumen");
  }
}
