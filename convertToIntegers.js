function convertToIntegers(strings) {
    return strings.map(x => {
        const number = parseInt(x);
        return isNaN(number)? null: number;
    });
}