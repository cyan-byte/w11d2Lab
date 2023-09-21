const express = require("express");
const app = express();
const port = 3000;

app.get("/greeting", (req, res) => {
  res.send("Hello, stranger.");
});

app.get("/greeting/:name", (req, res) => {
  const name = req.params.name; // extracts the name parameter from the URL
  console.log(req.params)
  res.send(`What's up,  ${name} .`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
