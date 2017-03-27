const moment = require('moment');

const then = new Date('1994-02-16');
const prettyDate = moment(then).fromNow();

console.log(prettyDate);