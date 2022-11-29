window.addEventListener("DOMContentLoaded", main);

function main() {
  const progress = convertToPercentage(totalCourseLength, courseProgress);
  console.log("progress-main", progress);
  document.getElementById("progress").style.width = `${progress}%`;
  myEventListeners();
  addActiveCourses();
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

const allMyCourses = [
  {
    courseName: "HTML och CSS",
    startDate: new Date("2022-09-12"),
    endDate: new Date("2022-10-07"),
  },
  {
    courseName: "UX och Usability",
    startDate: new Date("2022-10-10"),
    endDate: new Date("2022-10-28"),
  },
  {
    courseName: "JavaScript Grundkurs",
    startDate: new Date("2022-10-31"),
    endDate: new Date("2023-02-03"),
  },
  {
    courseName: "JavaScript Fördjupning",
    startDate: new Date("2023-02-06"),
    endDate: new Date("2023-03-31"),
  },
  {
    courseName: "Dynamisk Webbutveckling",
    startDate: new Date("2023-04-03"),
    endDate: new Date("2023-06-02"),
  },
  {
    courseName: "Grafiska verktyg för Gränssnittsdesign",
    startDate: new Date("2023-06-05"),
    endDate: new Date("2023-08-18"),
  },

  {
    courseName: "Projektarbete med agila metoder",
    startDate: new Date("2023-08-21"),
    endDate: new Date("2023-09-08"),
  },
  {
    courseName: "LIA 1",
    startDate: new Date("2023-09-11"),
    endDate: new Date("2023-11-17"),
  },
  {
    courseName: "Arbetsmetodik för Utvecklare",
    startDate: new Date("2023-11-20"),
    endDate: new Date("2023-12-15"),
  },
  {
    courseName: "Examensarbete",
    startDate: new Date("2023-12-04"),
    endDate: new Date("2024-01-26"),
  },
  {
    courseName: "LIA 2",
    startDate: new Date("2024-01-29"),
    endDate: new Date("2024-05-17"),
  },
];

function addActiveCourses() {
  allMyCourses.forEach((value) => {
    if (value.startDate > currentDate) {
      document.getElementById("remainingCourses").innerHTML += `
      <div>
      ${value.courseName}
      </div>`;
    } else {
      if (isCourseActive(value.startDate, value.endDate)) {
        document.getElementById("activeCourses").innerHTML += `
      <div>
      ${value.courseName} <br>
      ${progressBarFunction(value.startDate, value.endDate)} %
      <br>
      ${value.endDate}
      
      </div>`;
      } else {
        document.getElementById("completedCourses").innerHTML += `
      <div>
      ${value.courseName}
      </div>`;
      }
    }
  });
}

const startDate = new Date("2022-10-31");
const endDate = new Date("2023-02-03");
const currentDate = new Date();

const educationStart = new Date("2022-09-12");
const educationEnd = new Date("2024-05-17");

const totalCourseLength = dateDifferential(startDate, endDate);
const courseProgress = dateDifferential(startDate, currentDate);

function progressBarFunction(start, end) {
  const dagensDatum = new Date();
  const totalKurslangd = dateDifferential(start, end);
  const kursProgression = dateDifferential(start, dagensDatum);

  const hurGarDet = convertToPercentage(totalKurslangd, kursProgression);
  console.log(hurGarDet);
  return hurGarDet;
}

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
  let isDateActive;
  if (currentDate > start && currentDate < stop) {
    isDateActive = true;
  } else {
    isDateActive = false;
  }
  return isDateActive;
}
