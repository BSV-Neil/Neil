var usersAge = prompt("How old are you today?");
console.log(usersAge);

if (usersAge === '33') {
    document.write('<h2>You are ' + usersAge + ' years old!</h2>');
} else {
    document.write('<h2>LIAR!</h2>');
}

'use strict'; // make our linter happy

// inputs (parameters) - pants, shirt, hat

function getDressed (pants, shirt, hat) {
    var getDressed = 'you have on' +pants+ 'and' + shirt + 'with a' +hat+ 'on';
    
    // using that string, construct a bit of html that can be placed in the site
    var clothingOnHtml = '<p>' + getDressed + '<p>';

    //now, set the outputs
    return clothingOnHtml;
}
    //prompt next adult what they want to wear
    var kindofPants = prompt('what kind of pants do you want to wear?');
    var kindofShirt = prompt('what color of shirt would you like to wear?');
    var kindofHat = prompt('what kind of hat would you like to wear?');

    var dressing = getDressed(kindofPants, kindofShirt, kindofHat)

// thenn make that bit of html show up in the site

document.write(dressing);

var change = prompt('do you want to change?');

if (change === 'yes') {
    // prompt the user for a style change
    var kindofPants2 = prompt('what kind of pants do you want to wear?');
    var kindofShirt2 = prompt('what color of shirt would you like to wear?');
    var kindofHat2 = prompt('what kind of hat would you like to wear?');

    var dressingtwo = getDressed(kindofPants, kindofShirt, kindofHat)

    // then, make that bit of html show up in the site
    document.write(dressingtwo);
}
