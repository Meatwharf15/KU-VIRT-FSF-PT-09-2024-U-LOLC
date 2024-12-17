// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge() {
  let licenseType = answers.License;
  let yourLicense = '';

  if (licenseType === 'MIT') {
    yourLicense = `![License: MIT]`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license]`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license]`
  } else {
    yourLicense = ""
  }

  return yourLicense;
  console.log(yourLicense);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
export function renderLicenseLink(License) {
  let yourLicense = "";
  if (License === 'MIT') {
    yourLicense = `(https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (License === 'GPLv3') {
    yourLicense = `(https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (License === 'GPL') {
    yourLicense = `(https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    yourLicense = ""
  }

  return `![${License}]${yourLicense}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {}

// TODO: Create a function to generate markdown for README
export function renderMarkdown(answers) {
  return `
      # My First README File

      ${answers.Title}

      ## Description

      ${answers.Description}

      ## Installation

      ${answers.Installation}

      ## Usage

      ${answers.Usage} 

      ## Contributing

      ${answers.Contributing}

      ## Tests

      ${answers.Tests}

      ## License

      ${renderLicenseLink(answers.License)}`
}