/*question no 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need
to send out a new set of invitations. You’ll have to think of someone else to invite.
" Start with your program from Exercise 14. Add a print statement at the end of your program stating
the name of the guest who can’t make it.
" Modify your list, replacing the name of the guest who can’t make it with the name of the new person
you are inviting.
" Print a second set of invitation messages, one for each person who is still in your list.*/

// Exercise no 15
let guest_list: string[] = ["Nida", "Anum", "Mehak", "Yasir", "Vaniza"];

for (let i = 0; i < guest_list.length; i++) {
  console.log(
    "Respected Sir/Madam " +
      guest_list[i] +
      "\nWe invite you to dinner tomorrow.\nThank you.\n"
  );
}

let not_present: string = "Nida";
let new_guest: string = "Hira Khan";

let present: boolean = false;
for (let i = 0; i < guest_list.length; i++) {
  if (guest_list[i] === not_present) {
    present = true;
    break;
  }
}

if (!present) {
  console.log(not_present + " will not be coming to tomorrow's dinner.");
} else {
  console.log(not_present + " is already in the guest list.");
}

console.log("Adding " + new_guest + " to the guest list.\n");

guest_list.push(new_guest);

for (let i = 0; i < guest_list.length; i++) {
  console.log(
    "Respected Sir/Madam " +
      guest_list[i] +
      "\nWe invite you to dinner tomorrow.\nThank you.\n"
  );
}
