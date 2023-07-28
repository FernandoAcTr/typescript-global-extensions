# TypeScript Global Extensions

**typescript-global-extensions** is a TypeScript library that provides useful global extensions for built-in JavaScript objects. These extensions allow you to perform common operations on strings, arrays, dates, and numbers with ease, making your code more concise and expressive.

## Installation

To install the library, you can use npm or yarn:

```bash
npm install typescript-global-extensions
```

or

```bash
yarn add typescript-global-extensions
```

## Usage

To use the extensions, you need to import the library in your TypeScript project entry point (usually index.ts):

```typescript
import 'typescript-global-extensions'
```

Once imported, the extensions will be available globally on the respective built-in JavaScript objects.

## Available Extensions

### String Extensions

- `toNumber()`: Converts the string to a number.
- `toBoolean()`: Converts the string to a boolean value.
- `isValidUrl()`: Checks if the string represents a valid URL.
- `isAlphanumeric()`: Checks if the string contains only alphanumeric characters.
- `capitalize()`: Capitalizes the first letter of the string and converts the rest to lowercase.
- `reverse()`: Reverses the order of characters in the string.
- `in(...values: string[])`: Checks if the string is included in the provided values.
- `countOccurrences(substring: string)`: Counts the occurrences of a substring within the string.
- `truncate(maxLength: number, ellipsis?: string)`: Truncates the string to a specified maximum length and adds an ellipsis at the end if needed.
- `padLeft(char: string, maxLength: number): string`: Pads the left side of the string with a specified character to reach the desired maximum length.
- `padRight(char: string, maxLength: number): string`: Pads the right side of the string with a specified character to reach the desired maximum length.
- `toDate(): Date`: Converts the string to a Date object.

### Array Extensions

- `sum()`: Calculates the sum of all numeric elements in the array.
- `average()`: Calculates the average of all numeric elements in the array.
- `distinct()`: Returns a new array with unique elements from the original array.
- `first()`: Returns the first element of the array or undefined if the array is empty.
- `last()`: Returns the last element of the array or undefined if the array is empty.
- `isEmpty()`: Checks if the array is empty.
- `max()`: Returns the maximum numeric value in the array or undefined if the array is empty.
- `min()`: Returns the minimum numeric value in the array or undefined if the array is empty.
- `shuffle()`: Returns a new array with elements randomly shuffled.
- `groupBy(selector)`: Groups elements of the array based on a provided selector function.
- `remove(value)`: Returns a new array with all occurrences of the specified value removed.
- `replace(predicate, newValue)`: Returns a new array with elements replaced based on the provided predicate function.
- `notNone()`: Returns a new array with non-null and non-undefined elements.
- `chunk(chunkSize: number)`: Splits the array into multiple subarrays of a specific size.
- `difference(...arrays: T[][]): T[]`: Returns a new array of unique values not present in the other given arrays.
- `at(index: number)`: Returns the element at the specified index in the array or undefined if the index is out of bounds.
- `merge(...arrays: T[][]): T[]`: Returns a new array containing unique values from the original array and other given arrays.

### Date Extensions

- `addDays(days: number): Date`: Adds the specified number of days to the date.
- `addYears(years: number): Date`: Adds the specified number of years to the date.
- `addHours(hours: number): Date`: Adds the specified number of hours to the date.
- `addMinutes(minutes: number): Date`: Adds the specified number of minutes to the date.
- `add(otherDate: Date): Date`: Adds the date value of another Date object to the current date.
- `isSameDay(date: Date): boolean`: Checks if the current date is the same day as the given date.
- `isLeapYear(): boolean`: Checks if the current date's year is a leap year.

### Number Extensions

- `toFixedNumber(decimals: number): number`: Formats the number with a fixed number of decimals.
- `floor(): number`: Rounds down the number to the nearest integer less than or equal to it.
- `ceil(): number`: Rounds up the number to the nearest integer greater than or equal to it.
- `isPositive(): boolean`: Checks if the number is positive.
- `isNegative(): boolean`: Checks if the number is negative.
- `isEven(): boolean`: Checks if the number is even.
- `isOdd(): boolean`: Checks if the number is odd.
- `clamp(min: number, max: number): number`: Clamps the number within the specified range.
- `toRad(): number`: Converts the number from degrees to radians.
- `toDeg(): number`: Converts the number from radians to degrees.
- `isBetween(min: number, max: number): boolean`: Checks if the number is within the specified range (inclusive).
- `Math.randomInRange(min: number, max: number): number`: Generates a random number within the specified range (inclusive).

