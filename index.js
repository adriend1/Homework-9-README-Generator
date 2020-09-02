const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe the project",
        name: "description"
    },
    {
        type: "input",
        message: "Are there any instructions for installation?",
        name: "contents"
    },
    {
        type: "input",
        message: "What's required to run the project?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is the expected output?",
        name: "usage"
    },
    {
        type: "input",
        message: "License?",
        name: "license"
    },
    {
        type: "input",
        message: "Open to contributers?",
        name: "contributing"
    },
    {
        type: "input",
        message: "How do you test the app",
        name: "test"
    },
    {
        type: "input",
        message: "GitHub username?",
        name: "questions"
    },
    {
        type: "input",
        message: "Email?",
        name: "contact"
    }    
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("success");
        });
    }
    
function init() {
    inquirer.prompt(questions).then((answers) => {

        const response = generateMarkdown(answers);
        console.log(answers);

        writeToFile("README.md", response);
    })
}   
    
    
    
    
    // .then((userResponse)=>{
    //     const data = writeMarkdown(userResponse)
    //     fs.writeToFile("README.md", data, function() {
    //     })
    // })

    // function writeMarkdown(userObj) {
    //     return `
//         <!doctype html>
// <html lang="en">
//   <head>
//     <!-- Required meta tags -->
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

//     <!-- Bootstrap CSS -->
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

//     <title>Hello, world!</title>
//   </head>
//   <body>
//     <h1>Hello, world!</h1>

//     <!-- Optional JavaScript -->
//     <!-- jQuery first, then Popper.js, then Bootstrap JS -->
//     <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
//     <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
//     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
//   </body>
// </html>  


