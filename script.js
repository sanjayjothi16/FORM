const h1 = document.createElement("h1");
h1.setAttribute("id", "title");
h1.innerHTML = "THE FORM";
document.body.appendChild(h1);

const p = document.createElement("p");
p.setAttribute("id", "description");
p.innerHTML = "DOM Manipulation with FORM";
document.body.appendChild(p);

const myForm = document.createElement("form");
myForm.setAttribute("id", "survey-form");
myForm.setAttribute("class", "survey-form");
document.body.appendChild(myForm);

const firstNameDiv = document.createElement("div");
firstNameDiv.setAttribute("class", "form-group");
myForm.appendChild(firstNameDiv);

const NameLabel = document.createElement("label");
NameLabel.setAttribute("id", "name-label");
NameLabel.setAttribute("for", "first-name");
NameLabel.innerHTML = "Name";
firstNameDiv.appendChild(NameLabel);

const firstName = document.createElement("input");
firstName.setAttribute("id", "first-name");
firstName.classList.add("form-group", "form-control");
firstName.setAttribute("type", "text");
firstName.setAttribute("placeholder", "FIRST NAME ");
firstName.setAttribute("required", "");
firstNameDiv.appendChild(firstName);

const lastNameDiv = document.createElement("div");
lastNameDiv.setAttribute("class", "form-group");
myForm.appendChild(lastNameDiv);

const lastName = document.createElement("input");
lastName.setAttribute("id", "last-name");
lastName.classList.add("form-group", "form-control");
lastName.setAttribute("type", "text");
lastName.setAttribute("required", "");
lastName.setAttribute("placeholder", "LAST NAME ");
lastNameDiv.appendChild(lastName);

const emailDiv = document.createElement("div");
emailDiv.setAttribute("class", "form-group");
myForm.appendChild(emailDiv);
const emailLabel = document.createElement("label");
emailLabel.setAttribute("id", "email-label");
emailLabel.setAttribute("for", "email");
emailLabel.innerHTML = "Email";
emailDiv.appendChild(emailLabel);
const email = document.createElement("input");
email.setAttribute("id", "email");
email.classList.add("form-group", "form-control");
email.setAttribute("type", "email");
email.setAttribute("required", "");
email.setAttribute("placeholder", "EMAIL");
emailDiv.appendChild(email);

// Gender
const genderDivLabel = document.createElement("label");
genderDivLabel.setAttribute("for", "genderDiv");
genderDivLabel.setAttribute("id", "genderDivLabel");
genderDivLabel.innerHTML = "Gender";
myForm.appendChild(genderDivLabel);
const genderDiv = document.createElement("div");
genderDiv.setAttribute("class", "form-group");
genderDiv.setAttribute("id", "genderDiv");
myForm.appendChild(genderDiv);

const genderDivChild1 = document.createElement("div");
genderDivChild1.setAttribute("id", "genderDivChild1");
genderDivChild1.classList.add("form-check", "form-check-inline");
genderDiv.appendChild(genderDivChild1);

const genderRadio1 = document.createElement("input");
genderRadio1.setAttribute("id", "inlineRadio1");
genderRadio1.setAttribute("name", "genderRadioOptions");
genderRadio1.setAttribute("value", "male");
genderRadio1.classList.add("form-check-input");
genderRadio1.setAttribute("type", "radio");
genderDivChild1.appendChild(genderRadio1);

const genderLabel1 = document.createElement("label");
genderLabel1.setAttribute("for", "inlineRadio1");
genderLabel1.classList.add("form-check-label");
genderLabel1.innerHTML = "MALE";
genderDivChild1.appendChild(genderLabel1);

const genderDivChild2 = document.createElement("div");
genderDivChild2.setAttribute("id", "genderDivChild2");
genderDivChild2.classList.add("form-check", "form-check-inline");
genderDiv.appendChild(genderDivChild2);

const genderRadio2 = document.createElement("input");
genderRadio2.setAttribute("id", "inlineRadio2");
genderRadio2.setAttribute("name", "genderRadioOptions");
genderRadio2.setAttribute("value", "female");
genderRadio2.classList.add("form-check-input");
genderRadio2.setAttribute("type", "radio");
genderDivChild2.appendChild(genderRadio2);

