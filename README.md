# Course 2 (23.03.2017)
## Topics

### NodeJS basics
---

With NodeJS installed and available in the terminal (bash/cmd/ps) you can now run JavaScript code with one simple command:

```js
node FILENAME[.js]
```
The ```.js``` extension is optional, NodeJS will always assume you are trying to interpret JavaScript code.

Like in all programming languages, JavaScript offers a way of displaying messages inside the console. These messages, or logs most of time, are useful for debuggin purposes.

```js
console.log('Console message visible at runtime');
```

> Keep in mind that simple quotes and double quotes behave the same in JavaScript, there is no special use case for them.

Because NodeJS is an executable it also allows JavaScript access to the system that it runs on.

```process.argv``` contains a list of all the provided command arguments.

> The first two items in the list are always the path to the node executable and the path to file that was executed.

```js
console.log(process.argv);
```

To get user input you would need to search starting from the third element in ```process.argv```;

You can also use .splice (a method available for arrays) to isolate user input: ```node FILENAME ARG1 ARG2 ARG3...```

```js
var userInput = process.argv.splice(2); // [ARG1, ARG2, ARG3...]
```

Let's say the user runs this command ```node hello World```.

```js
// hello.js

var name = process.argv[2]; // Get first user input argument

console.log('Hello, ' + name + '!'); // Concatenation is done with "+"
```

As a result the user would see the following message in the console:

```
Hello, World!
```

We can also make sure we have a default in place, in case the user doesn't provide any arguments.

In case ```process.argv[2]``` is evaluated to [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy), ```name``` will take the value ```'Human'```;

```js
var name = process.argv[2] || 'Human';
```

To determine how many elements an array has we can use the ```length``` property.

```js
console.log(process.argv.length) // Displays the size of the array
```

> Checkout the full ```process``` documentation [here](https://nodejs.org/docs/latest/api/process.html#process_process)

### ECMAScript 6 (ES6) features
---

Since introduction [ES6](http://es6-features.org/) has brought many enhacements, simplifications and new functionalities to JavaScript. We'll try and showcase some of them and discover the serious one as we write our code for the project.

#### ```const``` and ```let``` instead of ```var```

```var``` was prone to errors, you could easily break your could if you did not fully understand the way it worked. **ES6** replaces ```var``` with ```const``` and ```let```.

Use ```const``` when you know don't want the value to change and leverage ```let``` to make sure you variables are properly block scoped.
> Read more about ```const``` [here](http://es6-features.org/#Constants) and scoped variables [here](http://es6-features.org/#BlockScopedVariables).

```js
const name = process.argv[2] || 'Human'; // name can no longer be changed after this
```

#### Template literals

String concatenation can be a messy thing, especially when you have more than one variable. **ES6** introduces [template literals](http://es6-features.org/#StringInterpolation) a new type of notation that allows for simple injection of JavaScript inside strings.

```js
console.log(`Hello, ${process.argv[2]}!`);
```

> Backticks (``` ` ```) are used for the string notation and ```${}``` for injecting JavaScript values or expressions.

#### Arrow functions

While not necessarily obvious at the moment, you will appreciate the usefulness of [arrow function](http://es6-features.org/#ExpressionBodies) as the code gets more and more complex.

The first immediate gain is in writing cleaner expressions:

```js
const namesList = process.argv[2].splice(2);

// ES5 (old specification)
const names = namesList.reduce(function(acc, curr, idx) {
    return acc + (idx > 0 ? ', ' : '') + curr;
}, '');

// ES6
const names = namesList.reduce((acc, curr, idx) => `${acc}${idx > 0 ? ', ' : ''}${curr}`, '');
```

> [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) is another functions available to arrays.

> [Conditional (ternary) operator](https://developer.mozilla.org/ro/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

### npm

Setting up a new NodeJS project always begins with ```npm init``` or if you want to use an existing one you'll certainly need to run ```npm install``` to ensure all dependencies are downloaded and available.

```npm``` (node package manager) is the main tool for working with NodeJS project, it helps you get set-up, helps you install or remove packages and allows you to stay up to date with your project dependencies.

Running ```npm init``` inside a folder with start the process of creating a ```package.json``` that will handle all you NodeJS project information (metadata and dependencies).

You'll be presented with various questions about the project you are creating, a name, a description, a respository and so on. It is entirely up to you what you decide to enter.

When a folder contains a ```package.json```, that folders is regarded as node package, therefore you can install dependencies for that package.

To install a package, run the following command:

```bash
npm install PACKAGE_NAME[@PACKAGE_VERSION]
```

> For example, to install a popular time and date manipulation library, [moment.js](https://momentjs.com), I first search for it in the [npm repository](https://www.npmjs.com). On [its page](https://www.npmjs.com/package/moment) I can see instruction on how to install it in right-hand side: ```npm install moment```. This command will automatically install the latest version of **moment.js**, if I want a different version I can specify by running ```npm install moment@2.10.0```.

> There is also a short command for ```npm install```, and that is ```npm i```. Similarly ```npm uninstall``` can be writen as ```npm un```.

Just running ```npm install PACKAGE_NAME``` will only install the package into our folder, it will not update ```package.json``` and add it as a dependency. To do that we need to also specify another argument for our install command:

```bash
npm install --save PACKAGE_NAME
```

This will save into the ```dependecies``` section of ```package.json``` to ensure that this a production required dependency of the final package/project we're creating.

```bash
npm install --save-dev PACKAGE_NAME
```

With ```--save-dev```, the package will be added to the ```devDependencies``` section of the ```package.json``` file, telling us that this dependency is only required for development and that the final package/project will not include it.

> ```--save``` and ```--save-dev``` also have short versions, ```-S``` and respectively ```-D```.

Using our installed packages is also quite easy using ```require()```, a NodeJS function that loads our packages and gives us access to their code inside others files.
```js
const moment = require('moment');

const then = new Date('2017-03-23');
const elapsed = moment(then).fromNow();

console.log(`Course 2 took place ${elapsed}`);
```

In this course there are also two JavaScript files (```hello.js``` and ```date.js```) and a ```package.json``` included, to server as examples for the topics discussed.