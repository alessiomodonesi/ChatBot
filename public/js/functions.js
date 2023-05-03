// funzione per restituire html del messaggio dell'utente
function get_user_message(history, message) {
    var user_message = '<div class="d-flex justify-content-end">' +
        '<div class="message user-message" id="message-' + history.length + '">' + message +
        '<button class="btn btn-light restart-btn" onclick="copyQuestion(\'' + history.length + "')\">" +
        '<img class="restart-img" src="/chatbot/public/img/restart.png" alt="reload image">' +
        '</button></div></div>';
    return user_message;
}

// funzione per restituire html del messaggio del bot
function get_bot_message(history, result, notCopy) {
    var bot_message = "";

    if (notCopy == true) { //non inserisce il bottone per copiare il testo
        bot_message = '<div class="d-flex justify-content-start">' +
            '<div class="message bot-message" id="message-' + history.length + '">' + result +
            '</div></div>';
    }
    else {
        bot_message = '<div class="d-flex justify-content-start">' +
            '<div class="message bot-message" id="message-' + history.length + '">' + result +
            '<button class="btn btn-light copy-btn" onclick="textCopy(\'' + history.length + "')\">" +
            '<img class="copy-img" src="/chatbot/public/img/copia.png" alt="copy image">' +
            '</button></div></div>';
    }

    return bot_message;
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

// funzione per mostrare correttamente del codice contenuto nella risposta
function showCodeInBox(message) {
    var response = "";
    var messages = message.split("```");
    let allert = "Ehy, il messaggio inserito non è consentito";

    if (message === allert) {
        setTimeout(() => {
            location.reload();
        }, 2500);
    }

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