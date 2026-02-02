// hello.js
// A simple JavaScript introduction script for my GitHub portfolio
// Author: Ruan Jacobs

// Greet the user
function sayHello() {
  const name = "Visitor";
  console.log(`👋 Hello, ${name}!`);
  console.log("Welcome to my GitHub portfolio.");
  console.log("I'm Ruan, a Junior Developer learning JavaScript, HTML, CSS, and Git/GitHub.");
  console.log("Feel free to explore my projects!");
}

// Call the function
sayHello();

// Optional: simple interactive prompt (Node.js required)
if (typeof require !== "undefined") {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("What is your name? ", (userName) => {
    console.log(`Nice to meet you, ${userName}! Thanks for stopping by 👋`);
    readline.close();
  });
}