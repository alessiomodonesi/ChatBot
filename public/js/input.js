// aggiunte combinazioni di tasti per invio e andare a capo
$(document).on('keydown', '#message-input', (e) => {
    // shift + enter per andare a capo
    if (e.shiftKey && e.keyCode == 13)
        $(this).val($(this).val() + '\n');

    // enter per invio
    if (e.which == 13) {
        $("#send-button").click();
        $(this).load(document.URL + this);
    }

    // cmd + k per cancellare la chat
    if (e.keyCode == 75 && e.metaKey) {
        $(".message").remove();
        $(this).load(document.URL + this);
    }
});