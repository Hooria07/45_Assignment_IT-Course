/* Task # 3 : Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase*/
var personName = " hooRia sHeikh ";
console.log("Name in Uppercase : ".concat(personName.toUpperCase()));
console.log("Name in Lowercase : ".concat(personName.toLowerCase()));
// for title case :
var step1 = personName.split(' ');
var step2 = step1.map(function (word) { return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(); });
var step3 = step2.join(' ');
console.log("Name in title case : ".concat(step3));
