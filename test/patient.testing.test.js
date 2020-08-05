import testFacility from "../src/scripts/TestFacility.js"

describe('Person is tested and has an identifier', () => {
  test('Person has correct properties', () => {
    const personOne = testFacility.testPerson('Doug', 65, 102);
    expect(personOne).toMatchObject({
      firstName: 'Doug',
      age: 65,
      temperature: 102,
      id: 1,
    });
  });

  test('Person has incremented id', () => {
    const personTwo = testFacility.testPerson('Sally', 32, 98);
    expect(personTwo).toMatchObject({
      firstName: 'Sally',
      age: 32,
      temperature: 98,
      id: 2,
    });
  });
})
