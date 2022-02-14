const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let today = new Date();
// Thursday February 10 2022
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dow = weekday[today.getDay()];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let moy = month[today.getMonth()];
let dan = today.getDate();
let yan = today.getFullYear();
let formattedDate = `${dow} ${moy} ${dan} ${yan}`;

//11:19
let hour = today.getHours();
let minutes = today.getMinutes();
let formattedTime = `${hour}:${minutes}`;

const EntrySchema = new Schema(
  {
    entry: {
      type: Schema.Types.Mixed,
      default: {},
    },
    date: {
      type: String,
      default: formattedDate,
    },
    time: {
      type: String,
      default: formattedTime,
    },
  },
  { minimize: false }
);

module.exports = Entry = mongoose.model("entry", EntrySchema);
