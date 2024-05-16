//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
let favouriteplaces : string[] = ["Mountain", "Beach","Makkah", "Turkey", "Khagan Valley"]
//• Print your array in its original order.

console.log("original order  "+  favouriteplaces+"\n");

//• Print your array in alphabetical order without modifying the actual list.

console.log("alphabetical order  "+ [...favouriteplaces].sort()+"\n");

//• Show that your array is still in its original order by printing it.

console.log("original order  "+  favouriteplaces+"\n");

//• Print your array in reverse alphabetical order without changing the order of the original list.

console.log("reverse alphabetical order "+ [...favouriteplaces].sort().reverse()+"\n");

//• Show that your array is still in its original order by printing it again.

console.log("original order "+  favouriteplaces+"\n");

//• Reverse the order of your list. Print the array to show that its order has changed.

console.log("reverse the order of list "+ favouriteplaces.reverse()+"\n");

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log("alphabetical order of list " + favouriteplaces.sort()+"\n");

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log("alphabetical order "+ favouriteplaces.sort()+"\n");

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("alphabetical order " + favouriteplaces.sort().reverse()+"\n")