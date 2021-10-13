const http = require('http');

const prices = [400, 300, 200, 600, 150, 200];
const discount = 20;

function calculateTotalPrice(prices, discount) {
    const max = Math.max(...prices);

    const total = prices.reduce((acc, price) => {
        const isUniq = prices.filter(x => x === price).length === 1;

       if(price === max && isUniq) return acc + price  - price * (discount / 100);

       return acc;
    },0);

    return Math.floor(total);
}

const server = http.createServer((req, res) => {
    res.end('result ' + calculateTotalPrice(prices, discount))
})

server.listen(process.env.PORT || 3000);