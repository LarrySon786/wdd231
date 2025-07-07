//Footer Information
let footerInfo = document.querySelector("#footer-information");

const year = new Date().getFullYear();

footerInfo.innerHTML = `©${year} Orrville Chamber of Commerce`;

//Footer modification date

let footerModifiedDate = document.querySelector("#lastModified");

const dateModified = document.lastModified;

footerModifiedDate.innerHTML = `Last Modification: ${dateModified}`






