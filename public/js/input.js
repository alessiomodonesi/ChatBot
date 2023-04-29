$(document).ready(() => {
    $("textarea").each(function () {
        this.setAttribute("style", "height:" + (this.scrollHeight) + "px;");
    }).on("input", function () {
        this.style.height = 0;
        this.style.height = (this.scrollHeight) + "px";
    });

    $(document).on('keydown', '#message-input', (e) => {
        if (e.shiftKey && e.keyCode == 13) {
            $(this).val($('#message - input').val() + '\n');
        }
        else if (e.which == 13) {
            $("#send-button").click();
            e.preventDefault();
        }
        else if (e.keyCode == 75 && e.ctrlKey) {
            $(".message").remove();
            $("#message-input").val("");
            e.preventDefault();
        }
    });
});