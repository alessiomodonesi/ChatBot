$(document).ready(() => {
    if (sessionStorage.getItem("GDPR") !== "true")
        $('.modal').modal('show');

    $(".accetto-btn").click(function () {

        var validation_email =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(document.getElementById("mail_utente").value.match(validation_email)){
            alert('Inserisci una mail per piacere');
            return false;
        }
        console.log(document.getElementById("mail_utente").value);
        sessionStorage.setItem("GDPR", "true"); 
        sessionStorage.setItem("mail_utente", document.getElementById("mail_utente").value);
        $('.modal').modal('toggle');
    });

    $(".rifiuto-btn").click(function () {
        sessionStorage.setItem("GDPR", "false");
        alert("Per utilizzare questo sito devi accettare l'informativa");
    });
});;
