const print = require('./jv_util');

test('Prints without a header', () => {
    const logSpy = jest.spyOn(console, 'log');
    print('hello world');

    expect(logSpy).toHaveBeenCalledWith('hello world');
});

test('Prints newlline with no parameters', () => {
    const logSpy = jest.spyOn(console, 'log');
    print();

    expect(logSpy).toHaveBeenCalledWith('\n');
});

test('Prints with a header if one is defined.', () => {
    const logSpy = jest.spyOn(console, 'log');
    print('text', 'header');

    expect(logSpy).toHaveBeenCalledWith('header -- text');
});

test('Print ignores additional values if they are provided.', () => {
    const logSpy = jest.spyOn(console, 'log');
    print('text', 'header', 'something else', 'something else');

    expect(logSpy).toHaveBeenCalledWith('header -- text');
});