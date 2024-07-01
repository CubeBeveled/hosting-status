const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));
app.get("/styles.css", (req, res) => res.sendFile(path.join(__dirname, "../public/styles.css")));
app.get("/ztx.js", (req, res) => res.sendFile(path.join(__dirname, "../public/ztx.js")));
app.get("/ztx.html", (req, res) => res.sendFile(path.join(__dirname, "../public/ztx.html")));

app.get("/ztx/nodes", async (req, res) => {
  try {
    const data = await axios.get("https://my.ztx.gd/api/locations")
    res.json(data.data)
  } catch (err) {
    console.log(err)
  }
});

app.get("/slice/nodes", async (req, res) => {
  try {
    const data = await axios.get("https://dash.slicehosting.tech/api/locations")
    res.json(data.data)
  } catch (err) {
    console.log(err.message)
  }
});

app.listen(3000, () => console.log(`Server ready on port 3000.`));

console.log("API loaded")

module.exports = app;