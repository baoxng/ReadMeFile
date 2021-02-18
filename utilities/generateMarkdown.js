const { write } = require("fs");

function generateMarkdown(userResponse, userInfo) {

    // Generate Table of Contents based on userResponses
    let toc = `## Table of Contents`;
  
    if (userResponse.installation !== '') { toc += `
    * [Installation](#installation)` };
  
    if (userResponse.usage !== '') { toc += `
    * [Usage](#usage)` };
  
    if (userResponse.contributing !== '') { toc += `
    * [Contributing](#contributing)` };
  
    if (userResponses.tests !== '') { toc += `
    * [Tests](#tests)` };
  
  
    // Generate markdown for the top required portions of the README
    let writeMarkdown = 
    `# ${userResponse.title}
    ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponse.username}/${userResponse.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponse.username}/${userResponse.repo}?style=flat&logo=appveyor)
    
    Check out the badges hosted by [shields.io](https://shields.io/).
    
    
    ## Description 
    
    *What is this project, why and how it works:* 
    
    ${userResponse.description}
    `
  
    // Add Table of Contents to markdown
    writeMarkdown += toc;
   
    // Add License section since License is required to Table of Contents
    writeMarkdown += `
    * [License](#license)`;
    
  
    // Optional Installation section
    if (userResponse.installation !== '') {
    
    writeMarkdown +=
    `
    
    ## Installation
    
    *Here are some applications and sources for installation:*
    
    ${userResponse.installation}`
    };
    
  
    // Optional Usage section
    if (userResponse.usage !== '') {
    
    writeMarkdown +=
    
    `
    
    ## Usage 
    
    *Instructions and examples for how to use this:*
    
    ${userResponse.usage}`
    };
    
    
    // Optional Contributing section
    if (userResponse.contributing !== '') {
    `
    
    ## Contributing
    
    *Here are some contributers listed or if you are intrested in contributing, follow the guidelines on how to: *
    
    ${userResponse.contributing}`
    };
    
  
    // Optional Tests section
    if (userResponse.tests !== '') {
    
    writeMarkdown +=
    `
    
    ## Tests
    
    *Tests for application and how to run them:*
    
    ${userResponse.tests}`
    };
  
  
    // License section is required
    writeMarkdown +=
    `
    
    ## License
    
    ${userResponse.license}
    `;
  
  
    // Questions / About Developer section
    let writeDeveloper = 
    `
    ---
    
    ## Questions?
    
    ![Developer Profile Picture](${userInfo.avatar_url}) 
    
    For any questions, please feel free to contact me with the following information below:
   
    GitHub: [@${userInfo.login}](${userInfo.url})
    `;
  
    // If GitHub email is not null, add to Developer section
    if (userInfo.email !== null) {
    
    writeDeveloper +=
    `
    Email: ${userInfo.email}
    `};
  
    // Add developer section to markdown
    writeMarkdown += writeDeveloper;
  
    // Return markdown
    return writeMarkdown;
    
  }
  
  module.exports = generateMarkdown;