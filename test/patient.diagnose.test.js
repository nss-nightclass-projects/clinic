import testFacility from "../src/scripts/TestFacility.js"
import clinic  from "../src/scripts/Clinic.js"

let person = null

describe('Testing a patient with infected conditions', () => {
  beforeAll(() => {
      person = testFacility.testPerson("Doug", 65, 102)
      person = clinic.diagnose(person, 4)
  })

  test('Person is diagnosed', () => {
      expect(person.diagnosed).toBe(true)
  })

  test('Person is infected when temperature and symptomatic days are too high', () => {
      expect(person.infected).toBe(true)
  })
})

describe('Testing a patient with high temperature but not symptomatic long enough', () => {
  beforeAll(() => {
      person = testFacility.testPerson("Doug", 65, 102)
      person = clinic.diagnose(person, 2)
  })

  test('Person is diagnosed', () => {
      expect(person.diagnosed).toBe(true)
  })

  test('Person is not infected when days are too few', () => {
      expect(person.infected).toBe(false)
  })
})

describe('Testing a patient with low temperature and not symptomatic long enough', () => {
  beforeAll(() => {
      person = testFacility.testPerson("Doug", 65, 99)
      person = clinic.diagnose(person, 2)
  })

  test('Person is diagnosed', () => {
      expect(person.diagnosed).toBe(true)
  })

  test('Person is not infected when no conditions met', () => {
      expect(person.infected).toBe(false)
  })
})
