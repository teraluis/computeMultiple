const math = require('mathjs');

const result = math.sqrt(+process.argv.slice(2));

console.log(result);