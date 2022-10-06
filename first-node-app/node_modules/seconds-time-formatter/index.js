function timeConvert(options) {
  if(!options.seconds) return "Error: Please specify an amount of seconds!";

  const time = parseInt(options.seconds);

  let timeFormat;
  if(!options.format) timeFormat = "letters"
  else if(options.format) timeFormat = options.format.toLowerCase();
  const monthsAndWeeks = options.monthsAndWeeks || false;
  // const upTo = options.upTo.toLowerCase() || "y";

  // const hoursAllowed = /[hdwmy]/
  // const daysAllowed = /[dwmy]/
  // const weeksAllowed = /[wmy]/
  // const monthsAllowed = /[my]/

  let returnFormat;

  switch(timeFormat) {
    case "letters":
      returnFormat = 0;
      break;
    case "colons":
      returnFormat = 1;
      break;
    case "json":
      returnFormat = 2;
      break;
    case "words":
      returnFormat = 3;
      break;
  }

  if(isNaN(time)) return "Error: Time or amount of seconds could not be parsed as integer.";

  let secs = time;
  let mins = 0;
  let hrs = 0;
  let days = 0;
  let weeks = 0;
  let months = 0;
  let years = 0;

  if(secs >= 60) {
    mins = Math.floor(secs / 60);
    secs %= 60;

    if(mins >= 60) {
      hrs = Math.floor(mins / 60);
      mins %= 60;
      
      if(hrs >= 24) {
        days = Math.floor(hrs / 24);
        hrs %= 24;

        if(monthsAndWeeks) {
          if(days >= 7) {
            weeks = Math.floor(days / 7);
            days %= 7;
  
            if(weeks >= 4) {
              months = Math.floor(weeks / 4);
              weeks %= 4;
  
              if(months >= 12) {
                years = Math.floor(months / 12);
                months %= 12;
              }
            }
          }
        }
        else if(!monthsAndWeeks) {
          if(days >= 365) {
            years = Math.floor(days / 365);
            days %= 365;
          }
        }
      }
    }
  }

  /*
    0 - letters
    1 - colons
    2 - json
  */

  var returnVal;

  switch(returnFormat) {
    case 0:
      if(mins < 10) mins = "0" + mins
      if(secs < 10) secs = "0" + secs

      if(monthsAndWeeks) returnVal = `${years}y${months}M${weeks}w${days}d${hrs}h${mins}m${secs}s`;
      if(!monthsAndWeeks) returnVal = `${years}y${days}d${hrs}h${mins}m${secs}s`;
      break;
      
    case 1:
      if(mins < 10) mins = "0" + mins
      if(secs < 10) secs = "0" + secs

      if(monthsAndWeeks) returnVal = `${years}y ${months}m ${weeks}w ${days}d ${hrs}:${mins}:${secs}`;
      if(!monthsAndWeeks) returnVal = `${years}y ${days}d ${hrs}:${mins}:${secs}`;
      break;

    case 2:
      returnVal = {
        years: years,
        months: months,
        weeks: weeks,
        days: days,
        hours: hrs,
        minutes: mins,
        seconds: secs
      }
      break;

    case 3:
      if(monthsAndWeeks) returnVal = `${years} years, ${months} months, ${weeks} weeks, ${days} days, ${hrs} hours, ${mins} minutes, and ${secs} seconds`;
      if(!monthsAndWeeks) returnVal = `${years} years, ${days} days, ${hrs} hours, ${mins} minutes, and ${secs} seconds`;
      break;
  }

  return returnVal;
}

module.exports.timeConvert = timeConvert;