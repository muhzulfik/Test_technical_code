function timeConversion(s) {
  const timeParts = s.match(/^(\d{2}):(\d{2}):(\d{2})(AM|PM)$/);

  let [, hour, minute, second, ampm] = timeParts;

  hour = parseInt(hour, 10);

  if (hour === 12) {
    hour = ampm === "AM" ? 0 : 12;
  } else {
    hour += ampm === "PM" ? 12 : 0;
  }

  return `${hour.toString().padStart(2, "0")}:${minute}:${second}`;
}

console.log(timeConversion("07:05:45PM"));
