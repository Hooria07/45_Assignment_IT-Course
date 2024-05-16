/*They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/
interface type{
    Name:string,Age:number,Profession:string
};
let OBJ:type = {Name: "Hooria", Age: 19 , Profession:"Student"};
console.log('\n Object Containing Information About Me\n');
console.log(`My name is ${OBJ.Name}`);
console.log(`I am ${OBJ.Age} Year Old`);
console.log(`I am ${OBJ.Profession}`);
