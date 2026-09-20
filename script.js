const getSettingsButton = document.getElementById("getSettingsButton");
const getStateInstanceButton = document.getElementById("getStateInstanceButton");
const sendMessageButton = document.getElementById("sendMessageButton");
const sendFileByUrlButton = document.getElementById("sendFileByUrlButton");

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

getStateInstanceButton.addEventListener("click", function () {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;

    const apiUrl = "https://7201.api.green-api.com";

    const url = `${apiUrl}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const responseField = document.getElementById("response");
            responseField.value = JSON.stringify(data, null, 2);
        });
});

sendMessageButton.addEventListener("click", function () {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;
    const chatId = document.getElementById("chatId").value;
    const message = document.getElementById("message").value;

    const apiUrl = "https://7201.api.green-api.com";

    const url = `${apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`; fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chatId: chatId,
            message: message
        })
    })
        .then(response => response.json())
        .then(data => {
            const responseField = document.getElementById("response");
            responseField.value = JSON.stringify(data, null, 2);
        });
});

sendFileByUrlButton.addEventListener("click", function () {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;
    const fileChatId = document.getElementById("fileChatId").value;
    const fileUrl = document.getElementById("fileUrl").value;
    const fileName = document.getElementById("fileName").value;

    const apiUrl = "https://7201.api.green-api.com";

    const url = `${apiUrl}/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`;
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chatId: fileChatId,
            urlFile: fileUrl,
            fileName: fileName
        })
    })
        .then(response => response.json())
        .then(data => {
            const responseField = document.getElementById("response");
            responseField.value = JSON.stringify(data, null, 2);
        });
});