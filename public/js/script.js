$(document).ready(() => {
  var history = Array();
  var count_code = 0;
  $("#message-form").submit((event) => {
    event.preventDefault();
    var message = $("#message-input").val();

    if (message.trim() === "") return;

    history.push(message);
    $(".conversation").append(
      '<div class="d-flex justify-content-end">' +
      '<div class="message user-message" id="message-' +
      history.length +
      '">' +
      message +
      '<button class="btn btn-light user-btn ml-auto" onclick="textCopy(\'' +
      history.length +
      "')\">" +
      '<img src="/chatbot/public/img/copy.png" alt="copy image" width="23" height="23"></button>' +
      "</div></div>"
    );
    $("#message-input").val("");

    history.push(message);
    sendMessage(message);
  });

  function sendMessage(message) {
    let wait = "Loading...";
    $(".conversation").append(
      '<div class="message bot-message loader">' + wait + "</div>"
    );

    $.ajax({
      url: "/chatbot/app/controller/getResponse.php",
      method: "POST",
      data: { message: message },
      success: (response) => {
        var message_result = showCodeInBox(response);
        history.push(response);
        // console.log(history);

        $(".conversation .loader").remove();
        $(".conversation").append(
          '<div class="d-flex justify-content-start">' +
          '<div class="message bot-message" id="message-' +
          history.length +
          '">' +
          message_result +
          '<button class="btn btn-light bot-btn ml-auto" onclick="textCopy(\'' +
          history.length +
          "')\">" +
          '<img src="/chatbot/public/img/copy.png" alt="copy image" width="23" height="23"></button>' +
          "</div></div>"
        );
        $(".conversation").scrollTop($(".conversation")[0].scrollHeight);

        var element = document.querySelector(".user-message");
        element = document.querySelector(".bot-message");
        hljs.highlightAll();
      },
    });
  }

  function showCodeInBox(message) {
    var messages = message.split("```");
    console.log(messages.length);
    console.log(messages);
    var response = "";

    for (var i = 0; i < messages.length; i++) {
      switch (i % 2 == 0) {
        case true:
          response += messages[i];
          break;
        case false:
          response +=
            '<br><button class="btn btn-light bot-btn" onclick="copyCodeSelected(' + count_code + ')">' +
            '<img src="/chatbot/public/img/copy.png" alt="copy image" width="23" height="23">' +
            '</button><br><pre><code id="message-code-' +
            count_code +
            '" >' +
            messages[i] +
            "</code></pre></br></br>";
          count_code++;
          break;
      }
    }
    return response;
  }
});

function textCopy(div_id) {
  var testo = $("#message-" + div_id).text(); // prende il testo all'interno del div
  // var input_tmp = $('<input>'); // crea un campo di input temporaneo
  // $('body').append(input_tmp); // aggiunge l'input temporaneo al body della pagina
  // input_tmp.val(testo).select(); // imposta il valore dell'input e lo seleziona
  // document.execCommand('copy'); // copia il testo selezionato nella clipboard
  navigator.clipboard.writeText(testo); // copia il testo del div selezionato nella clipboard
  // input_tmp.remove(); // rimuove l'input temporaneo dalla pagina
}

function copyCodeSelected(code_id) {
  navigator.clipboard.writeText(document.getElementById('message-code-' + code_id).textContent);
}
