
const moment = require("moment")
require("moment-timezone")

// Create moment instance
const now = moment();

// Format output into string
console.log(now.format("YYYY-MM-DD HH:mm:ss"))
console.log(now.format("YYYY MMM dddd DD"))

// Change time
const saturday = now.clone().add(1, "days").set("hour", 0)

console.log(saturday.format("YYYY-MM-DD HH:mm:ss"))

// Comparisons
console.log(now)
const todayIsBeforeSaturday = now.isBefore(saturday)
console.log("Now is before saturday", todayIsBeforeSaturday)


// Convert timezone
const timezone = moment().tz("Europe/Stockholm")

const timeInAsia = timezone.clone().tz("Asia/Seoul")

console.log(timezone.format("HH:mm z"), timeInAsia.format("HH:mm z"))

console.log(timezone.utc().format("HH:mm"))
