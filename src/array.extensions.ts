/**
 * Calculates the sum of all numeric elements in the array.
 * @returns The sum of the numeric elements in the array.
 */
Array.prototype.sum = function () {
  return this.reduce((acc, curr) => acc + (typeof curr === 'number' ? curr : 0), 0)
}

/**
 * Calculates the average of all numeric elements in the array.
 * @returns The average of the numeric elements in the array.
 */
Array.prototype.average = function () {
  const sum = this.sum()
  return sum / this.length
}

/**
 * Returns a new array with unique elements, removing duplicates.
 * @returns A new array with unique elements.
 */
Array.prototype.distinct = function () {
  return this.filter((value, index, self) => self.indexOf(value) === index)
}

/**
 * Returns the first element of the array.
 * @returns The first element of the array or undefined if the array is empty.
 */
Array.prototype.first = function () {
  return this.length > 0 ? this[0] : undefined
}

/**
 * Returns the last element of the array.
 * @returns The last element of the array or undefined if the array is empty.
 */
Array.prototype.last = function () {
  return this.length > 0 ? this[this.length - 1] : undefined
}

/**
 * Checks if the array is empty.
 * @returns True if the array is empty, false otherwise.
 */
Array.prototype.isEmpty = function () {
  return this.length === 0
}

/**
 * Returns the maximum numeric value from the array.
 * @returns The maximum numeric value or undefined if the array is empty or contains non-numeric values.
 */
Array.prototype.max = function () {
  if (this.length === 0) return undefined
  return Math.max(...this.filter((value) => typeof value === 'number'))
}

/**
 * Returns the minimum numeric value from the array.
 * @returns The minimum numeric value or undefined if the array is empty or contains non-numeric values.
 */
Array.prototype.min = function () {
  if (this.length === 0) return undefined
  return Math.min(...this.filter((value) => typeof value === 'number'))
}

/**
 * Returns a new array with the elements randomly shuffled.
 * @returns A new array with elements randomly shuffled.
 */
Array.prototype.shuffle = function () {
  const array = this.slice()
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

/**
 * Groups the elements of the array based on the provided selector function.
 * @param selector A function that returns the key used for grouping.
 * @returns An array of objects with keys and corresponding grouped values.
 */
Array.prototype.groupBy = function (selector) {
  const map = new Map()
  for (const e of this) {
    const key = selector(e)
    const values = map.get(key)
    if (values) {
      values.push(e)
    } else {
      map.set(key, [e])
    }
  }
  return Array.from(map).map(([key, values]) => ({ key, values }))
}

/**
 * Returns a new array with all occurrences of the specified value removed.
 * @param value The value to be removed from the array.
 * @returns A new array with the specified value removed.
 */
Array.prototype.remove = function (value) {
  return this.filter((item) => item !== value)
}

/**
 * Returns a new array with elements replaced based on the given predicate.
 * @param predicate A function that returns true for elements to be replaced.
 * @param newValue The value to replace the elements that satisfy the predicate.
 * @returns A new array with elements replaced according to the predicate.
 */
Array.prototype.replace = function (predicate, newValue) {
  return this.map((e) => (predicate(e) ? newValue : e))
}

/**
 * Returns a new array with elements that are not null or undefined.
 * @returns A new array with non-null and non-undefined elements.
 */
Array.prototype.notNone = function () {
  return this.filter((item) => item != null || item != undefined)
}

/**
 * Divides the array into chunks of a specified size.
 * @param chunkSize The size of each chunk.
 * @returns An array of chunks, each containing chunkSize number of elements.
 */
Array.prototype.chunk = function (chunkSize: number) {
  const array = this
  const chunks: any[][] = []
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize))
  }
  return chunks
}

/**
 * Returns a new array of values that are not included in other given arrays.
 * Uses SameValueZero for equality comparisons.
 * The order and references of result values are determined by the first array.
 * @param arrays Arrays to compare and find differences with.
 * @returns A new array with unique values not included in the other given arrays.
 */
Array.prototype.difference = function <T>(...arrays: T[][]): T[] {
  const originalArray = this
  const valuesToExclude = new Set<T>()
  for (const array of arrays) {
    for (const value of array) {
      valuesToExclude.add(value)
    }
  }
  return originalArray.filter((value) => !valuesToExclude.has(value))
}

/**
 * Returns the element at the specified index in the array.
 * @param index The index of the element to retrieve.
 * @returns The element at the specified index, or undefined if the index is out of bounds.
 */
Array.prototype.at = function (index: number) {
  return this.length - 1 >= index ? this[index] : undefined
}

/**
 * Returns a new array that contains unique elements from the original array and other given arrays.
 * @param arrays Arrays to be merged with the original array.
 * @returns A new array with unique elements from all the arrays.
 */
Array.prototype.merge = function <T>(...arrays: T[][]): T[] {
  const uniqueValues = new Set<T>()
  for (const array of [this, ...arrays]) {
    for (const value of array) {
      uniqueValues.add(value)
    }
  }
  return Array.from(uniqueValues)
}
