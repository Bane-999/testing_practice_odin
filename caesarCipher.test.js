const cipher = require("./caesarCipher.js");

test("if caesarCipher works", () => {
    expect(cipher("hello", 3)).toBe('khoor');
});

test("if caesarCipher works with symbols", () => {
    expect(cipher("hello!", 3)).toBe('khoor!');
});

test("if caesarCipher works with capital letters", () => {
    expect(cipher("Hello", 3)).toBe('Khoor');
}); 

test("if caesarCipher works with spaces", () => {
    expect(cipher("Hello world", 3)).toBe('Khoor zruog');
}); 