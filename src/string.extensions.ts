String.prototype.toNumber = function () {
  const numberValue = Number(this)
  if (isNaN(numberValue) || numberValue === Infinity) return null
  return numberValue
}

String.prototype.toBoolean = function () {
  if (this === 'true' || this === '1') return true
  else if (this === 'false' || this === '0') return false
  return null
}

String.prototype.isValidUrl = function () {
  const value = this.toString()
  try {
    new URL(value)
    return true
  } catch (error) {
    return false
  }
}

String.prototype.isAlphanumeric = function () {
  const value = this.toString()
  return /^[A-Za-z0-9]+$/.test(value)
}

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase()
}

String.prototype.reverse = function () {
  return this.split('').reverse().join('')
}

String.prototype.in = function (...values: string[]) {
  const value = this.toString()
  return values.includes(value)
}

String.prototype.countOccurrences = function (substring: string) {
  const regex = new RegExp(substring, 'g')
  return (this.match(regex) || []).length
}

String.prototype.truncate = function (maxLength: number, ellipsis: string = '...') {
  const value = this.toString()
  if (value.length <= maxLength) return value
  return value.slice(0, maxLength - ellipsis.length).trim() + ellipsis
}

String.prototype.padLeft = function (char: string, maxLength: number): string {
  const value = this.toString()
  const diff = maxLength - value.length
  if (diff <= 0) return value

  const padding = char.repeat(diff)
  return padding + value
}

String.prototype.padRight = function (char: string, maxLength: number): string {
  const value = this.toString()
  const diff = maxLength - value.length
  if (diff <= 0) return value

  const padding = char.repeat(diff)
  return value + padding
}

String.prototype.toDate = function (): Date {
  const value = this.toString()
  return new Date(value)
}
