const { write } = require("fs");

function generateMarkdown(userResponse, userInfo) {

    // Generate Table of Contents conditionally based on userResponses
    let toc = `## Table of Contents`;
  
    if (userResponse.installation !== '') { toc += `
    * [Installation](#installation)` };
  
    if (userResponse.usage !== '') { toc += `
    * [Usage](#usage)` };
  
    if (userResponse.contributing !== '') { toc += `
    * [Contributing](#contributing)` };
  
    if (userResponses.tests !== '') { toc += `
    * [Tests](#tests)` };
  
  
   
    
  }
  
  module.exports = generateMarkdown;