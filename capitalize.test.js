const capitalize = require('./capitalize.js');

test('if first character is number', () => {
    expect(capitalize(1)).toBe('1');
});

test('if first character is symbol', () => {
    expect(capitalize('!')).toBe('!'); 
});

test('if first character is lowercase', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('if first character is uppercase', () => {
    expect(capitalize('HELLO')).toBe('HELLO');
});