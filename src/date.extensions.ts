/**
 * Adds the specified number of days to the date.
 * @param days The number of days to add.
 * @returns A new Date object representing the date after adding the days.
 */
Date.prototype.addDays = function (days: number): Date {
  const date = new Date(this)
  date.setDate(date.getDate() + days)
  return date
}

/**
 * Adds the specified number of years to the date.
 * @param years The number of years to add.
 * @returns A new Date object representing the date after adding the years.
 */
Date.prototype.addYears = function (years: number): Date {
  const date = new Date(this)
  date.setFullYear(date.getFullYear() + years)
  return date
}

/**
 * Adds the specified number of minutes to the date.
 * @param minutes The number of minutes to add.
 * @returns A new Date object representing the date after adding the minutes.
 */
Date.prototype.addMinutes = function (minutes: number): Date {
  const date = new Date(this)
  date.setMinutes(date.getMinutes() + minutes)
  return date
}

/**
 * Adds the specified number of hours to the date.
 * @param hours The number of hours to add.
 * @returns A new Date object representing the date after adding the hours.
 */
Date.prototype.addHours = function (hours: number): Date {
  const date = new Date(this)
  date.setHours(date.getHours() + hours)
  return date
}

/**
 * Checks if the current date is the same day as the given date.
 * @param date The date to compare with the current date.
 * @returns True if the current date is the same day as the given date, false otherwise.
 */
Date.prototype.isSameDay = function (date: Date): boolean {
  return (
    this.getFullYear() === date.getFullYear() &&
    this.getMonth() === date.getMonth() &&
    this.getDate() === date.getDate()
  )
}

/**
 * Checks if the current date's year is a leap year.
 * @returns True if the year of the current date is a leap year, false otherwise.
 */
Date.prototype.isLeapYear = function (): boolean {
  const year = this.getFullYear()
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}
