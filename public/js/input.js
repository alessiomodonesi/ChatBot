// aggiunte combinazioni di tasti per invio e andare a capo
$(document).on('keydown', '#message-input', (e) => {
    // enter per invio
    if (e.which == 13)
        $("#send-button").click();

    // shift + enter per andare a capo
    if (e.shiftKey && e.keyCode == 13)
        $(this).val($(this).val() + '\n');

    // cmd + k per cancellare la chat
    if (e.keyCode == 75 && e.metaKey)
        $(".message").remove();
});