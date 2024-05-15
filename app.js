// Exercise no 14
var guest_list = ['Nida', 'Anum', 'Mehak', 'Yasir', 'Vaniza'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + '\nWe invite you to dinner tomorrow.\nThank you.\n');
}
var not_present = 'Nida';
var new_guest = 'Hira Khan';
var present = false;
for (var i = 0; i < guest_list.length; i++) {
    if (guest_list[i] === not_present) {
        present = true;
        break;
    }
}
if (!present) {
    console.log(not_present + " will not be coming to tomorrow's dinner.");
}
else {
    console.log(not_present + " is already in the guest list.");
}
console.log("Adding " + new_guest + " to the guest list.\n");
guest_list.push(new_guest);
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + '\nWe invite you to dinner tomorrow.\nThank you.\n');
}
