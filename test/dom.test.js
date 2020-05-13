import {testPerson} from "../src/scripts/TestFacility.js"
import {diagnose}  from "../src/scripts/Clinic.js"
import {PatientList}  from "../src/scripts/PatientList.js"


test('Patients are rendered to DOM', async () => {
    let doug = testPerson("Doug", 65, 102)
    let mary = testPerson("Mary", 37, 100)
    let candace = testPerson("Candace", 42, 103)

    doug = diagnose(doug, 4)
    mary = diagnose(mary, 2)
    candace = diagnose(candace, 2)


    let constructedDOM = PatientList()

    constructedDOM = constructedDOM.replace(/\n/g, "")
    constructedDOM = constructedDOM.replace(/\s{2,}/g, "")

    try {
        expect(constructedDOM).toBe(`<section class="patient" id="patient--1"><h2 class="patient__name">Doug</h2><div class="patient__properties"><p>Age: 65</p><p>Temperature: 102</p><p>Diagnosed: true</p></div><div class="patient_diagnosis">Infected: true</div></section><section class="patient" id="patient--2"><h2 class="patient__name">Mary</h2><div class="patient__properties"><p>Age: 37</p><p>Temperature: 100</p><p>Diagnosed: true</p></div><div class="patient_diagnosis">Infected: false</div></section><section class="patient" id="patient--3"><h2 class="patient__name">Candace</h2><div class="patient__properties"><p>Age: 42</p><p>Temperature: 103</p><p>Diagnosed: true</p></div><div class="patient_diagnosis">Infected: false</div></section>`);
    }
    catch (error) {
        throw error
    }

})
