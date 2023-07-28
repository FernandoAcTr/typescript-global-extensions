import '../src'

describe('Date extensions', () => {
  test('addDays', () => {
    const date = new Date(2022, 0, 1)
    expect(date.addDays(5)).toStrictEqual(new Date(2022, 0, 6))
  })

  test('addYears', () => {
    const date = new Date(2023, 0, 1)
    expect(date.addYears(1)).toStrictEqual(new Date(2024, 0, 1))
  })

  test('addMinutes', () => {
    const currentDate = new Date('2023-07-28T12:00:00')
    const newDate = currentDate.addMinutes(30)
    expect(newDate.getMinutes()).toBe(30)
    expect(currentDate.getMinutes()).toBe(0)
  })

  test('addHours', () => {
    const currentDate = new Date('2023-07-28T12:00:00')
    const newDate = currentDate.addHours(2)
    expect(newDate.getHours()).toBe(14)
    expect(currentDate.getHours()).toBe(12)
  })

  test('isSameDay', () => {
    const date1 = new Date('2023-07-28T12:00:00')
    const date2 = new Date('2023-07-28T18:00:00')
    const date3 = new Date('2023-07-29T08:00:00')

    expect(date1.isSameDay(date2)).toBe(true)
    expect(date1.isSameDay(date3)).toBe(false)
  })

  test('isLeapYear', () => {
    expect(new Date(2000, 0, 1).isLeapYear()).toBe(true)
    expect(new Date(2004, 0, 1).isLeapYear()).toBe(true)
    expect(new Date(2020, 0, 1).isLeapYear()).toBe(true)

    expect(new Date(1900, 0, 1).isLeapYear()).toBe(false)
    expect(new Date(2001, 0, 1).isLeapYear()).toBe(false)
    expect(new Date(2022, 0, 1).isLeapYear()).toBe(false)
  })
})
