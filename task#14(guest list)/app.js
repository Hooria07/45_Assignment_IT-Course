/*Guest List: If you could invite anyone, living or deceased,
to dinner, who would you invite? Make a list that includes at
 least three people you’d like to invite to dinner. Then use
 your list to print a message to each person, inviting them
 to dinner.*/
var Guest_list = ["Haniya", "Amna", "Sana"];
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear ".concat(Guest_list[i], " : \n you are invited to dinner! \n"));
}
