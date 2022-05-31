const analyzeArray = require('./analyzeArray');

const arr = [3,11,2,58,235,47,1,22];

test('analyzeArray should return an object', () => {
    expect(typeof analyzeArray(arr)).toBe('object');
});

test('analyzeArray should return an object with the average, min, max, and length properties', () => {
    expect(analyzeArray(arr)).toEqual({        
        length: 8,
        min: 1,
        max: 235,
        average: 47.375        
    });
});