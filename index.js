class Employee {
  constructor(name, id, email) {
    this.name = name,
    this.id = id,
    this.email = email
  }
  getName() {

  }
  getId() {

  }
  getEmail() {

  }
  getRole() {

  }
}

class Manager extends Employee{
  constructor(officeNumber) {
    super(name, id, email)

    this.officeNumber = officeNumber
  }

}

class Engineer {
  constructor(github) {
    this.github = github
  }
}

class Intern {
  constructor(school) {
    this.school = school
  }
}

// Manager, Engineer, and Intern will extend Employee
// Manager will also have property: officeNumber and method: getRole() overridden to Manager
// Engineer will also have property: GitHub, method: getGithub(), and method: getRole() overridden to Engineer
// Intern will also have property: school, method: getSchool(), and method: getRole() overridden to Intern