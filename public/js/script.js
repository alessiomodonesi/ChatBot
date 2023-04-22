$(document).ready(() => {
    let history = Array();

    $('#message-form').submit((event) => {
        event.preventDefault();
        var message = $('#message-input').val();

        if (message.trim() === '')
            return;

        $('.conversation').append('<div class="message user-message">' + message + '</div>');
        $('#message-input').val('');

        history.push(message);
        sendMessage(message);
    });

    function sendMessage(message) {
        $.ajax({
            url: '/chatbot/app/controller/getResponse.php',
            method: 'POST',
            data: { message: message },
            success: (response) => {
                // history.push(response);
                $('.conversation').append('<div class="message bot-message">' + response + '</div>');
                $('.conversation').scrollTop($('.conversation')[0].scrollHeight);
            }
        });
    }
});