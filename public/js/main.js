$.getScript('/chatbot/public/js/modal.js');
$.getScript('/chatbot/public/js/functions.js');
$.getScript('/chatbot/public/js/input.js');
let count_code = 0;

$(document).ready(() => {
  var history = Array();
  var wait = "Caricamento...";

  $("#message-form").submit((event) => {
    event.preventDefault();
    var message = $("#message-input").val();

    if (message.trim() === '') return;
    history.push(message);

    $(".conversation").append(get_user_message(history, message));
    $(".conversation").animate({
      scrollTop: $('.conversation').get(0).scrollHeight
    }, 1000);

    $("#message-input").val('');
    $(".conversation").append('<div class="message loader-message loader">' + wait + '</div>');

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
        hljs.highlightAll();
        console.clear();
      },
      error: (error) => {
        console.error(error);
      }
    });
  });
});