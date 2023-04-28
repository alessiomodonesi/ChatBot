$(document).ready(() => {
    $(document).on('keydown', '#message-input', (e) => {
        // shift + enter per andare a capo
        if (e.shiftKey && e.keyCode == 13) {
            $(this).val($(this).val() + '\n');
            console.log("shift + enter");
        }

        // enter per invio
        else if (e.which == 13) {
            $("#send-button").click();
            $(this).load(location.href + "#message-input");
            console.log("enter")
        }

        // cmd + k per cancellare la chat
        else if (e.keyCode == 75 && e.metaKey) {
            $(".message").remove();
            $(this).load(location.href + "#message-input");
            console.log("cmd + k")
        }
    });
});