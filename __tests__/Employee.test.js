const Employee = require('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee('Rodolfo', "4", "rodolfo@nasa.com");

  expect(employee.name).toBe('Rodolfo');
  expect(employee.id).toBe('4');
  expect(employee.email).toBe('rodolfo@nasa.com');
});

test('provides the employee name', () => {
  const employee = new Employee("Rodolfo", "4", "rodolfo@nasa.com");

  expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test("gets an employee's id", () => {
  const employee = new Employee("Rodolfo", "4", "rodolfo@nasa.com");

  expect(employee.getId()).toEqual(expect.stringContaining(employee.id));
});

test("gets the employee's email", () => {
  const employee = new Employee("Rodolfo", "4", "rodolfo@nasa.com");
  
  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("gets the employee's occupational role", () => {
  const employee = new Employee("Rodolfo", "4", "rodolfo@nasa.com");

  expect(employee.getRole()).toEqual('Employee');
});
