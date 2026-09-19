const getSettingsButton = document.getElementById("getSettingsButton");

getSettingsButton.addEventListener("click", function () {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;

    const apiUrl = "https://7201.api.green-api.com";

    const url = `${apiUrl}/waInstance${idInstance}/getSettings/${apiTokenInstance}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const responseField = document.getElementById("response");
            responseField.value = JSON.stringify(data, null, 2);
        });
});