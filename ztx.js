fetch("/ztx/locations")
  .then(response => {
    console.log(response);
    response.json()
  })
  .then(locations => {
    locations = locations.locations;

    // Display the status information
    const statusContainer = document.getElementById("page");

    locations.forEach(data => {
      const statusElement = document.createElement("div");
      statusElement.classList.add("node");

      statusElement.innerHTML = `
        <img src="${data.flag}" class="flag">
        <h3 class="node-text">${data.name}</h3>
        <p class="node-text">Servers: ${data.servers}/${data.maxservers}</p>
      `;

      statusContainer.appendChild(statusElement);
    });
  })
  .catch(error => {
    const statusElement = document.createElement("div");
    statusElement.classList.add("node");

    statusElement.innerHTML = `
      An error occurred while fetching status.
      ${error}
    `;

    statusContainer.appendChild(statusElement);
    
    console.error("Error fetching status:", error);
  });