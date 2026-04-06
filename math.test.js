const { abs, floor, ceil } = require('./math')

describe('Math functions', () => {

  test('abs', () => {
    expect(abs(-5)).toBe(5)
    expect(abs(5)).toBe(5)
    expect(abs(0)).toBe(0)
  })

  test('floor', () => {
    expect(floor(4.9)).toBe(4)
    expect(floor(4.1)).toBe(4)
    expect(floor(-4.1)).toBe(-5)
  })

  test('ceil', () => {
    expect(ceil(4.1)).toBe(5)
    expect(ceil(4.9)).toBe(5)
    expect(ceil(-4.9)).toBe(-4)
  })

})