## Examples

### String Extensions

```typescript
import 'typescript-global-extensions'

const myString = '123'

console.log(myString.toNumber()) // Output: 123
console.log(myString.toBoolean()) // Output: true
console.log('http://www.google.com'.isValidUrl()) // Output: true
console.log('hello123'.isAlphanumeric()) // Output: true
console.log('hello world'.capitalize()) // Output: Hello world
console.log('hello'.reverse()) // Output: olleh
console.log('apple'.in('orange', 'banana', 'apple')) // Output: true
console.log('hello world, hello universe'.countOccurrences('hello')) // Output: 2
console.log('hello world'.truncate(5)) // Output: hello...
console.log('hello'.padLeft('0', 6)) // Output: 00hello
console.log('hello'.padRight('!', 8)) // Output: hello!!!
console.log('2023-07-29'.toDate()) // Output: Fri Jul 29 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
```

### Array Extensions

```typescript
import 'typescript-global-extensions'

const numbers = [1, 2, 3, 4, 5]

console.log(numbers.sum()) // Output: 15
console.log(numbers.average()) // Output: 3
console.log(numbers.distinct()) // Output: [1, 2, 3, 4, 5]
console.log(numbers.first()) // Output: 1
console.log(numbers.last()) // Output: 5
console.log(numbers.isEmpty()) // Output: false
console.log(numbers.max()) // Output: 5
console.log(numbers.min()) // Output: 1
console.log(numbers.shuffle()) // Output: [3, 1, 4, 5, 2]
console.log(numbers.groupBy((num) => num % 2 === 0)) // Output: [{ key: false, values: [1, 3, 5] }, { key: true, values: [2, 4] }]
console.log(numbers.remove(3)) // Output: [1, 2, 4, 5]
console.log(numbers.replace((num) => num % 2 === 0, 0)) // Output: [1, 0, 3, 0, 5]
console.log([1, null, 2, undefined, 3].notNone()) // Output: [1, 2, 3]
console.log(numbers.chunk(2)) // Output: [[1, 2], [3, 4], [5]]
console.log(numbers.difference([2, 4], [3, 5])) // Output: [1]
console.log(numbers.at(2)) // Output: 3
console.log(numbers.merge([4, 5, 6], [6, 7])) // Output: [1, 2, 3, 4, 5, 6, 7]
```

### Date Extensions

```typescript
import 'typescript-global-extensions'

const currentDate = new Date()

console.log(currentDate.addDays(2)) // Output: Date object representing the current date + 2 days
console.log(currentDate.addYears(1)) // Output: Date object representing the current date + 1 year
console.log(currentDate.addHours(3)) // Output: Date object representing the current date + 3 hours
console.log(currentDate.addMinutes(30)) // Output: Date object representing the current date + 30 minutes
console.log(currentDate.add(new Date(2023, 7, 30))) // Output: Date object representing the current date + the date value of another Date object
console.log(currentDate.isSameDay(new Date(2023, 7, 29))) // Output: true or false depending on whether the dates are the same day
console.log(currentDate.isLeapYear()) // Output: true or false depending on whether the current year is a leap year
```

### Number Extensions

```typescript
import 'typescript-global-extensions'

const num = 5.67

console.log(num.toFixedNumber(2)) // Output: 5.67
console.log(num.isPositive()) // Output: true
console.log(num.isNegative()) // Output: false
console.log(num.isEven()) // Output: false
console.log(num.isOdd()) // Output: true
console.log(num.clamp(0, 10)) // Output: 5.67
console.log(num.toRad()) // Output: 0.09869217247076875
console.log((180).toRad()) // Output: 3.141592653589793
console.log(num.toDeg()) // Output: 324.53267481786057
console.log(Math.PI.toDeg()) // Output: 180
console.log(num.isBetween(0, 10)) // Output: true
```

## Contributions

Contributions to this library are welcome! If you have any ideas
