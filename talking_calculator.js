const talkingCalendar = function(date) {
    let currentDate = new Date(date);
    return currentDate.toDateString()
};
  
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

