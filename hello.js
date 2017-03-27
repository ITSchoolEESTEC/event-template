console.log(process.argv);

const name = process.argv[2] || 'person';

const names = process.argv.splice(2);

const list = names.reduce(function(acc, curr, idx) {
    if (idx + 1 === names.length) {
        return acc + " and " + curr;
    }

    if (idx > 0) {
        return acc + ", " + curr;
    }


    return curr;
}, '');

const list2 = names.reduce((acc, curr, idx) => {
    if (idx + 1 === names.length) {
        return `${acc} and ${curr}`;
    }

    if (idx > 0) {
        return `${acc}, ${curr}`;
    }

    return curr;
}, '');

console.log('Hello, ' + names.join(', ') + '!');
console.log(`Hello, ${list2}!`); // Template strings

/*
JavaScript data types

- string
- number
- object
- boolean
- function
- undefined
*/