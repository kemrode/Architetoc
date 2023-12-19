const SumOf = require('../source/Sum');

test('adds 1 + 2 to equal 3', () => {
    expect(SumOf(1, 2)).toBe(3);
});

test('adds "1" + "2" to equal 3', () => {
    expect(SumOf("1", "2")).toBe(3);
})