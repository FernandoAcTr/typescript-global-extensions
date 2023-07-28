import '../src'

describe('String extensions', () => {
  test('toNumber', () => {
    expect('5'.toNumber()).toBe(5)
    expect('f'.toNumber()).toBe(null)
  })

  test('toBoolean', () => {
    expect('5'.toBoolean()).toBe(null)
    expect('true'.toBoolean()).toBe(true)
    expect('false'.toBoolean()).toBe(false)
    expect('1'.toBoolean()).toBe(true)
    expect('0'.toBoolean()).toBe(false)
  })

  test('isValidUrl', () => {
    expect('invalid'.isValidUrl()).toBe(false)
    expect('http://www.google.com'.isValidUrl()).toBe(true)
  })

  test('isAlphanumeric', () => {
    expect('invalid'.isAlphanumeric()).toBe(true)
    expect('123a'.isAlphanumeric()).toBe(true)
    expect('!@#'.isAlphanumeric()).toBe(false)
  })

  test('capitalize', () => {
    expect('hello'.capitalize()).toBe('Hello')
    expect('123a'.capitalize()).toBe('123a')
  })

  test('reverse', () => {
    expect('hello'.reverse()).toBe('olleh')
  })

  test('in', () => {
    expect('hello'.in('hello')).toBe(true)
    expect('hello'.in('world')).toBe(false)
  })

  test('countOccurrences', () => {
    expect('hello hello hello world hello'.countOccurrences('hello')).toBe(4)
    expect('nothing'.countOccurrences('hello')).toBe(0)
  })

  test('truncate', () => {
    expect('lorem ipsum dolo'.truncate(8)).toBe('lorem...')
    expect('lorem ipsum dolo'.truncate(9)).toBe('lorem...')
    expect('lorem ipsum dolo'.truncate(10)).toBe('lorem i...')
  })

  test('padLeft', () => {
    expect('6'.padLeft('0', 2)).toBe('06')
    expect('6'.padLeft('0', 5)).toBe('00006')
    expect('06'.padLeft('0', 2)).toBe('06')
  })

  test('padRight', () => {
    expect('6'.padRight('0', 2)).toBe('60')
    expect('6'.padRight('0', 5)).toBe('60000')
    expect('60'.padRight('0', 2)).toBe('60')
  })

  test('toDate', () => {
    expect('2022-02-02'.toDate()).toStrictEqual(new Date("2022-02-02"))
  })
})
