const talkingCalendar = function(date) {
    const currentDate = new Date(date);
    const dataObj = {};
    dataObj.date = currentDate.getDate();
    dataObj.month = currentDate.getMonth();
    dataObj.year = currentDate.getFullYear();
    return `${monthObj[dataObj.month]} ${dataObj.date}, ${dataObj.year}`
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
      input += "th";
    }
    return input
}
// Month object that matches month number to readable month string

const monthObj = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
  }

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
  
//December 2nd, 2017
//November 11th, 2007
//August 24th, 1987



