// Imports go first
import testFacility from './TestFacility.js';
import clinic from './Clinic.js';


// Test 5 people at the testing facility
let doug = testFacility.testPerson()


// Diagnose each person at the clinic
doug = clinic.diagnose()


// Invoke the component function that renders the HTML list of patients
