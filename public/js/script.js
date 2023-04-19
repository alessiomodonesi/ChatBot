$(document).ready(function () {
    let history = Array();

    $('#message-form').submit(function (event) {
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
            url: '/chatbot/app/model/index.php',
            method: 'POST',
            data: { message: history },
            success: function (response) {
                $('.conversation').append('<div class="message bot-message">' + response + '</div>');
                $('.conversation').scrollTop($('.conversation')[0].scrollHeight);
                history.push(response);
            }
        });
    }
});