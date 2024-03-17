"use strict";

document.getElementById("dateForm").addEventListener("submit", caclAge);

function caclAge(event) {
  event.preventDefault();

  let yearsOutput = document.getElementById("yearsOutput");
  let monthsOutput = document.getElementById("monthsOutput");
  let daysOutput = document.getElementById("daysOutput");

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  const birthDate = new Date(year, month - 1, day);

  const currentDate = new Date();

  let ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
  let ageInMonths = currentDate.getMonth() - birthDate.getMonth();
  let ageInDays = currentDate.getDate() - birthDate.getDate();

  // Adjust for negative ageInMonths or ageInDays
  if (ageInDays < 0) {
    ageInMonths--;
    ageInDays += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  }

  if (ageInMonths < 0) {
    ageInYears--;
    ageInMonths += 12;
  }

  yearsOutput.textContent = ageInYears;
  monthsOutput.textContent = ageInMonths;
  daysOutput.textContent = ageInDays;
}

//////////////////////////////////////////////////////////////

/* const day = parseInt(document.getElementById("day").value);
//   const month = parseInt(document.getElementById("month").value);
//   const year = parseInt(document.getElementById("year").value);

//   if (!validateInput(day, month, year)) {
//     return;
//   }

// function setErrorStyles(input, isError) {
//   const formContainers = document.querySelectorAll(".form-row");
//   formContainers.forEach((formContainer) => {
//     const inputElement = formContainer.querySelector("input");
//     const label = formContainer.querySelector("label");
//     const noInput = formContainer.querySelector(".error-message-empty");

//     if (inputElement.id === input) {
//       if (isError) {
//         noInput.textContent = "This field is required";
//         inputElement.style.borderColor = "hsl(0, 100%, 67%)";
//         label.style.color = "hsl(0, 100%, 67%)";
//       } else {
//         noInput.textContent = "";
//         inputElement.style.borderColor = "hsl(0, 0%, 86%)";
//         label.style.color = "hsl(0, 1%, 44%)";
//       }
//     }
//   });
// }

// function resetErrorStyles() {
//   setErrorStyles("day", false);
//   setErrorStyles("month", false);
//   setErrorStyles("year", false);
// }

// //////////////////////////////////////////
// Check if day is between 1 and 31
// if (isNaN(day) || day < 1 || day > 31) {
//   document.querySelector(".error-message-day").textContent =
//     "Must be a valid day";
//   // return false;
// }

// // Check if month is between 1 and 12
// if (isNaN(month) || month < 1 || month > 12) {
//   document.querySelector(".error-message-month").textContent =
//     "Must be a valid month";
//   // return false;
// }

// const currentDate = new Date();
// const inputDate = new Date(+year, +month - 1, +day);
// if (inputDate > currentDate) {
//   console.log("Error: Must be in the past");

//   document.querySelector(".error-message-year").textContent =
//     "Must be in the past";

// // Check if the date is valid
// if (isNaN(inputDate.getTime())) {
//   document.querySelector(".error-valid-date").textContent =
//     "Must be a valid date";
//   return false;
// }
//  */
