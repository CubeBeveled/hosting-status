const express = require("express");
const axios = require("axios");
const api = express();

api.use(express.json());
api.use(express.static("public"))

api.get("/", (req, res) => res.sendFile("index.html"));

api.get("/ztx/locations", async (req, res) => {
  const data = await axios.get("https://my.ztx.gd/api/locations")
  res.json(data.data)
});

api.get("/slice", async (req, res) => {
  const data = await axios.get("https://dash.slicehosting.tech/api/locations")
  res.json(data.data)
});

api.listen(3000, () => console.log(`Server ready on port 3000.`));

console.log("API loaded")

module.exports = api;