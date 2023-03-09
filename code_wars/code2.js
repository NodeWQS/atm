function digPow(n, p){
    let sum = 0;
    const data = String(n).split('')
    for (let index = 0; index < data.length; index++) {
        const element = Number(data[index]);
        sum += Math.pow(element, p + index);
    }
    return (sum % n === 0? sum / n: -1);
}

console.log(digPow(92, 1));
console.log(digPow(89, 1));
console.log(digPow(46288, 3));