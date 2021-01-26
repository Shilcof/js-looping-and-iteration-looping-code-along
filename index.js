// Code your solutions in this file
function writeCards(names, event) {
    const output = [];
    for (let i = 0; i < names.length; i++) {
        output.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return output
}

function countDown(number) {
    while (number > -1) {
        console.log(number)
        number --        
    }
}