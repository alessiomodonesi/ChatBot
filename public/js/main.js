$.getScript('/chatbot/public/js/functions.js');
$.getScript('/chatbot/public/js/input.js');
$.getScript('/chatbot/public/js/textarea.js');

$(document).ready(() => {
  var history = Array();

  $("#message-form").submit((event) => {
    event.preventDefault();
    var message = $("#message-input").val();

    if (message.trim() === "") return;
    history.push(message); // serve per far funzionare il tasto restart

    $(".conversation").append(
      '<div class="d-flex justify-content-end">' +
      '<div class="message user-message" id="message-' + history.length + '">' + message +
      '<button class="btn btn-light restart-btn" onclick="copyQuestion(\'' + history.length + "')\">" +
      '<img class="restart-img" src="/chatbot/public/img/restart.png" alt="reload image"></button>' +
      "</div></div>"
    );

    $(".conversation").animate({
      scrollTop: $(
        '.conversation').get(0).scrollHeight
    }, 1000);

    $("#message-input").val("");
    history.push(message);
    sendMessage(message);

    // funzione per gestire l'invio del messaggio
    function sendMessage(message) {
      let wait = "Loading...";
      $(".conversation").append(
        '<div class="message loader-message loader">' + wait + "</div>"
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
            '<img class="copy-img" src="/chatbot/public/img/copia.png" alt="copy image"></button>' +
            "</div></div>"
          );

          $(".conversation").scrollTop($(".conversation")[0].scrollHeight);
          var element = document.querySelector(".user-message");
          element = document.querySelector(".bot-message");
          hljs.highlightAll();
          count_code = 0;
        },
      });
    }
  });
});