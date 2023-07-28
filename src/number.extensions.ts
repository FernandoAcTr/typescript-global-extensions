export default {}

declare global {
  interface Number {
    toFixedNumber(decimals: number): number
    isPositive(): boolean
    isNegative(): boolean
    isEven(): boolean
    isOdd(): boolean
    clamp(min: number, max: number): number
    toRad(): number
    toDeg(): number
    isBetween(min: number, max: number): boolean
    ceil(): number
    floor(): number
  }

  interface Math {
    randomInRange(min: number, max: number): number
  }
}

/**
 * Formats the number with a fixed number of decimals.
 * @param decimals The number of decimal places to display.
 * @returns The formatted number as a new floating-point number.
 */
Number.prototype.toFixedNumber = function (decimals: number): number {
  return parseFloat(this.toFixed(decimals))
}

/**
 * Checks if the number is positive.
 * @returns True if the number is positive, false otherwise.
 */
Number.prototype.isPositive = function (): boolean {
  return Number(this) > 0
}

/**
 * Checks if the number is negative.
 * @returns True if the number is negative, false otherwise.
 */
Number.prototype.isNegative = function (): boolean {
  return Number(this) < 0
}

/**
 * Checks if the number is even.
 * @returns True if the number is even, false otherwise.
 */
Number.prototype.isEven = function (): boolean {
  return Number(this) % 2 === 0
}

/**
 * Checks if the number is odd.
 * @returns True if the number is odd, false otherwise.
 */
Number.prototype.isOdd = function (): boolean {
  return Number(this) % 2 !== 0
}

/**
 * Clamps the number within the specified range.
 * @param min The minimum value to clamp to.
 * @param max The maximum value to clamp to.
 * @returns The clamped number.
 */
Number.prototype.clamp = function (min: number, max: number): number {
  return Math.min(Math.max(Number(this), min), max)
}

/**
 * Converts the number from degrees to radians.
 * @returns The number converted to radians.
 */
Number.prototype.toRad = function (): number {
  return (Number(this) * Math.PI) / 180
}

/**
 * Converts the number from radians to degrees.
 * @returns The number converted to degrees.
 */
Number.prototype.toDeg = function (): number {
  return (Number(this) * 180) / Math.PI
}

/**
 * Checks if the number is within the specified range (inclusive).
 * @param min The minimum value of the range.
 * @param max The maximum value of the range.
 * @returns True if the number is between min and max (inclusive), false otherwise.
 */
Number.prototype.isBetween = function (min: number, max: number): boolean {
  return Number(this) >= min && Number(this) <= max
}

/**
 * Rounds down the number to the nearest integer less than or equal to it.
 * @returns The floor of the number as a new integer.
 */
Number.prototype.floor = function () {
  return Math.floor(Number(this))
}

/**
 * Rounds up the number to the nearest integer greater than or equal to it.
 * @returns The ceiling of the number as a new integer.
 */
Number.prototype.ceil = function () {
  return Math.ceil(Number(this))
}

/**
 * Generates a random number within the specified range (inclusive).
 * @param min The minimum value of the range.
 * @param max The maximum value of the range.
 * @returns A random number within the specified range.
 */
Math.randomInRange = function (min: number, max: number): number {
  return Math.random() * (max - min) + min
}
