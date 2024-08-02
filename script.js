// script.js
// function calculateAge() {
//   const birthdate = new Date(document.getElementById('birthdate').value);
//   updateAge(birthdate);
// }

// function updateAge(birthdate) {
//   const today = new Date();

//   // Calculate the difference in milliseconds
//   const difference = today - birthdate;

//   // Convert milliseconds to seconds, minutes, hours, days, weeks, months, and years
//   const seconds = Math.floor(difference / 1000);
//   const minutes = Math.floor(seconds / 60);
//   const hours = Math.floor(minutes / 60);
//   const days = Math.floor(hours / 24);
//   const weeks = Math.floor(days / 7);
//   const months = Math.floor(days / 30.44);
//   const years = Math.floor(days / 365.25);
//   const remain = 365 - (days % 365);

//   // Update the HTML elements
//   document.getElementById('years').textContent = years;
//   document.getElementById('months').textContent = months;
//   document.getElementById('weeks').textContent = weeks;
//   document.getElementById('days').textContent = days % 365;
//   document.getElementById('hours').textContent = hours % 24;
//   document.getElementById('minutes').textContent = minutes % 60;
//   document.getElementById('seconds').textContent = seconds % 60;
//   document.getElementById('remain').textContent = remain + " days";
// }

// // Call updateAge every second
// setInterval(function() {
//   const birthdate = new Date(document.getElementById('birthdate').value);
//   if (birthdate !== 'Invalid Date') { // Check if the birthdate is valid
//     updateAge(birthdate);
//   }
// }, 1000); // Update every 1000 milliseconds (1 second)


// script.js
function calculateAge() {
  const birthdate = new Date(document.getElementById('birthdate').value);
  updateAge(birthdate);
}

function updateAge(birthdate) {
  const today = new Date();

  // Calculate the difference in milliseconds
  let difference = today - birthdate;

  // Calculate years
  const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
  difference -= years * (1000 * 60 * 60 * 24 * 365.25);

  // Calculate months
  const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44));
  difference -= months * (1000 * 60 * 60 * 24 * 30.44);

  // Calculate weeks
  const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
  difference -= weeks * (1000 * 60 * 60 * 24 * 7);

  // Calculate days
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  difference -= days * (1000 * 60 * 60 * 24);

  // Calculate hours
  const hours = Math.floor(difference / (1000 * 60 * 60));
  difference -= hours * (1000 * 60 * 60);

  // Calculate minutes
  const minutes = Math.floor(difference / (1000 * 60));
  difference -= minutes * (1000 * 60);

  // Calculate seconds
  const seconds = Math.floor(difference / 1000);

  // Calculate remaining days until next birthday
  const nextBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
  let remainingDays = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
  if (remainingDays < 0) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    remainingDays = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
  }

  // Update the HTML elements
  document.getElementById('years').textContent = years;
  document.getElementById('months').textContent = months;
  document.getElementById('weeks').textContent = weeks;
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
  document.getElementById('remain').textContent = remainingDays + " days";
}

// Call updateAge every second
setInterval(function() {
  const birthdate = new Date(document.getElementById('birthdate').value);
  if (birthdate !== 'Invalid Date') {
    updateAge(birthdate);
  }
}, 1000);