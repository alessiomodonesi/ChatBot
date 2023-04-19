$(document).ready(function () {
    $('#message-form').submit(function (event) {
        event.preventDefault();
        var message = $('#message-input').val();
        $('.conversation').append('<div class="message user-message">' + message + '</div>');
        $('#message-input').val('');
        sendMessage(message);
    });

    function sendMessage(message) {
        $.ajax({
            url: '/mvc/app/model/bot.php',
            method: 'POST',
            data: { message: message },
            success: function (response) {
                $('.conversation').append('<div class="message bot-message">' + response + '</div>');
                $('.conversation').scrollTop($('.conversation')[0].scrollHeight);
            }
        });
    }
});