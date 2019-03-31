Moment JS Tutorial With Example From Scratch is today’s leading topic.  The moment.js is an excellent library JavaScript library that helps you manage dates, in the browser and Node.js as well. Working with the dates and times have always been a bit difficult. I have always thought that the JavaScript library for manipulating dates would be very helpful. Moment.js, the impressive JavaScript library for validating, parsing and manipulating dates and times. The moment object in Moment.js is mutable. It means that operations like add, subtract, or set change the original moment object.


Content Overview [hide]

1 Moment JS Tutorial With Example From Scratch
2 #1: Install Moment.js.
3 #Get current date and time in the moment.
4 #Manipulating Dates
4.1 #Add Syntax
4.2 #Subtract Syntax
5 #Calculating the Difference Between Dates
6 #Date Comparison Methods
7 #Time from now 
8 #Parse as an Array
9 #Moment Clone


Moment JS Tutorial With Example From Scratch
We will use Node.js for this example, as it can be helpful on a client(browser) and server(node.js).

#1: Install Moment.js.
First, create one folder using the following command.

mkdir dates
cd dates
Okay, now create the package.json file using the following command.
npm init -y
Now, install the moment.js using the following command.

npm install moment --save

# or

yarn add moment
 

Moment JS Tutorial With Example From Scratch

Now, create one file called the server.js inside the root and add the following code.

// server.js

const moment = require('moment');

console.log(moment().format('DD/MM/YYYY'));
Save the file and go to the terminal and start the node.js server.

node server
You can see the today’s date as formatted. The moment() gives the current date and time, while format() converts the current date and time to the specified format.

#Get current date and time in the moment.
You can write the following code.

const moment = require('moment');

const date = moment();

console.log(date);
#Manipulating Dates
There are some options for manipulating a moment object. For example, you can add or subtract the days, months, years, etc. You can achieve this manipulation via the add() and subtract() methods.
#Add Syntax
moment().add(Number, String);
moment().add(Duration);
moment().add(Object);
Let us take the following example.

// server.js

const moment = require('moment');

const days = moment().add(15, 'days').format('DD/MM/YYYY');    // adds 15 days to current date
const months = moment().add(12, 'months').format('DD/MM/YYYY');  // adds 12 months to current date
const years = moment().add(10, 'years').format('DD/MM/YYYY');   // adds 10 years to current dateconst date = moment();

console.log('Days', days);
console.log('.........');
console.log('Months', months);
console.log('..........');
console.log('Years', years);
Save the file and run the node server.

 

Moment JS Tutorial

There are some shorthand keys as well if you’re into that whole brevity thing.

Key	Shorthand
years	y
quarters	Q
months	M
weeks	w
days	d
hours	h
minutes	m
seconds	s
milliseconds	ms
If you need to add multiple different keys at the same time, then you can pass them in as an object literal.

moment().add(7, 'days').add(1, 'months'); // with chaining
moment().add({days:7,months:1}); // with object literal
#Subtract Syntax
moment().subtract(Number, String);
moment().subtract(Duration);
moment().subtract(Object);
Let us take an example.

RELATED POSTS
Node Express Image Upload and Resize Tutorial Example

Feb 14, 2019
Node Streams Tutorial With Example

Nov 28, 2018
// server.js

const moment = require('moment');

const days = moment().subtract(15, 'days').format('DD/MM/YYYY');    // subtracts 15 days to current date
const months = moment().subtract(12, 'months').format('DD/MM/YYYY');  // subtracts 12 months to current date
const years = moment().subtract(10, 'years').format('DD/MM/YYYY');   // subtracts 10 years to current dateconst date = moment();

console.log('Days', days);
console.log('.........');
console.log('Months', months);
console.log('..........');
console.log('Years', years);
#Calculating the Difference Between Dates
Moment.js offers the way to compute the difference between two dates. The difference is computed in milliseconds by default, but can also be returned in days, months, years, etc. To compute a difference, call the diff() method on moment. The diff() method takes a date as its first argument. The unit of time can be specified using an optional second argument.

Let us take an example of the difference between dates.
// server.js

const moment = require('moment');

const dateB = moment('2018-09-10');
const dateC = moment('1993-09-10');

console.log('Difference is ', dateB.diff(dateC, 'days'), 'days');
console.log('Difference is ', dateB.diff(dateC, 'months'), 'months');
console.log('Difference is ', dateB.diff(dateC, 'years'), 'years');
 

javascript moment example tutorial

#Date Comparison Methods
Moment.js also provides date comparison methods. These methods are isBefore(), isAfter(), and isSame(). As the names suggest, these methods return Boolean values that are indicating if one date is before, after, or equal to another date.

Let us take an example.

const moment = require('moment');

console.log(moment('2018-09-10').isAfter('2018-09-09')); // returns false
console.log(moment('2018-09-10').isAfter('2018-11-20')); // returns true
#Time from now 
The syntax is following.

moment().fromNow();
moment().fromNow(Boolean);
The conventional way of displaying time is handled by moment#fromNow. It is sometimes called time ago or relative time.

Let us take an example.

// server.js

const moment = require('moment');

console.log(moment([1993, 09, 10]).fromNow()); // 25 years ago
#Parse as an Array
The syntax is the following.

moment(Number[]);
Let us take an example.

// server.js

const moment = require('moment');

moment([1993]);        // January 1st
moment([1993, 10]);     // September 1st
moment([1993, 09, 10]); // September 10th
#Moment Clone
The syntax is the following.

moment(Moment);
Let us take an example.

// server.js

const moment = require('moment');

const a = moment([1993]);
const b = moment(a);
a.year(2018);
console.log(b.year()); // 1993
You can find more about on the moment official documentation.

Finally, Moment JS Tutorial With Example From Scratch is over. Thanks for taking.