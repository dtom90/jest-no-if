
const condition = true

test('arrow function with condition', () => {
  let sum = 0
  if (condition) {
    sum = 1 + 2
  }
  expect(sum).toBe(3);
});

test('standard function with condition', function () {
  let sum = 0
  if (condition) {
    sum = 1 + 2
  }
  expect(sum).toBe(3);
});
