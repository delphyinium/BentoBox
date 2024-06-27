export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

export function getCurrentTimeInSC(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to Eastern Time (ET)
  const offsetET = -4; // Eastern Time is UTC-4 during Daylight Saving Time, UTC-5 during Standard Time
  now.setHours(now.getUTCHours() + offsetET);

  return now;
}

export function formatTimeForSC(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // This will format the time in 12-hour format with AM/PM
    timeZone: "America/New_York", // This covers Eastern Time, including South Carolina
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  // Append the time zone abbreviation. 
  // Note: ET is used for both EST and EDT to avoid confusion
  formattedTime += " ET";

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}