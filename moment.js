const moment = require("moment");
require("moment-timezone");

function momentExp() {
  // Create moment instance
  const now = moment();

  // Format output into string
  console.log(now.format("YYYY-MM-DD HH:mm:ss"));
  console.log(now.format("YYYY MMM dddd DD"));

  // Change time
  const saturday = now.clone().add(1, "days").set("hour", 0);

  console.log(saturday.format("YYYY-MM-DD HH:mm:ss"));

  // Comparisons
  console.log(now);
  const todayIsBeforeSaturday = now.isBefore(saturday);
  console.log("Now is before saturday", todayIsBeforeSaturday);

  // Convert timezone
  const timezone = moment().tz("Europe/Stockholm");

  const timeInAsia = timezone.clone().tz("Asia/Seoul");

  console.log(timezone.format("HH:mm z"), timeInAsia.format("HH:mm z"));

  console.log(timezone.utc().format("HH:mm"));
}

// momentExp()

function checkBooking() {
    const bookedDatetimes = [
      "2023-01-23T08:00",
      "2023-02-15T12:30",
      "2023-02-15T13:30",
      "2023-03-10T09:45",
    ];

    function isDatetimeBooked(bookedDatetimes = [], datetime) {
        let isBooked = false

        isBooked = bookedDatetimes.some((dt) => {
            const dtMoment = moment(dt);
            const datetimeMoment = moment(datetime);
            const isSame = dtMoment.isSame(datetimeMoment)
            const diff = Math.abs(dtMoment.diff(datetimeMoment, "hour"));
            return isSame || diff === 0
        })

        return isBooked
    }
    
    console.log("Datetime is booked ", isDatetimeBooked(bookedDatetimes, "2023-02-15T14:31"));


}

checkBooking();
