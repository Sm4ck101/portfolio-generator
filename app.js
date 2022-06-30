import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));




// import inquirer from 'inquirer';
// const response = await inquirer.prompt([
//   {
//     type: 'input',
//     name: 'question',
//     message: 'Want to answer?'
//   }
// ]);
// console.log(response.name); 


// const inquirer = require('inquirer')
// console.log(inquirer)

// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
