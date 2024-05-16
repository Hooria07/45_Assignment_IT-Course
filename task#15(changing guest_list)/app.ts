/*Changing Guest List: You just heard that one of your
 guests can’t make the dinner, so you need to send out 
 a new set of invitations. You’ll have to think of
  someone else to invite.

• Start with your program from Exercise 14. Add a print 
statement at the end of your program stating the name of
 the guest who can’t make it.

• Modify your list, replacing the name of the guest who 
can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each 
person who is still in your list.*/


let Guest_list :string[] = ["Haniya", "Amna" , "Sana"];
 for( let i=0; i<Guest_list.length; i++){
    console.log(`Dear ${Guest_list[i]} : \n you are invited to dinner! \n`);
    
 }
 console.log(`"Unfortunately ${Guest_list[1]}, cannot come to dinner."`);

 Guest_list[1] = "Fatima";
 
 for( let j=0; j<Guest_list.length; j++){
    console.log(`Dear ${Guest_list[j]} : \n you are invited to dinner! \n`);
    
 }