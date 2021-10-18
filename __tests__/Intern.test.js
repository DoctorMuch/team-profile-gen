const Intern = require('../lib/Intern.js');

test('makes an intern object', () => {
  const intern = new Intern('Albert', '123', 'abc@dvid.dvd', 'Oberlin');

  expect(intern.name).toBe('Albert');
  expect(intern.id).toBe('123');
  expect(intern.email).toBe('abc@dvid.dvd');
  expect(intern.school).toBe('Oberlin');
});

test('overrides role to Intern', () => {
  const intern = new Intern('Albert', '123', 'abc@dvid.dvd', 'Oberlin');

  expect(intern.getRole()).toBe('Intern');
});