const genderLabel2 = document.createElement("label");
genderLabel2.setAttribute("for", "inlineRadio2");
genderLabel2.classList.add("form-check-label");
genderLabel2.innerHTML = "FEMALE";
genderDivChild2.appendChild(genderLabel2);

const genderDivChild3 = document.createElement("div");
genderDivChild3.setAttribute("id", "genderDivChild3");
genderDivChild3.classList.add("form-check", "form-check-inline");
genderDiv.appendChild(genderDivChild3);

const genderRadio3 = document.createElement("input");
genderRadio3.setAttribute("id", "inlineRadio3");
genderRadio3.setAttribute("name", "genderRadioOptions");
genderRadio3.setAttribute("value", "prefer-not-to-say");
genderRadio3.classList.add("form-check-input");
genderRadio3.setAttribute("type", "radio");
genderDivChild3.appendChild(genderRadio3);

const genderLabel3 = document.createElement("label");
genderLabel3.setAttribute("for", "inlineRadio3");
genderLabel3.classList.add("form-check-label");
genderLabel3.innerHTML = "PREFER NOT TO SAY ";
genderDivChild3.appendChild(genderLabel3);

const pincodeDiv = document.createElement("div");
pincodeDiv.setAttribute("class", "form-group");
pincodeDiv.setAttribute("id", "pincodeDiv");
myForm.appendChild(pincodeDiv);

const numberLabel = document.createElement("label");
numberLabel.setAttribute("id", "number-label");
numberLabel.innerHTML = "Pincode";
pincodeDiv.appendChild(numberLabel);

const pincodeInput = document.createElement("input");
pincodeInput.setAttribute("id", "pincode");
pincodeInput.classList.add("form-control");
pincodeInput.setAttribute("type", "number");
pincodeInput.setAttribute("required", "");
pincodeInput.setAttribute("placeholder", "PINCODE");
pincodeDiv.appendChild(pincodeInput);

// choice of food
const fieldset1Label = document.createElement("label");
fieldset1Label.setAttribute("for", "group1");
fieldset1Label.setAttribute("id", "fieldset1Label");
fieldset1Label.innerHTML = "Choice of food (must choose at least 2)";
myForm.appendChild(fieldset1Label);
const fieldset1 = document.createElement("fieldset");
fieldset1.setAttribute("id", "group1");
fieldset1.classList.add("class", "form-control");
myForm.appendChild(fieldset1);

const foodDiv1 = document.createElement("div");
foodDiv1.setAttribute("id", "foodDiv1");
foodDiv1.classList.add("form-check", "form-check-inline");
fieldset1.appendChild(foodDiv1);

const groupCheckbox1 = document.createElement("input");
groupCheckbox1.setAttribute("id", "inlinecheckbox1");
groupCheckbox1.classList.add("form-check-input");
groupCheckbox1.setAttribute("type", "checkbox");
groupCheckbox1.setAttribute("name", "group1");
groupCheckbox1.setAttribute("value", "VADA");
foodDiv1.appendChild(groupCheckbox1);

const foodLabel1 = document.createElement("label");
foodLabel1.setAttribute("for", "inlinecheckbox1");
foodLabel1.classList.add("form-check-label");
foodLabel1.innerHTML = "VADA";
foodDiv1.appendChild(foodLabel1);

const foodDiv2 = document.createElement("div");
foodDiv2.setAttribute("id", "foodDiv2");
foodDiv2.classList.add("form-check", "form-check-inline");
fieldset1.appendChild(foodDiv2);

const groupCheckbox2 = document.createElement("input");
groupCheckbox2.setAttribute("id", "inlinecheckbox2");
groupCheckbox2.classList.add("form-check-input");
groupCheckbox2.setAttribute("type", "checkbox");
groupCheckbox2.setAttribute("name", "group1");
groupCheckbox2.setAttribute("value", "DOSA");
foodDiv2.appendChild(groupCheckbox2);

