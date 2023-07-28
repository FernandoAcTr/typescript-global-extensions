Date.prototype.addDays = function (days: number): Date {
  const date = new Date(this)
  date.setDate(date.getDate() + days)
  return date
}

Date.prototype.addYears = function (years: number): Date {
  const date = new Date(this)
  date.setFullYear(date.getFullYear() + years)
  return date
}

Date.prototype.addMinutes = function (minutes: number): Date {
  const date = new Date(this)
  date.setMinutes(date.getMinutes() + minutes)
  return date
}

Date.prototype.addHours = function (hours: number): Date {
  const date = new Date(this)
  date.setHours(date.getHours() + hours)
  return date
}

Date.prototype.isSameDay = function (date: Date): boolean {
  return (
    this.getFullYear() === date.getFullYear() &&
    this.getMonth() === date.getMonth() &&
    this.getDate() === date.getDate()
  )
}

Date.prototype.isLeapYear = function (): boolean {
  const year = this.getFullYear()
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}
