const express = require("express");
const axios = require("axios");
const path = require("path");
const api = express();

const port = 3000;

api.use(express.json());

api.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

api.get("/ztx/locations", async (req, res) => {
  const data = await axios.get("https://my.ztx.gd/api/locations")
  res.json(data.data)
});

api.listen(port, () => console.log(`Server ready on port ${port}.`));

console.log("API loaded")

module.exports = api;