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

let Time = d.getUTCMilliseconds();
document.getElementById("currentUTC").innerHTML = Time;
