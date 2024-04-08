let a = 15;

let form = document.forms.my;
let userName = form.elements.name;
let userAge = form.elements.age;
console.log(userName, userAge);
document.write(`<p>${userName.value}</p>`);

