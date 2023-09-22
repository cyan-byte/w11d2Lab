const express = require("express");
const app = express();
const port = 3000;

// Greeting
app.get("/greeting", (req, res) => {
  res.send("Hello, stranger.");
});

app.get("/greeting/:name", (req, res) => {
  const name = req.params.name; // extracts the name parameter from the URL
  console.log(req.params);
  res.send(`What's up, ${name}.`);
});

//extracting parameters from url and converting them to numbers

// Tip Calculator
app.get("/tip/:total/:tipPercentage", (req, res) => {
  const total = req.params.total;
  const tipPercentage = req.params.tipPercentage;

  const tipAmount = (total * tipPercentage) / 100;
  res.send(`Your tip = $${tipPercentage}`);
});

// Magic 8 Ball
// Defines a route '/magic/:question' that expects a question as a URL parameter
app.get("/magic/:question", (req, res) => {
  const question = req.params.question;

  const eightBallResponses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  // Use Math.random() to generate random responses:
  const response =
    eightBallResponses[Math.floor(Math.random() * eightBallResponses.length)];
  // Sends an HTML response that displays user's question and the response
  res.send(`<h1>Question: ${question}</h1><h1>Magic 8 Ball: ${response}</h1>`);
});
// Extracts the question from the URL parameter above (/:question)

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
