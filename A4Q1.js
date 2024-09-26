function getFullName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    return fullName;
}
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = getFullName(firstName, lastName);
console.log("Full name: " + fullName);
