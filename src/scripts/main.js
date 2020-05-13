// Imports go first
import { testPerson } from "./TestFacility.js"
import { diagnose, usePatients } from "./Clinic.js"
import { PatientList } from "./PatientList.js"



// Test 5 people at the testing facility
let doug = testPerson("Doug", 65, 102)
let mary = testPerson("Mary", 37, 100)
let candace = testPerson("Candace", 42, 103)


// Diagnose each person at the clinic
doug = diagnose(doug, 4)
mary = diagnose(mary, 2)
candace = diagnose(candace, 2)

const patients = usePatients()
console.log(patients)


// Invoke the component function that renders the HTML list of patients
PatientList()
