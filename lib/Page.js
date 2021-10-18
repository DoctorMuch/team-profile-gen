const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
// const makePage = require('../src/page-template')

const mgrQuestions = [
  {
    type: 'input',
    name: 'manager',
    message: "What is your team manager's name?"
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the manager's employee ID?"
  },
  {
    type: 'input',
    name: 'email',
    message: "Please enter the manager's email: "
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'Please enter the office number of the manager: '
  }
];

const engrQuestions = [
  {
    type: 'input',
    name: 'engineer',
    message: "What is the engineer's name?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the engineer's employee ID?"
  },
  {
    type: 'input',
    name: 'email',
    message: "Please enter the engineer's email: "
  },
  {
    type: 'input',
    name: 'github',
    message: "Please enter the engineer's GitHub username: "
  }
]
 
const managerPrompt = () => {
  console.log(`
    Hello, and thanks for using this application.
    You will find that it gives you easy access to all of your team's information. 
    Let's get started!
    `)
   return inquirer.prompt(mgrQuestions)
    .then(({ manager, id, email, officeNumber }) => {
      let managerData = new Manager(manager, id, email, officeNumber);
      // teamData.manager.push(managerData);
      console.log(managerData);
      // console.log(teamData.manager);
      console.log(managerData.getRole());
    })
};

const menuPrompt = () => {
  console.log(
    `What would you like to do next?`
    )
    return inquirer.prompt(
      {
        type: 'list',
        name: 'nextStep',
        message: 'Please select one of the following options: ',
        choices: ['Add Engineer', 'Add Intern', 'Finished']
      }
    )
    .then(select => {
      if(select.nextStep === 'Add Engineer') {
        engineerPrompt();
      }
      if(select.nextStep === 'Add Intern') {
        console.log('You would like to add an intern!');
        // internPrompt();
      }
      if(select.nextStep === 'Finished') {
        return console.log('Are you finished building your team?');
      }
    })
};

const engineerPrompt = teamData => {
  if (!teamData) {
    teamData = [];
  }
  console.log(`
    Let's get some information about your team:
  `)
  return inquirer.prompt(engrQuestions)
    .then(({ engineer, id, email, github }) => {
      let engineerData = new Engineer(engineer, id, email, github);
      teamData.push(engineerData)
      console.log(teamData);
    })
    .then(menuPrompt);

};

managerPrompt()
  .then(menuPrompt)
  // .then(teamData => {
  //   console.log(teamData);
    // console.log(makePage(teamData));
    // return makePage(teamData);
  // })
  .catch(err => {
    console.log(err);
  })
  // .then(engineerPrompt)
