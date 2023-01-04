const reverseString = require('./reverse_string');

// REVERSE STRING METHOD TESTS   
test('amenda to be adnema', () => {
    expect(reverseString('amenda')).toBe('adnema');
});

test('AMENDA to be ADNEMA', () => {
    expect(reverseString('AMENDA')).toBe('ADNEMA');
});

test('a to be a', () => {
    expect(reverseString('a')).toBe('a');
});