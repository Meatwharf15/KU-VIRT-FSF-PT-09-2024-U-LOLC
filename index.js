// TODO: Include packages needed for this application
import inquirer from "inquirer";
import colors from "colors";
import fs from "fs";
import {renderMarkdown} from "./utils/generateMarkdown.js";
import {cpuUsage} from "process";

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: colors.brightMagenta("Enter your project title."),
    name: "Title",
  },
  {
    type: "input",
    message: colors.brightMagenta("Input a description for the project."),
    name: "Description",
  },
  {
    type: "input",
    message: colors.brightMagenta("Enter the installation instructions."),
    name: "Installation",
  },
  {
    type: "input",
    message: colors.brightMagenta("Enter the usage information."),
    name: "Usage",
  },
  {
    type: "input",
    message: colors.brightMagenta("Enter the contribution guidelines."),
    name: "Contributing",
  },
  {
    type: "input",
    message: colors.brightMagenta("Enter the test instructions."),
    name: "Tests",
  },
  {
    type: "input",
    message: colors.brightMagenta("Enter the license."),
    name: "License",
  },
];


// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions).then((answers) => {
    fs.writeFile("README.md", renderMarkdown(answers), (err) => err ? console.error(err) : console.log("Qapla!"));
  });
}

// Function call to initialize app
init();