const foodLabel2 = document.createElement("label");
foodLabel2.setAttribute("for", "inlinecheckbox2");
foodLabel2.classList.add("form-check-label");
foodLabel2.innerHTML = "DOSA";
foodDiv2.appendChild(foodLabel2);

const foodDiv3 = document.createElement("div");
foodDiv3.setAttribute("id", "foodDiv3");
foodDiv3.classList.add("form-check", "form-check-inline");
fieldset1.appendChild(foodDiv3);

const groupCheckbox3 = document.createElement("input");
groupCheckbox3.setAttribute("id", "inlinecheckbox3");
groupCheckbox3.classList.add("form-check-input");
groupCheckbox3.setAttribute("type", "checkbox");
groupCheckbox3.setAttribute("name", "group1");
groupCheckbox3.setAttribute("value", "POORI");
foodDiv3.appendChild(groupCheckbox3);

const foodLabel3 = document.createElement("label");
foodLabel3.setAttribute("for", "inlinecheckbox3");
foodLabel3.classList.add("form-check-label");
foodLabel3.innerHTML = "POORI";
foodDiv3.appendChild(foodLabel3);

const foodDiv4 = document.createElement("div");
foodDiv4.setAttribute("id", "foodDiv4");
foodDiv4.classList.add("form-check", "form-check-inline");
fieldset1.appendChild(foodDiv4);

const groupCheckbox4 = document.createElement("input");
groupCheckbox4.setAttribute("id", "inlinecheckbox4");
groupCheckbox4.classList.add("form-check-input");
groupCheckbox4.setAttribute("type", "checkbox");
groupCheckbox4.setAttribute("name", "group1");
groupCheckbox4.setAttribute("value", "NOODELES");
foodDiv4.appendChild(groupCheckbox4);

const foodLabel4 = document.createElement("label");
foodLabel4.setAttribute("for", "inlinecheckbox4");
foodLabel4.classList.add("form-check-label");
foodLabel4.innerHTML = "NOODLES";
foodDiv4.appendChild(foodLabel4);

const foodDiv5 = document.createElement("div");
foodDiv5.setAttribute("id", "foodDiv5");
foodDiv5.classList.add("form-check", "form-check-inline");
fieldset1.appendChild(foodDiv5);

const groupCheckbox5 = document.createElement("input");
groupCheckbox5.setAttribute("id", "inlinecheckbox5");
groupCheckbox5.classList.add("form-check-input");
groupCheckbox5.setAttribute("type", "checkbox");
groupCheckbox5.setAttribute("name", "group1");
groupCheckbox5.setAttribute("value", "BIRYANI");
foodDiv5.appendChild(groupCheckbox5);

const foodLabel5 = document.createElement("label");
foodLabel5.setAttribute("for", "inlinecheckbox5");
foodLabel5.classList.add("form-check-label");
foodLabel5.innerHTML = "BIRYANI";
foodDiv5.appendChild(foodLabel5);

const stateDiv = document.createElement("div");
stateDiv.setAttribute("class", "form-group");
myForm.appendChild(stateDiv);

const stateLabel = document.createElement("label");
stateLabel.setAttribute("id", "state-label");
stateLabel.setAttribute("for", "state");
stateLabel.innerHTML = "State";
stateDiv.appendChild(stateLabel);

const state = document.createElement("input");
state.setAttribute("id", "state");
state.classList.add("form-group", "form-control");
state.setAttribute("type", "text");
state.setAttribute("placeholder", "STATE");
state.setAttribute("required", "");
stateDiv.appendChild(state);

const countryDiv = document.createElement("div");
countryDiv.setAttribute("class", "form-group");
myForm.appendChild(countryDiv);

const countryLabel = document.createElement("label");
countryLabel.setAttribute("id", "country-label");
countryLabel.setAttribute("for", "country");
countryLabel.innerHTML = "Country";
countryDiv.appendChild(countryLabel);

const country = document.createElement("input");
country.setAttribute("id", "country");
country.classList.add("form-group", "form-control");
country.setAttribute("type", "text");
country.setAttribute("placeholder", "COUNTRY");
country.setAttribute("required", "");
countryDiv.appendChild(country);

