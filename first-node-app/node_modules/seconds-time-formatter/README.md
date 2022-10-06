# What is it?
 A NodeJS package for converting seconds to formatted time!
 Time can be converted and returned in JSON format, in words, and more.

# Intallation
 `npm i seconds-time-formatter`

# How to Use
 ```js
  // Require the package
  const timeFormatter = require("seconds-time-formatter");

  console.log(
    timeFormatter.timeConvert({
      seconds: 513215645, // Amount of seconds
      format: "words", // In what format you want the output to be  returned.
      monthsAndWeeks: true
      // By default false, because of how it's hard to convert days and weeks to months.
      // If you do enable it, 1 month = 4 weeks. If not, 1 year = 365 days.
    }
  ));
 ```

# Options

### Seconds
 The amount of seconds you want to convert.

 ```js
  const timeFormatter = require("seconds-time-formatter");

  console.log(
    timeFormatter.timeConvert({
      seconds: 132
    }
  ));

  // Will output 0y0M0w0d0h02m12s
 ```

### Format
 This is optional. It specifies how you want to be
 returned the converted time. Defaults to "letters" if not specified.

 ```js
  const timeFormatter = require("seconds-time-formatter");

  console.log(
    timeFormatter.timeConvert({
      seconds: 132,
      format: "json"
    }
  ));

  /*
  Will output:

  {
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 2,
    seconds: 12
  }
  */
 ```

 Valid formats include:
 - "letters" - `...1h02m03s`
 - "colons" - `...3w 2d 1:02:03`
 - "json" - `{years: 1, months: 2 ...}`
 - "words" - `1 year, 2 months, 3 weeks...`

### Months and Weeks
 By default, this is set to false. This is because of how
 frustrating it is to convert weeks into months
 and converting weeks into years.

 While disabled, 365 days will convert into 1 year, skipping over
 weeks and months.

 While enabled, 7 days convert into a week, 4 weeks convert
 into a month, and 12 months convert into a year.