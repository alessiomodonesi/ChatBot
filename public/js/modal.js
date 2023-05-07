$(document).ready(() => {
    if (sessionStorage.getItem("GDPR") !== "true")
        $('.modal').modal('show');

    $(".accetto-btn").click(function () {
        sessionStorage.setItem("GDPR", "true"); 
        //sessionStorage.setItem("mail_utente", document.getElementById("mail_utente").value);
        $('.modal').modal('toggle');
    });

    $(".rifiuto-btn").click(function () {
        sessionStorage.setItem("GDPR", "false");
        alert("Per utilizzare questo sito devi accettare l'informativa");
    });
});;