const textareaDiv = document.createElement("div");
textareaDiv.setAttribute("class", "form-group");
myForm.appendChild(textareaDiv);
const textareaLabel = document.createElement("label");
textareaLabel.setAttribute("for", "comments");
textareaLabel.innerHTML = "Comments";
textareaDiv.appendChild(textareaLabel);
const textarea = document.createElement("textarea");
textarea.setAttribute("id", "comments");
textarea.classList.add("form-control");
textarea.setAttribute("placeholder", "ADDITIONAL COMMENTS ....");
textareaDiv.appendChild(textarea);

const submitBtn = document.createElement("button");
submitBtn.setAttribute("type", "submit");
submitBtn.classList.add("btn", "btn-primary", "mb-2");
submitBtn.innerText = "SUBMIT";
submitBtn.setAttribute("id", "submit");
myForm.appendChild(submitBtn);

const h4 = document.createElement("h3");
h4.innerHTML = "The submitted form data is presented in the table below.";
h4.style.textAlign = "center";
document.body.appendChild(h4);
const tableDiv = document.createElement("div");
tableDiv.setAttribute("class", "table-responsive");
tableDiv.setAttribute("id", "tableDiv");
document.body.appendChild(tableDiv);

let tbl = document.createElement("table");
tbl.setAttribute("id", "table");
tbl.classList.add(
  "table",
  "table-bordered",
  "table-striped",
  "table-hover",
  "table-responsive-sm"
);
let header = tbl.createTHead();
let row = header.insertRow(0);
row.insertCell(0).innerHTML = "ID";
row.insertCell(1).innerHTML = "First Name";
row.insertCell(2).innerHTML = "Last Name";
row.insertCell(3).innerHTML = "Email";
row.insertCell(4).innerHTML = "Pincode";
row.insertCell(5).innerHTML = "Gender";
row.insertCell(6).innerHTML = "Food";
row.insertCell(7).innerHTML = "State";
row.insertCell(8).innerHTML = "Country";
let Tbody = tbl.createTBody();
tableDiv.appendChild(tbl);

const formData = [];
let flag = false;
let IdNo = 0;
function createData(params) {
  return {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    gender: () => {
      if (genderRadio1.checked) {
        return "Male";
      } else if (genderRadio2.checked) {
        return "Female";
      } else {
        return "Prefer not to say";
      }
    },
    pincode: pincodeInput.value,
    food: [...params],
    state: state.value,
    country: country.value,
    comments: textarea.value,
  };
}

function checkFood() {
  let count = 0;
  let foodArr = [];
  if (groupCheckbox1.checked) {
    foodArr.push(foodLabel1.innerText);
    count++;
  }
  if (groupCheckbox2.checked) {
    foodArr.push(foodLabel2.innerText);
    count++;
  }
  if (groupCheckbox3.checked) {
    foodArr.push(foodLabel3.innerText);
    count++;
  }
  if (groupCheckbox4.checked) {
    foodArr.push(foodLabel4.innerText);
    count++;
  }
  if (groupCheckbox5.checked) {
    foodArr.push(foodLabel5.innerText);
    count++;
  }
  if (count >= 2) {
    return { foodArr, result: true };
  } else return false;
}
function pushDataToArray(data) {
  formData.push(data);
}
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const checkedResult = checkFood();
  if (checkedResult) {
    flag = false;
    const data = createData(checkedResult.foodArr);
    pushDataToArray(data);
    addDataToTable(data);
    myForm.reset();
  } else {
    flag = true;
    alert("Choice of food (must choose at least 2)");
    return;
  }
});
function addDataToTable(data) {
  const child = `
      <th scope="row">${++IdNo}</th>
      <td>${data.firstName}</td>
      <td>${data.lastName}</td>
      <td>${data.email}</td>
      <td>${data.pincode}</td>
      <td>${data.gender()}</td>
      <td>${[...data.food]}</td>
      <td>${data.state}</td>
      <td>${data.country}</td>
    `;
  const tr = Tbody.insertRow();
  tr.innerHTML = child;
}