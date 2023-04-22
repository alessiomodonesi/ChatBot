$(document).ready(() => {
    let history = Array();

    $('#message-form').submit((event) => {
        event.preventDefault();
        var message = $('#message-input').val();

        if (message.trim() === '')
            return;

        $('.conversation').append('<div class="d-flex justify-content-between">' +
            '<div class="message user-message">' + message +
            '<a class="btn btn-light copy-user ml-auto" role="button">' +
            '<img src="/chatbot/public/img/copy.png" alt="copy image" width="25" height="25"></a>' +
            '</div></div>');
        $('#message-input').val('');

        history.push(message);
        sendMessage(message);
    });

    function sendMessage(message) {
        let wait = "Loading...";
        $('.conversation').append('<div class="message bot-message loader">' + wait + '</div>');

        $.ajax({
            url: '/chatbot/app/controller/getResponse.php',
            method: 'POST',
            data: { message: message },
            success: (response) => {
                // history.push(response);
                $('.conversation .loader').remove();
                $('.conversation').append('<div class="d-flex justify-content-between">' +
                    '<div class="message bot-message">' + response +
                    '<a class="btn btn-light copy-bot ml-auto" role="button">' +
                    '<img src="/chatbot/public/img/copy.png" alt="copy image" width="25" height="25"></a>' +
                    '</div></div>');
                $('.conversation').scrollTop($('.conversation')[0].scrollHeight);
            }
        });
    }
    $('.user-btn').click(() => {
        var text = $(".user-message").text();
        console.log(text);
    });

    $('.bot-btn').click(() => {
        var text = $(".bot-message").text();
        console.log(text);
    });
});
