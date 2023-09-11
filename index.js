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

let time1 = d.getUTCHours();
let time2 = d.getUTCMinutes();
let time3 = d.getUTCSeconds();
let time4 = d.getUTCMilliseconds();
let Time = `${time1}${time2}${time3}${time4}`;
document.getElementById("currentUTC").innerHTML = Time;
console.log(Time);
