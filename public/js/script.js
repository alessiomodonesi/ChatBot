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
      '<div class="message user-message" id="message-' + history.length + '">' + message +
      '<button class="btn btn-light restart-btn" onclick="copyQuestion(\'' + history.length + "')\">" +
      '<img src="/chatbot/public/img/restart.png" alt="reload image" width="22" height="22"></button>' +
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

        $(".conversation .loader").remove();
        $(".conversation").append(
          '<div class="d-flex justify-content-start">' +
          '<div class="message bot-message" id="message-' + history.length + '">' + message_result +
          '<button class="btn btn-light copy-btn" onclick="textCopy(\'' + history.length + "')\">" +
          '<img src="/chatbot/public/img/copia.png" alt="copy image" width="30" height="30"></button>' +
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
    var response = "";

    for (var i = 0; i < messages.length; i++) {
      switch (i % 2 == 0) {
        case true:
          response += messages[i];
          break;
        case false:
          response +=
            '<br><button class="btn btn-light copy-btn" onclick="copyCodeSelected(' + count_code + ')">' +
            '<img src="/chatbot/public/img/code.png" alt="copy image" width="30" height="30">' +
            '</button><br><pre><code id="message-code-' + count_code + '" >' + messages[i] +
            "</code></pre></br></br>";
          count_code++;
          break;
      }
    }
    return response;
  }
});


function copyQuestion(div_id) {
  $('#message-input').val($('#message-input').val() + $('#message-' + div_id).text());
}

function textCopy(div_id) {
  var testo = $("#message-" + div_id).text(); // prende il testo all'interno del div
  navigator.clipboard.writeText(testo); // copia il testo del div selezionato nella clipboard
}

function copyCodeSelected(code_id) {
  navigator.clipboard.writeText(document.getElementById('message-code-' + code_id).textContent);
}
