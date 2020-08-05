# Beginner JavaScript Review

## Bacteria Tracker

In this exercise, your task is to build a workflow for testing people for a bacterial infection, and then making sure that a clinic has a report of people who have it.

## Setup

1. Open your terminal and `cd` to your workspace directory.
1. Clone this project.
1. Once the project is cloned, cd into it and then run `npm install`.
1. Once the installations are complete, run the **test command** supplied for each section after the header. You will see all of the tests for your code - which ones pass, and which ones fail. All the tests will fail at this point, because you haven't written the code to make them pass. Keep this terminal window open while you are working on this project. Come back to it to run the tests again after adding each feature described below.

> **Note:** All of the code for this project will be created the `src` directory of the project. Open a new terminal session, and `cd` to the project directory again. Then you can `cd src` to change to that directory in your terminal and run your appplication server. To check what's already in the `src` directory, use the `ls` command to see its contents.

## Testing the Patients
**TEST COMMAND**: `npm run test-patient-testing`

1. In the `TestFacility` module define a variable in the to hold a number that you can use when setting the primary key for each person you create _(i.e. the `id` property)_. It should have an initial value of 1. Use this when setting the id property on the person. You will need to increase this value by one after each new person is created.
1. Define and export a function named `testPerson`.
1. The `testPerson` function must accept the following values as input _(i.e. it needs parameters)_, in the following order.
    1. First name of the person being tested (e.g. "Kelly", "Peter")
    1. Age of the person (e.g. 31, 65)
    1. Person's temperature (e.g. 98, 103)
1. The `testPerson` function must return an object with the following properties on it. The `id` value you defined earlier should be incremented by 1 after a person is tested.
    1. `firstName` whose value comes from the parameter
    1. `age` whose value comes from the parameter
    1. `temperature` whose value comes from the parameter
    1. `id` whose value comes from the incremented module variable

#### Checking Your Work

Start up a server after `cd`-ing into `src` (`hs`).

In the `main.js` module, invoke the `testPerson` function and provide the required values as arguments. Store the object that gets returned into a variable, and then use `console.log()` to view the object.

Also look at your terminal window that is running the tests and make sure that the `Person has been tested` test is passing.

Once you have it working, test 5 people in the `main.js` module.

**THEN PUSH YOUR CODE TO GITHUB**

## Clinical Consultation

**TEST COMMAND**: `npm run test-patient-diagnose`

1. In the `Clinic` module define a variable in the that will store the people objects after they have been diagnosed in the clinic. Its initial value should be an empty array.
1. Define and export a function named `usePatients` which should return the array of diagnosed patients.
1. Define and export a function named `diagnose` that is responsible for providing a diagnosis for a tested person.
1. The function must accept the following values as input _(i.e. it needs parameters)_, in the following order.
    1. An object representing a person who was tested with the `testPerson` function.
    1. A number specifying how many days the person has been exhibiting symptoms.
1. The function must add a new property of `diagnosed` with the value of `true` to the object. If you don't remember, you can easily [add new properties to objects in JavaScript](https://www.dyn-web.com/tutorials/object-literal/properties.php).
1. The function must also add a new property of `infected` to the object.
    1. If the person's temperature is above 101 and the number of days the person has been symptomatic is greater than, or equal to, 4 then `infected` property must have a value of `true`.
    1. Otherwise, the `infected` property must have a value of `false`.
1. After both of the new properties have been added, add the person to the array of diagnosed people. Recall which method is used to add new items to an array.
1. Finally, the function should return the augmented object.

#### Checking Your Work

In the `main.js` module, invoke the `diagnose` function for each of the 5 people who were tested. Ensure you provide the required values as arguments. Store the object that gets returned into a variable, and then use `console.log()` to view the objects and make sure it has the right properties on each.

To check your work, make sure that at least one of the people is infected by providing a temperature that is too high, and a number symptomatic days being 4 or greater.

Also look at your terminal window that is running the tests and make sure that the following tests pass.

* `Person is diagnosed`
* `Person is infected when temperature and symptomatic days are too high`
* `Person is not infected when days are too few`
* `Person is not infected when no conditions met`

**THEN PUSH YOUR CODE TO GITHUB**

## Display the Catalog

**TEST COMMAND**: `npm run test-patient-render`

Your next task is to create HTML representations of the people who have been tested and display them on the DOM.

### Define DOM Target

1. Create an `<article>` element in the `index.html` file.
1. The article element must have a class of `patients`.

### Create Patient HTML

1. Create a `scripts/PatientList.js` module.
1. In the `PatientList` module define and export a `patientList` function.
1. The `patientList` function must get the array of patients from the from the `Clinic.js` module.
1. The `PatientList` function must convert each object in the array to an HTML representation string.
The resulting HTML should look like the following example. Recall the `${}` syntax for interpolating JavaScript variables into string templates.
    ```html
    <section class="patient" id="patient--1">
        <h2 class="patient__name">Doug</h2>
        <div class="patient__properties">
            <p>Age: 32</p>
            <p>Temperature: 101</p>
            <p>Diagnosed: true</p>
        </div>
        <div class="patient_diagnosis">
            Infected: false
        </div>
    </section>
    ```
1. The function must put all of the HTML representations into a single domString. Recall that there are ways to turn an array's values into a single string.
1. The function then must return that single string that has all of the patient HTML representation in it.
1. In the `main.js` module, invoke the `patientList` component function. Take the string of HTML representations that it returns and update the inner HTML of the article element you created in `index.html`. You need to remember how to get a reference to DOM element in vanilla JavaScript (no jQuery!!!!) and then assign it some HTML.

#### Checking Your Work

Make sure your web server (`hs`, going old school) is running, and then visit http://localhost:<yourPort#> and you should see your list of diagnosed patients. It should look similiar to this.

![](./patients.png)

Then look at your terminal window that is running the tests and make sure that the following tests pass.

* `Patients are rendered to DOM`

**THEN PUSH YOUR CODE TO GITHUB**
