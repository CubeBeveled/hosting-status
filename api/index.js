const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());
app.use(express.static("public"))

app.get("/", (req, res) => res.redirect("/index.html"));

app.get("/api/ztx/locations", async (req, res) => {
  const data = await axios.get("https://my.ztx.gd/api/locations")
  res.json(data.data)
});

app.get("/api/slice/locations", async (req, res) => {
  const data = await axios.get("https://dash.slicehosting.tech/api/locations")
  res.json(data.data)
});

app.listen(3000, () => console.log(`Server ready on port 3000.`));

console.log("API loaded")

module.exports = app;