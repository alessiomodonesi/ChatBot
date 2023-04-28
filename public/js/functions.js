// funzione per mostrare correttamente del codice contenuto nella risposta
function showCodeInBox(message) {
    var messages = message.split("```");
    var response = "";
    var count_code = 0;

    for (var i = 0; i < messages.length; i++) {
        switch (i % 2 == 0) {
            case true:
                response += messages[i];
                break;
            case false:
                response +=
                    '<pre class="d-flex">' +
                    '<code id="message-code-' + count_code + '" >' + messages[i] + '</code>' +
                    '<button class="btn btn-light code-btn" onclick="copyCodeSelected(' + count_code + ')">' +
                    '<img class="code-img" src="/chatbot/public/img/code.png" alt="code image">' +
                    '</button>' +
                    '</pre>';
                count_code++;
                break;
        }
    }
    return response;
}

// funzione per copiare la domanda nell'input
function copyQuestion(div_id) {
    $('#message-input').val($('#message-input').val() + $('#message-' + div_id).text());
}

// funzione per copiare la risposta negli appunti
function textCopy(div_id) {
    var testo = $("#message-" + div_id).text();
    navigator.clipboard.writeText(testo);
}

// funzione per copiare solo il codice contenuto nella risposta
function copyCodeSelected(code_id) {
    navigator.clipboard.writeText(document.getElementById('message-code-' + code_id).textContent);
}