const applicationDiv = document.querySelector('#application-info');

let numberOfVacations = localStorage.getItem("totalVacations");


const application = new URLSearchParams(window.location.search);

let applicationHead = document.createElement('h1');
applicationHead.innerHTML = 'Vacation Request Received!'

let headingOne = document.createElement('h3');
headingOne.innerHTML = "Your Info:"

let applicantName = document.createElement('p')
let applicantEmail = document.createElement('p');
let applicantPhone = document.createElement('p');
let applicantAddress = document.createElement('p');


applicantName.innerHTML = `Name: ${application.get('lname')}, ${application.get('fname')}`;
applicantEmail.innerHTML = `Email: ${application.get('email')}`;
applicantPhone.innerHTML = `Phone: ${application.get('phone')}`;
applicantAddress.innerHTML = `Address: ${application.get('Address1')}, ${application.get('Address2')}, ${application.get('Address3')} ${application.get('Address4')}`;

applicationDiv.appendChild(applicationHead);
applicationDiv.appendChild(headingOne);
applicationDiv.appendChild(applicantName);
applicationDiv.appendChild(applicantEmail);
applicationDiv.appendChild(applicantPhone);
applicationDiv.appendChild(applicantAddress);

let headingTwo = document.createElement('h3');
headingTwo.innerHTML = "Your Vacation:"

let vacationName = document.createElement('p');
let vacationStart = document.createElement('p');
let vacationEnd = document.createElement('p');

vacationName.innerHTML = `Destination: ${application.get('vacation-options')}`;
vacationStart.innerHTML = `Start Date: ${application.get('date1')}`
vacationEnd.innerHTML = `End Date: ${application.get('date2')}`

applicationDiv.appendChild(headingTwo);
applicationDiv.appendChild(vacationName);
applicationDiv.appendChild(vacationStart);
applicationDiv.appendChild(vacationEnd);

let vacationTotal = document.createElement('p');

vacationTotal.innerHTML = `You have used Travel Made Easy to sign up for ${numberOfVacations} total vacations!`;

if (vacationTotal > 0) {
    applicationDiv.appendChild(vacationTotal);
}




