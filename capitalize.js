function capitalize(input) {
    input = input.toString();
    let capitalized = input[0].toUpperCase() + input.slice(1);
    return capitalized;
};

module.exports = capitalize;