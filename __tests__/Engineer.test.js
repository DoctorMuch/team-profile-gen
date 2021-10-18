const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
  const engineer = new Engineer('Dinesh', '88', 'dinesh@dinesh.dinesh', 'DinDin');

  expect(engineer.name).toBe('Dinesh');
  expect(engineer.id).toBe('88');
  expect(engineer.email).toBe('dinesh@dinesh.dinesh');
  expect(engineer.github).toBe('DinDin');
})

test('overrides role to Engineer', () => {
  const engineer = new Engineer('Dinesh', '88', 'dinesh@dinesh.dinesh', 'DinDin');

  expect(engineer.getRole()).toBe('Engineer');
})