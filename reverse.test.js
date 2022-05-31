const reverseString = require('./reverse.js');

test('if last character is now first', () => {
    expect(reverseString("hello").slice(-1)).toBe("h"); 
});

test('if output is reversed', () => {
    expect(reverseString("hello")).toBe("olleh"); 
});

