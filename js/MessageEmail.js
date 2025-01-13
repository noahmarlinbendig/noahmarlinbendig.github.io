function sendEmail() {
    const message = document
        .getElementById("message")
        .value.replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    const author = document
        .getElementById("author")
        .value.replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    const email = document
        .getElementById("email")
        .value.replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    const subject = document
        .getElementById("subject")
        .value.replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    const dataProcessing = document.getElementById("dataProcessing").checked;

    if (
        email === "" ||
        !email.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/)
    ) {
        const popup = document.createElement("div");
        popup.className = "popup";
        popup.innerHTML = `
                <p>Bitte gib eine gültige E-Mail-Adresse ein.<br>Beispiel: mail@example.com</p>
                <button onclick="this.parentElement.remove()">OK</button>
                `;
        document.body.appendChild(popup);
        return;
    }
    if (author === "") {
        const popup = document.createElement("div");
        popup.className = "popup";
        popup.innerHTML = `
                <p>Bitte gib deinen Namen ein.</p>
                <button onclick="this.parentElement.remove()">OK</button>
                `;
        document.body.appendChild(popup);
        return;
    }
    if (message === "") {
        const popup = document.createElement("div");
        popup.className = "popup";
        popup.innerHTML = `
                <p>Bitte gib eine Nachricht ein.</p>
                <button onclick="this.parentElement.remove()">OK</button>
                `;
        document.body.appendChild(popup);
        return;
    }
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

    emailjs.send("service_wt4oj2q","template_iwjiu4g",{
        from_name: author,
        subject: subject,
        message: message,
        reply_to: email
        })
    .then(function(response) {
        const popup = document.createElement("div");
        popup.className = "popup";
        popup.innerHTML = `<p>Nachricht erfolgreich gesendet!</p><button onclick="this.parentElement.remove()">OK</button>`;
        document.body.appendChild(popup);
    }, function(error) {
        const popup = document.createElement("div");
        popup.className = "popup";
        popup.innerHTML = `<p>Fehler beim Senden der Nachricht. Versuche es später erneut.</p><button onclick="this.parentElement.remove()">OK</button>`;
        console.log('FAILED...', error);
        document.body.appendChild(popup);
    });
}