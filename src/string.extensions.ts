export default {}

declare global {
  interface String {
    toNumber(): number | null
    toBoolean(): boolean | null
    toDate(): Date
    isValidUrl(): boolean
    isAlphanumeric(): boolean
    capitalize(): string
    reverse(): string
    in(...values: string[]): boolean
    countOccurrences(substring: string): number
    truncate(maxLength: number, ellipsis?: string): string
    padLeft(char: string, maxLength: number): string
    padRight(char: string, maxLength: number): string
  }
}

/**
 * Converts the string to a number.
 * @returns The numeric value of the string or null if the conversion fails.
 */
String.prototype.toNumber = function () {
  const numberValue = Number(this)
  if (isNaN(numberValue) || numberValue === Infinity) return null
  return numberValue
}

/**
 * Converts the string to a boolean value.
 * @returns True if the string is 'true' or '1', false if the string is 'false' or '0', or null if the conversion fails.
 */
String.prototype.toBoolean = function () {
  if (this === 'true' || this === '1') return true
  else if (this === 'false' || this === '0') return false
  return null
}

/**
 * Checks if the string represents a valid URL.
 * @returns True if the string is a valid URL, false otherwise.
 */
String.prototype.isValidUrl = function () {
  const value = this.toString()
  try {
    new URL(value)
    return true
  } catch (error) {
    return false
  }
}

/**
 * Checks if the string contains only alphanumeric characters (letters and digits).
 * @returns True if the string is alphanumeric, false otherwise.
 */
String.prototype.isAlphanumeric = function () {
  const value = this.toString()
  return /^[A-Za-z0-9]+$/.test(value)
}

/**
 * Capitalizes the first letter of the string and converts the rest of the string to lowercase.
 * @returns The string with the first letter capitalized and the rest in lowercase.
 */
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase()
}

/**
 * Reverses the order of characters in the string.
 * @returns The string with its characters reversed.
 */
String.prototype.reverse = function () {
  return this.split('').reverse().join('')
}

/**
 * Checks if the string is included in the provided values.
 * @param values The values to compare the string with.
 * @returns True if the string is included in the provided values, false otherwise.
 */
String.prototype.in = function (...values: string[]) {
  const value = this.toString()
  return values.includes(value)
}

/**
 * Counts the occurrences of a substring within the string.
 * @param substring The substring to count occurrences of.
 * @returns The number of occurrences of the substring in the string.
 */
String.prototype.countOccurrences = function (substring: string) {
  const regex = new RegExp(substring, 'g')
  return (this.match(regex) || []).length
}

/**
 * Truncates the string to a specified maximum length and adds an ellipsis at the end if needed.
 * @param maxLength The maximum length of the truncated string.
 * @param ellipsis The ellipsis to add at the end of the truncated string (default is '...').
 * @returns The truncated string with or without the ellipsis.
 */

String.prototype.truncate = function (maxLength: number, ellipsis: string = '...') {
  const value = this.toString()
  if (value.length <= maxLength) return value
  return value.slice(0, maxLength - ellipsis.length).trim() + ellipsis
}

/**
 * Pads the left side of the string with a specified character to reach the desired maximum length.
 * @param char The character used for padding.
 * @param maxLength The maximum length of the padded string.
 * @returns The padded string with the specified character on the left side.
 */
String.prototype.padLeft = function (char: string, maxLength: number): string {
  const value = this.toString()
  const diff = maxLength - value.length
  if (diff <= 0) return value

  const padding = char.repeat(diff)
  return padding + value
}

/**
 * Pads the right side of the string with a specified character to reach the desired maximum length.
 * @param char The character used for padding.
 * @param maxLength The maximum length of the padded string.
 * @returns The padded string with the specified character on the right side.
 */
String.prototype.padRight = function (char: string, maxLength: number): string {
  const value = this.toString()
  const diff = maxLength - value.length
  if (diff <= 0) return value

  const padding = char.repeat(diff)
  return value + padding
}

/**
 * Converts the string to a Date object.
 * @returns A Date object representing the date and time specified in the string.
 */
String.prototype.toDate = function (): Date {
  const value = this.toString()
  return new Date(value)
}
