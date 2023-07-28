import '../src'

describe('Number extensions', () => {
  test('toFixedNumber', () => {
    const value = 5.234
    expect(value.toFixedNumber(2)).toBe(5.23)
  })

  test('isPositive', () => {
    expect((5.234).isPositive()).toBe(true)
    expect((-5.234).isPositive()).toBe(false)
  })

  test('isNegative', () => {
    expect((-5.234).isNegative()).toBe(true)
    expect((5.234).isNegative()).toBe(false)
  })

  test('isEven', () => {
    expect((10).isEven()).toBe(true)
    expect((5).isEven()).toBe(false)
  })

  test('isOdd', () => {
    expect((10).isOdd()).toBe(false)
    expect((5).isOdd()).toBe(true)
  })

  test('clamp', () => {
    expect((10).clamp(1, 50)).toBe(10)
    expect((51).clamp(1, 50)).toBe(50)
    expect((-5).clamp(1, 50)).toBe(1)
  })

  test('toRad', () => {
    expect((10).toRad()).toBe(0.17453292519943295)
  })

  test('toDeg', () => {
    expect((0.174533).toDeg()).toBe(10.000004285756797)
  })

  test('isBetween', () => {
    expect((15).isBetween(10, 20)).toBe(true)
    expect((1).isBetween(10, 20)).toBe(false)
    expect((22).isBetween(10, 20)).toBe(false)
  })

  test('randomInRange', () => {
    expect(Math.randomInRange(10, 20).isBetween(10, 20)).toBe(true)
  })

  test('floor', () => {
    expect((16.4).floor()).toBe(16)
  })

  test('ceil', () => {
    expect((16.4).ceil()).toBe(17)
  })
})
