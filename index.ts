import './src/string.extensions'
import './src/date.extensions'
import './src/number.extensions'
import './src/array.extensions'

export * from './src/string.extensions'
export * from './src/date.extensions'
export * from './src/number.extensions'
export * from './src/array.extensions'
export default {}

declare global {
  interface Array<T> {
    first(): T | undefined
    last(): T | undefined
    at(index: number): T | undefined
    sum(): number
    average(): number
    distinct(): T[]
    isEmpty(): boolean
    max(): number | undefined
    min(): number | undefined
    shuffle(): T[]
    groupBy<U>(selector: (e: T) => U): Array<{
      key: U
      values: Array<T>
    }>
    remove(value: T): T[]
    replace(predicate: (e: T) => boolean, newValue: T): T[]
    notNone(): T[]
    chunk(chunkSize: number): T[][]
    difference(...arrays: T[][]): T[]
    merge(...arrays: T[][]): T[]
  }

  interface Date {
    addDays(days: number): Date
    addYears(years: number): Date
    addHours(hours: number): Date
    addMinutes(minutes: number): Date
    isSameDay(date: Date): boolean
    isLeapYear(): boolean
  }

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
