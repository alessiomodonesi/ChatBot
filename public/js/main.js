// Carica i file js del progetto
$.getScript('/chatbot/public/js/modal.js');
$.getScript('/chatbot/public/js/functions.js');
$.getScript('/chatbot/public/js/input.js');

// Variabile per tenere traccia del numero di codici inseriti
let count_code = 0;

$(document).ready(() => {
  getFilesName();
  var history = Array();
  var wait = "Caricamento...";

  $("#message-form").submit((event) => {
    event.preventDefault();
    var message = $("#message-input").val();
    // Se il messaggio è vuoto, non fare nulla
    if (message.trim() === '') return;
    history.push(message);

    // Mostra il messaggio dell'utente nella conversazione
    $(".conversation").append(get_user_message(history, message));
    $(".conversation").animate({
      scrollTop: $('.conversation').get(0).scrollHeight
    }, 1000);

    // Svuota l'input del messaggio
    $("#message-input").val('');

    // Aggiungi messaggio di caricamento
    $(".conversation").append('<div class="message loader-message loader">' + wait + '</div>');

    // Effettua la richiesta AJAX per ottenere la risposta dal server
    $.ajax({
      url: "/chatbot/app/controller/getResponse.php",
      method: "POST",
      data: { message: message },
      success: (response) => {
        var message_result = showCodeInBox(response);
        history.push(response);

        $(".conversation .loader").remove();
        $(".conversation").append(get_bot_message(history, message_result));
        $(".conversation").scrollTop($(".conversation")[0].scrollHeight);

        var element = document.querySelector(".user-message");
        element = document.querySelector(".bot-message");

        // Evidenzia la sintassi del codice
        hljs.highlightAll();
      },
      error: (error) => {
        console.error(error);

        let errorMessage = "C'è stato un problema nell'analizzare la tua domanda, ti chiediamo di riformulare la richiesta";
        history.push(errorMessage);

        $(".conversation .loader").remove();
        $(".conversation").append(get_bot_message(history, errorMessage, true));
        $(".conversation").scrollTop($(".conversation")[0].scrollHeight);
        hljs.highlightAll();
      }
    });
  });
});

function getFilesName(){
  const url = 'http://localhost/chatbot/app/controller/getFilesName.php';

  const httpreq = new XMLHttpRequest();
  httpreq.onreadystatechange = function (){console.log(httpreq.responseText)};
  httpreq.open('GET', url, true);
  httpreq.send();
}

function showFilesName(){
  -
}