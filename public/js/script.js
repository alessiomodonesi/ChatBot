$(document).ready(() => {
    let history = Array();

    $('#message-form').submit((event) => {
        event.preventDefault();
        var message = $('#message-input').val();

        if (message.trim() === '')
            return;

        $('.conversation').append('<div class="d-flex justify-content-between">' +
            '<div class="message user-message">' + message +
            '<button class="btn btn-light user-btn ml-auto">' +
            '<img src="/chatbot/public/img/copy.png" alt="copy image" width="23" height="23"></button>' +
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
                    '<button class="btn btn-light bot-btn ml-auto">' +
                    '<img src="/chatbot/public/img/copy.png" alt="copy image" width="23" height="23"></button>' +
                    '</div></div>');
                $('.conversation').scrollTop($('.conversation')[0].scrollHeight);

                var element = document.querySelector('.user-message');
                console.log("user: " + element.textContent);
                element = document.querySelector('.bot-message');
                console.log("bot: " + element.textContent);
            }
        });
    }

    $('button .user-btn').click(() => {
        alert("Hai cliccato sul pulsante!");
        var element = document.querySelector('.user-message');
        var text = element.textContent;
        console.log(text);
    });

    $('button .bot-btn').click(() => {
        alert("Hai cliccato sul pulsante!");
        var element = document.querySelector('.bot-message');
        var text = element.textContent;
        console.log(text);
    });
});
