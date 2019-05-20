var usersAge = prompt("How old are you today?");
console.log(usersAge);

if (usersAge === '33') {
    document.write('<h2>You are ' + usersAge + ' years old!</h2>');
} else {
    document.write('<h2>You are lying about your age. You are not the chosen one.</h2>');
}