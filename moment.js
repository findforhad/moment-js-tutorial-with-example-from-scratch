const moment = require("moment");

console.log(moment().format("DD/MM/YYYY"));

//#Get current date and time in the moment.
const date = moment();
console.log(date);

//#Manipulating Dates
const days = moment()
  .add(15, "days")
  .format("DD/MM/YYYY"); // adds 15 days to current date
const months = moment()
  .add(12, "months")
  .format("DD/MM/YYYY"); // adds 12 months to current date
const years = moment()
  .add(10, "years")
  .format("DD/MM/YYYY"); // adds 10 years to current dateconst date = moment();

console.log("Days", days);
console.log(".........");
console.log("Months", months);
console.log("..........");
console.log("Years", years);

//#Calculating the Difference Between Dates
const dateB = moment("2018-09-10");
const dateC = moment("1993-09-10");

console.log("Difference is ", dateB.diff(dateC, "days"), "days");
console.log("Difference is ", dateB.diff(dateC, "months"), "months");
console.log("Difference is ", dateB.diff(dateC, "years"), "years");

// #Date Comparison Methods
console.log(moment("2018-09-10").isAfter("2018-09-09")); // returns false
console.log(moment("2018-09-10").isAfter("2018-11-20")); // returns true

//#Time from now
console.log(moment([1993, 09, 10]).fromNow()); // 25 years ago

//#Parse as an Array
moment([1993]); // January 1st
moment([1993, 10]); // September 1st
moment([1993, 09, 10]); // September 10th
