import '../src'

describe('Array extensions', () => {
  test('sum', () => {
    const numbers = [1, 2, 3, 4, 5]
    const result = numbers.sum()

    expect(result).toBe(15)
  })

  test('average', () => {
    const numbers = [1, 2, 3, 4, 5]
    const result = numbers.average()

    expect(result).toBe(3)
  })

  test('distinct', () => {
    const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]
    const result = numbers.distinct()

    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  test('first', () => {
    const numbers = [1, 2, 3, 4, 5]
    const emptyArray: number[] = []

    expect(numbers.first()).toBe(1)
    expect(emptyArray.first()).toBeUndefined()
  })

  test('last', () => {
    const numbers = [1, 2, 3, 4, 5]
    const emptyArray: number[] = []

    expect(numbers.last()).toBe(5)
    expect(emptyArray.last()).toBeUndefined()
  })

  test('isEmpty', () => {
    const numbers = [1, 2, 3, 4, 5]
    const emptyArray: number[] = []

    expect(numbers.isEmpty()).toBe(false)
    expect(emptyArray.isEmpty()).toBe(true)
  })

  test('max', () => {
    const numbers = [1, 5, 2, 9, 3]
    const emptyArray: number[] = []
    const mixedArray = [1, 'text', 5, null, 2, 9, 3]
    expect(numbers.max()).toBe(9)
    expect(emptyArray.max()).toBeUndefined()
    expect(mixedArray.max()).toBe(9)
  })

  test('min', () => {
    const numbers = [1, 5, 2, 9, 3]
    const emptyArray: number[] = []
    const mixedArray = [1, 'text', 5, null, 2, 9, 3]
    expect(numbers.min()).toBe(1)
    expect(emptyArray.min()).toBeUndefined()
    expect(mixedArray.min()).toBe(1)
  })

  test('shuffle', () => {
    const originalArray = [1, 2, 3, 4, 5]
    const shuffledArray = originalArray.shuffle()
    expect(shuffledArray.sort()).toEqual(originalArray.sort())
    expect(shuffledArray).not.toBe(originalArray)
  })

  test('groupBy', () => {
    const people = [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 30 },
      { name: 'Dave', age: 25 },
    ]
    const result = people.groupBy((person) => person.age)
    expect(result).toEqual([
      {
        key: 30,
        values: [
          { name: 'Alice', age: 30 },
          { name: 'Charlie', age: 30 },
        ],
      },
      {
        key: 25,
        values: [
          { name: 'Bob', age: 25 },
          { name: 'Dave', age: 25 },
        ],
      },
    ])
  })

  test('remove', () => {
    const numbers = [1, 2, 3, 4, 5, 3]
    const result = numbers.remove(3)
    expect(result).toEqual([1, 2, 4, 5])
  })

  test('replace', () => {
    const numbers = [1, 2, 3, 4, 5]
    const result = numbers.replace((num) => num === 3, 99)
    expect(result).toEqual([1, 2, 99, 4, 5])
  })

  test('notNone', () => {
    const values = [1, null, 'text', undefined, 2, null, 'value']
    const result = values.notNone()
    expect(result).toEqual([1, 'text', 2, 'value'])
  })

  test('chunk', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const result = numbers.chunk(3)
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]])
  })

  test('difference', () => {
    const numbers = [1, 2, 3, 4, 5]
    const valuesToExclude = [3, 4, 6]
    const result = numbers.difference(valuesToExclude)

    expect(result).toEqual([1, 2, 5])
  })

  test('at', () => {
    const numbers = [1, 2, 3, 4, 5]

    expect(numbers.at(0)).toBe(1)
    expect(numbers.at(2)).toBe(3)
    expect(numbers.at(5)).toBeUndefined()
  })

  test('merge', () => {
    const array1 = [1, 2, 3]
    const array2 = [3, 4, 5]
    const array3 = [5, 6, 7]
    const result = array1.merge(array2, array3)

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
})
