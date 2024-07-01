const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/styles.css", (req, res) => res.sendFile(path.join(__dirname, "styles.css")));
app.get("/ztx.js", (req, res) => res.sendFile(path.join(__dirname, "ztx.js")));

app.get("/ztx", (req, res) => {
  res.sendFile(path.join(__dirname, "ztx.html"));
});

app.get("/ztx/locations", async (req, res) => {
  const data = await axios.get("https://my.ztx.gd/api/locations")
  res.json(data.data)
});

app.listen(port, () => console.log(`Server ready on port ${port}.`));

module.exports = app;