module.exports = function reverse (n) {
    let str = n.toString();
    return parseInt(str.split('').reverse().join(''));
}
