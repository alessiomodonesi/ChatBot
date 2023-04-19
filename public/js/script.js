$(document).ready(function () {
    let message_history = Array();
    $('#message-form').submit(function (event) {
        event.preventDefault();
        var message = $('#message-input').val();

        if (message.trim() === '')
            return;

        $('.conversation').append('<div class="message user-message">' + message + '</div>');
        $('#message-input').val('');
        message_history.push(message);
        sendMessage(message);
    });

    function sendMessage(message) {
        $.ajax({
            url: '/chatbot/app/model/index.php',
            method: 'POST',
            data: { message: message_history },
            success: function (response) {
                //console.log(response);
                $('.conversation').append('<div class="message bot-message">' + response + '</div>');
                $('.conversation').scrollTop($('.conversation')[0].scrollHeight);
                message_history.push(response);
                //console.log(message_history);
            }
        });
    }

    function messageHistory(){

    }
});