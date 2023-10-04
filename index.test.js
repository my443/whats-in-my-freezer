const {move, setDirection} = require('./index');

test('move to the right', () => {
  expect(move(250, 1)).toBe(251);
});

test('move to the left', () => {
    expect(move(250, -1)).toBe(249);
  });
  
test("Don't move at all", () => {
    expect(move(250, 0)).toBe(250);
  });

test("Move two positions to the right.", () => {
    expect(move(move(250, 1), 1)).toBe(252);
  });
  

test("Change movement to left", () => {
    expect(setDirection('left')).toBe(-1);
  });

  test("Change movement to right", () => {
    expect(setDirection('right')).toBe(1);
  });

  test("Change Movement: Test an incorrect function entry", () => {
    expect(setDirection('righty')).toBe(0);
  });