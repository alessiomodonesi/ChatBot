$(document).ready(() => {
    if (sessionStorage.getItem("GDPR") !== "true")
        $('.modal').modal('show');

    $(".accetto-btn").click(function () {
        console.log(document.getElementById("mail_utente").value);
        if (!validateEmail(document.getElementById("mail_utente").value)) {
            alert('Inserisci una mail per piacere');
            return false;
        }
        sessionStorage.setItem("GDPR", "true");
        sessionStorage.setItem("mail_utente", document.getElementById("mail_utente").value);
        $('.modal').modal('toggle');
    });

    $(".rifiuto-btn").click(function () {
        sessionStorage.setItem("GDPR", "false");
        alert("Per utilizzare questo sito devi accettare l'informativa");
    });

    function validateEmail(email) {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }
});;
