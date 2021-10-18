const Manager = require('../lib/Manager');

test('creates manager object', () => {
  const manager = new Manager('Andrea', '55', 'andrea@nasa.com', '222');

  expect(manager.name).toBe('Andrea');
  expect(manager.id).toBe('55');
  expect(manager.email).toBe('andrea@nasa.com');
  expect(manager.officeNumber).toBe('222');
  expect(manager.id).toEqual(expect.any(String));
});

test('gets role as manager', () => {
  const manager = new Manager('Andrea');

  expect(manager.getRole()).toEqual('Manager');
});


