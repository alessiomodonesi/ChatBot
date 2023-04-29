$(document).ready(() => {
    $(document).on('keydown', '#message-input', (e) => {
        // shift + enter per andare a capo
        if (e.shiftKey && e.keyCode == 13) {
            $(this).val($('#message - input').val() + '\n');
        }

        // enter per invio
        else if (e.which == 13) {
            $("#send-button").click();
            e.preventDefault();
        }

        // ctrl + k per cancellare la chat
        else if (e.keyCode == 75 && e.ctrlKey) {
            $(".message").remove();
            $("#message-input").val("");
            e.preventDefault();
        }
    });
});