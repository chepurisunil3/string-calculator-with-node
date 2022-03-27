const { sumOfGivenNumbers } = require("../controllers/add")

describe('Tests for Sum of given numbers', () => {
  test('Check for empty string', () => {
    expect(sumOfGivenNumbers("")).toBe(0) // if the string is empty return sum as 0
  })
  test('Check for NAN', () => {
    expect(() => {
      sumOfGivenNumbers("8;abc")
    }).toThrow('Invalid inputs given - abc')
  })
  test('Check for single number', () => {
    expect(sumOfGivenNumbers("2")).toBe("2") // for the single number input, return the same value as sum
  })

  test('Check for multiple numbers', () => {
    expect(sumOfGivenNumbers("2;3")).toBe(5) // return sum of given numbers
    expect(sumOfGivenNumbers("//<>\n5<>10")).toBe(15) // return sum of given numbers
  })
  test('Check for -ve numbers', () => {
    expect(() => {
      sumOfGivenNumbers("-4;-8")
    }).toThrow('negatives not allowed - -4,-8')
  })
  test('Check for invalid delimiter pattern', () => {
    expect(() => {
      sumOfGivenNumbers("//<>-4<>-8")
    }).toThrow('Values given with Invalid delimiter pattern. Please check the description for correct pattern')
  })
})