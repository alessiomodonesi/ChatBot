$(document).ready(() => {
    if (sessionStorage.getItem("GDPR") !== "true")
        $('.modal').modal('show');

    $(".accetto-btn").click(function () {
        sessionStorage.setItem("GDPR", "true");
        $('.modal').modal('toggle');
    });

    $(".rifiuto-btn").click(function () {
        sessionStorage.setItem("GDPR", "false");
        alert("Per utilizzare questo sito devi accettare l'informativa");
    });
});;