function reverseString(string) {
    stringArray = string.split('');
    stringArray.reverse();
    reversed = stringArray.join('');
    return reversed;
}

module.exports = reverseString;