function sendMessage() {
  const message = document
    .getElementById("dcmessage")
    .value.replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const author = document
    .getElementById("dcauthor")
    .value.replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const dataProcessing = document.getElementById("dcdataProcessing").checked;

  if (dataProcessing === false) {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = `
        <p>Bitte stimme der Datenverarbeitung zu.</p>
        <button onclick="this.parentElement.remove()">OK</button>
        `;
    document.body.appendChild(popup);
    return;
  }
  const request = new XMLHttpRequest();
  request.open(
    "POST",
    "https://discord.com/api/webhooks/1326565386195435520/Du7JG9OUtdgUHUypbSek-csuRnP-zOPAom1fKbhzmM-OvL_PpDAzKaNXFndWD_mQ176P"
  );

  request.setRequestHeader("Content-Type", "application/json");

  const messagepayload = {
    username: `Nachricht von: ${author}`,
    content: message,
  };

  request.send(JSON.stringify(messagepayload));
  request.onload = function () {
    const popup = document.createElement("div");
    popup.className = "popup";
    if (request.status >= 200 && request.status < 300) {
      popup.innerHTML = `<p>Nachricht erfolgreich gesendet!</p><button onclick="this.parentElement.remove()">OK</button>`;
      document.getElementById("dcmessage").value = "";
      document.getElementById("dcauthor").value = "";
      document.getElementById("dcdataProcessing").checked = false;
    } else {
      popup.innerHTML = `<p>Fehler beim Senden der Nachricht. Versuche es später erneut.</p><button onclick="this.parentElement.remove()">OK</button>`;
    }
    document.body.appendChild(popup);
  };
}
