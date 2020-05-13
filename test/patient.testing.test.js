import testPerson from "../src/scripts/TestFacility.js"
import clinic  from "../src/scripts/Clinic.js"

let person = null

describe('Person is tested and has an identifier', () => {
  beforeAll(() => {
      person = testPerson("Doug", 65, 102)
      person = clinic.diagnose(person, 4)
  })

  test('Person has correct properties', () => {
      expect(
          person
      )
          .toMatchObject(
              { firstName: "Doug", age: 65, temperature: 102, id: 1 }
          )
  })
})
