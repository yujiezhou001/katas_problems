const talkingCalendar = function(date) {
    const currentDate = new Date(date);
    const dataObj = {};
    dataObj.date = currentDate.getDate();
    dataObj.date = currentDate.getMonth();
    dataObj.year = currentDate.getFullYear();
    return currentDate.toDateString()
};
// create function that adds ordinal indicator after ordinal number for date
const datefn = (input) => {
    if (input === 1) {
      input += "st";
    } else if (input === 2) {
      input += "nd";
    } else if (input === 3) {
      input += "rd";
    } else {
      input += "th"
    }
    return input
}
// Month object that matches month number to readable month string
const month = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}

console.log(talkingCalendar("2017/12/02"));
// console.log(talkingCalendar("2007/11/11"));
// console.log(talkingCalendar("1987/08/24"));
  
//December 2nd, 2017
//November 11th, 2007
//August 24th, 1987

// const timeOptions = {
//     timeZone: "Canada/Eastern",
//     hour12: true,
//     hour: "numeric",
//     minute: "numeric",
//     seconds: "numeric"
//   };
  // new instance of Date object
//   const date = new Date();
  // convert date to readable day format
//   const day = date.toDateString();
  // convert date to local time format
//   const time = date.toLocaleTimeString("en-US", timeOptions);
  // HTTP request outputs: 
  // Date/time (format not important)
//   console.log("Date/time: ", day, time)

