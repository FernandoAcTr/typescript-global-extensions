Number.prototype.toFixedNumber = function (decimals: number): number {
  return parseFloat(this.toFixed(decimals))
}

Number.prototype.isPositive = function (): boolean {
  return Number(this) > 0
}

Number.prototype.isNegative = function (): boolean {
  return Number(this) < 0
}

Number.prototype.isEven = function (): boolean {
  return Number(this) % 2 === 0
}

Number.prototype.isOdd = function (): boolean {
  return Number(this) % 2 !== 0
}

Number.prototype.clamp = function (min: number, max: number): number {
  return Math.min(Math.max(Number(this), min), max)
}

Number.prototype.toRad = function (): number {
  return (Number(this) * Math.PI) / 180
}

Number.prototype.toDeg = function (): number {
  return (Number(this) * 180) / Math.PI
}

Number.prototype.isBetween = function (min: number, max: number): boolean {
  return Number(this) >= min && Number(this) <= max
}

Number.prototype.floor = function () {
  return Math.floor(Number(this))
}

Number.prototype.ceil = function () {
  return Math.ceil(Number(this))
}

Math.randomInRange = function (min: number, max: number): number {
  return Math.random() * (max - min) + min
}
