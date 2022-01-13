const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const generateHtml = require('./src/page-template')
let teamData = [];
inquirer
  .prompt(
    [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the manager?'
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the manager's employee id?"
      },
      {
        type: 'input',
        name: 'email',
        message: "Please enter the manager's email: "
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the manager's office number: "
      }

    ]
  )
  .then(({ name, id, email, officeNumber }) => {
    this.manager = new Manager(name, id, email, officeNumber);
    teamData.push(this.manager);
    makeEngineer();
  })

const makeEngineer = () => {
  inquirer.prompt(
  [
    {
      type: 'input',
      name: 'name',
      message: "What is your engineer's name?"
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is their employee id?'
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the engineer's email address: "
    },
    {
      type: 'input',
      name: 'github',
      message: "Please enter the engineer's GitHub: "
    }
  ]
).then(({ name, id, email, github }) => {
  this.engineer = new Engineer(name, id, email, github);
  teamData.push(this.engineer);
  makeIntern();
})};

const makeIntern = () => {
  inquirer.prompt(
    [
      {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?"
      },
      {
        type: 'input',
        name: 'id',
        message: "What is their employee id?"
      },
      {
        type: 'input',
        name: 'email',
        message: "Please enter the intern's email address: "
      },
      {
        type: 'input',
        name: 'school',
        message: 'Please enter the school the intern attends: '
      }
    ])
    .then(({ name, id, email, school }) => {
      this.intern = new Intern(name, id, email, school);
      teamData.push(this.intern);
      return generateHtml(teamData)
    })
    .then(pageHtml => {
      writeToFile('./dist/index.html', pageHtml)
    })
    .catch(err => {
      console.log(err);
    })
}

// const teamData = [];
// const mgrQuestions = [
//   {
//     type: 'input',
//     name: 'manager',
//     message: "What is your team manager's name?"
//   },
//   {
//     type: 'input',
//     name: 'id',
//     message: "What is the manager's employee ID?"
//   },
//   {
//     type: 'input',
//     name: 'email',
//     message: "Please enter the manager's email: "
//   },
//   {
//     type: 'input',
//     name: 'officeNumber',
//     message: 'Please enter the office number of the manager: '
//   }
// ];

// const engrQuestions = [
//   {
//     type: 'input',
//     name: 'engineer',
//     message: "What is the engineer's name?",
//   },
//   {
//     type: 'input',
//     name: 'id',
//     message: "What is the engineer's employee ID?"
//   },
//   {
//     type: 'input',
//     name: 'email',
//     message: "Please enter the engineer's email: "
//   },
//   {
//     type: 'input',
//     name: 'github',
//     message: "Please enter the engineer's GitHub username: "
//   }
// ];

// const internQuestions = [
//   {
//     type: 'input',
//     name: 'intern',
//     message: 'What is the name of the intern?'
//   },
//   {
//     type: 'input',
//     name: 'id',
//     message: "Please enter the intern's ID."
//   },
//   {
//     type: 'input',
//     name: 'email',
//     message: "Please enter the intern's email address."
//   },
//   {
//     type: 'input',
//     name: 'school',
//     message: "What school does the intern attend?"
//   }
// ];
 
// const managerPrompt = () => {
//   console.log(`
//     Hello, and thanks for using this application.
//     You will find that it gives you easy access to all of your team's information. 
//     Let's get started!
//     `)
//    return inquirer.prompt(mgrQuestions)
//     .then(({ manager, id, email, officeNumber }) => {
//       let managerData = new Manager(manager, id, email, officeNumber);
//       teamData.push(managerData);
//       console.log(managerData);
//       console.log(managerData.getRole());
//       return teamData;
//     })
//     .then(menuPrompt);
// };

// const menuPrompt = () => {
//   console.log(
//     `What would you like to do next?`
//     )
//     inquirer.prompt(
//       {
//         type: 'list',
//         name: 'nextStep',
//         message: 'Please select one of the following options: ',
//         choices: ['Add Engineer', 'Add Intern', new inquirer.Separator(), 'Finished']
//       }
//     )
//     .then(select => {
//       if(select.nextStep === 'Add Engineer') {
//         console.log(teamData);
//         engineerPrompt();
//       }
//       else if(select.nextStep === 'Add Intern') {
//         console.log('You would like to add an intern!');
//         internPrompt();
//       }
//       else if(select.nextStep === 'Finished') {
//         inquirer.prompt(
//           {
//             type: 'confirm',
//             name: 'teamFinish',
//             message: 'Please confirm that you have entered all team members. ',
//             default: true
//           }
//         );
//       }
//     })
// };

// const engineerPrompt = () => {
//   if (!teamData) {
//     teamData = [];
//   }
//   console.log(`
//     Let's get some information about your team:
//   `)
//   return inquirer.prompt(engrQuestions)
//     .then(({ engineer, id, email, github }) => {
//       let engineerData = new Engineer(engineer, id, email, github);
//       teamData.push(engineerData);
//       console.log(teamData);
//       return teamData;
//     })
//     .then(menuPrompt);
// };

// const internPrompt = () => {
//   if (!teamData) {
//     teamData = [];
//   }
//   console.log(
//     "Thank you for registering your engineers. Let's get some information about your interns")
//     return inquirer.prompt(internQuestions)
//       .then(({ intern, id, email, school }) => {
//         let internData = new Intern(intern, id, email, school);
//         teamData.push(internData);
//         console.log(teamData);
//         return teamData;
//       })
//       .then(menuPrompt);
// }

const writeToFile = (filename, data) => {
  fs.writeFile(filename, data, err => {
    if(err) {
      throw err;
    } else {
      console.log('Go to "./dist/index.html" to see the HTML file of your team roster');
    }
  })
}

// managerPrompt()
  // .then(teamData => {
  //   console.log(teamData);
  //   return generateHtml(teamData)
  // })
  // .then(pageHtml => {
  //   writeToFile('./dist/index.html', pageHtml)
  // })
  // .catch(err => {
  //   console.log(err);
//   })
  // .then(engineerPrompt)
   


// class Engineer {
//   constructor(github) {
//     this.github = github
//   }
// }

// class Intern {
//   constructor(school) {
//     this.school = school
//   }
// }

// Manager, Engineer, and Intern will extend Employee
// Manager will also have property: officeNumber and method: getRole() overridden to Manager
// Engineer will also have property: GitHub, method: getGithub(), and method: getRole() overridden to Engineer
// Intern will also have property: school, method: getSchool(), and method: getRole() overridden to Intern