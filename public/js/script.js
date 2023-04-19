$(document).ready(function () {
    $('.message-form').on('submit', function (event) {
        event.preventDefault();
        var message = $('.message-input').val();
        $('.chat').append('<div class="message">' + message + '</div>');
        $('.message-input').val('');
        $('.chat').scrollTop($('.chat')[0].scrollHeight);
    });
});