function calculateTotalPrice(prices, discount) {
    const max = Math.max(...prices);

    const total = prices.reduce((acc, price) => {
        const isUniq = prices.filter(x => x === price).length === 1;

        if(price === max && isUniq) return acc + price  - price * (discount / 100);

        return acc;
    },0);

    return Math.floor(total);
}

module.exports(calculateTotalPrice);