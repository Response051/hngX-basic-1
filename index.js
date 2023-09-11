// Current Day Of the week code.
const Weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();
let Day = Weekday[d.getDay()];
document.getElementById("currentDay").innerHTML = Day;

// Current UTC Time In Milliseconds

setInterval(displayMilliseconds, 1000);

function displayMilliseconds(Time) {
  let time1 = d.getUTCHours();
  let time2 = d.getUTCMinutes();
  let time3 = d.getUTCSeconds();
  let time4 = d.getUTCMilliseconds();
  Time = `${time1}:${time2}:${time3}:${time4}`;
  document.getElementById("currentUTC").innerHTML = Time;
}

// function getCurrentUTCTimeInMilliseconds() {
//   const now = new Date();
//   return now.getUTCMilliseconds();
// }

// function displayCurrentUTCTime() {
//   const utcTimeInMilliseconds = getCurrentUTCTimeInMilliseconds();
//   document.getElementById("currentUTC").innerHTML = utcTimeInMilliseconds;
// }

// // Display the current UTC time and update it every second (1000 milliseconds)
// setInterval(displayCurrentUTCTime, 1000);
