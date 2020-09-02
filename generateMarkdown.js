function generateMarkdown(response) {
    return `

# ${repsonse.title}

## Table of Contents 
* [Description](#description)
* [Contents](#contents)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)
* [Contact](#contact)

## Description
$(response.description)

## Content
$(response.contents)

## Installation
$(response.installation)

## Usage
$(response.usage)

## License
$(response.license)

## Input
$(response.input)

## Contributers
$(response.contributing)

## Test
$(response.test)

## Questions
$(response.questions)

## Contact
$(response.contact)

`;}

module.exports = generateMarkdown