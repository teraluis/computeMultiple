const http = require('http');

function computeMultiples(n) {
    const isMultiple = (a,b) => a % b === 0;
    return Array.from({length: n}, (_, i) => i)
        .reduce((acc, curr) => {
            if(isMultiple(curr, 3) || isMultiple(curr, 5)  || isMultiple(curr, 7)) {
                return acc + curr;
            }
            return acc;
        },0);
}


const server = http.createServer((req, res) => {
    res.end('result ' + computeMultiples(15))
})

server.listen(process.env.PORT || 3000);