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

module.exports(computeMultiples)