const http = require('http');

const strings = ['4',undefined,'7','12',null, []];

function convertToIntegers(strings) {
    return strings.map(x => {
        const number = parseInt(x);
        return isNaN(number)? null: number;
    });
}
const server = http.createServer((req, res) => {
    console.log(convertToIntegers(strings));
    res.end('result ' + convertToIntegers(strings))
})

server.listen(process.env.PORT || 3000);