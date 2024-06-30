const express = require("express");
const path = require("path");
const api = express();
const axios = require("axios");
const net = require("net");

let status = {
  ulb1: null,
  lax3: null,
  lax2: null,
  lax1: null,
  hel1: null,
  tky1: null
}

api.use(express.json());

api.get("/", (req, res) => res.sendFile(path.join(__dirname, "ztx.html")));

api.get("/styles.css", (req, res) => res.sendFile(path.join(__dirname, "styles.css")));

api.get("/ztx", (req, res) => {
  let status = {

  }
});

const port = 3000;
api.listen(port, () => console.log(`Server ready on port ${port}.`));

function checkNode(host, port, timeout) {
  return new Promise((resolve, reject) => {
    const socket = new net.Socket();

    // Set the timeout
    socket.setTimeout(timeout);

    // Handle connection timeout
    socket.on("timeout", () => {
      socket.destroy();
      resolve(false);
    });

    // Handle connection errors
    socket.on("error", (err) => {
      socket.destroy();
      resolve(false);
    });

    // Handle successful connection
    socket.connect(port, host, () => {
      socket.end();
      resolve(true);
    });
  });
}

module.exports = api;