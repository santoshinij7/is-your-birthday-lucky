const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output");

function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        outputBox.innerText = "Congratulations!!🎉🎉 You are a lucky person.";
    } else {
        outputBox.innerText = "Sorry!!😞 Your birthday is not that lucky for you.";
    }
}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum = sum + (dob.charAt(i));
    }
    return sum;
}

function checkBirthdayIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (sum && luckyNumber.value) {
        compareValues(sum, luckyNumber.value);
    } else {
        outputBox.innerText = "👉Please enter both the fields👈";
    }
}

checkNumberButton.addEventListener('click', checkBirthdayIsLucky);