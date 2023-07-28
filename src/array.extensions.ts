Array.prototype.sum = function () {
  return this.reduce((acc, curr) => acc + (typeof curr === 'number' ? curr : 0), 0)
}

Array.prototype.average = function () {
  const sum = this.sum()
  return sum / this.length
}

Array.prototype.distinct = function () {
  return this.filter((value, index, self) => self.indexOf(value) === index)
}

Array.prototype.first = function () {
  return this.length > 0 ? this[0] : undefined
}

Array.prototype.last = function () {
  return this.length > 0 ? this[this.length - 1] : undefined
}

Array.prototype.isEmpty = function () {
  return this.length === 0
}

Array.prototype.max = function () {
  if (this.length === 0) return undefined
  return Math.max(...this.filter((value) => typeof value === 'number'))
}

Array.prototype.min = function () {
  if (this.length === 0) return undefined
  return Math.min(...this.filter((value) => typeof value === 'number'))
}

Array.prototype.shuffle = function () {
  const array = this.slice()
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

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

Array.prototype.remove = function (value) {
  return this.filter((item) => item !== value)
}

Array.prototype.replace = function (predicate, newValue) {
  return this.map((e) => (predicate(e) ? newValue : e))
}

Array.prototype.notNone = function () {
  return this.filter((item) => item != null || item != undefined)
}

Array.prototype.chunk = function (chunkSize: number) {
  const array = this
  const chunks: any[][] = []
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize))
  }
  return chunks
}

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

Array.prototype.at = function (index: number) {
  return this.length - 1 >= index ? this[index] : undefined
}

Array.prototype.merge = function <T>(...arrays: T[][]): T[] {
  const uniqueValues = new Set<T>()
  for (const array of [this, ...arrays]) {
    for (const value of array) {
      uniqueValues.add(value)
    }
  }
  return Array.from(uniqueValues)
}
