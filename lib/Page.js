const inquirer = require('inquirer');
const Manager = require('./Manager');

const question = 
  {
    type: 'input',
    name: 'user',
    message: 'What is your name?'

  };

const userPrompt = function() {
  return inquirer.prompt(question);
};

const managerPrompt = function() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'manager',
      message: "What is your team manager's name?"
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the manager's employee ID?"
    }
  ])
  .then(answers => {
    let managerData = []
    managerData.push(answers);
    console.log(answers);
    console.log(managerData);
  })
};

userPrompt()
  .then(answer => {
    let teamData = [];
    teamData.push(answer);
    console.log(teamData);
  })
  .then(managerPrompt);
