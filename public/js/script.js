$(document).ready(() => {

    var history = Array();

    $('#message-form').submit((event) => {
        event.preventDefault();
        var message = $('#message-input').val();

        if (message.trim() === '')
            return;

        history.push(message);
        $('.conversation').append('<div class="d-flex justify-content-between">' +
            '<div class="message user-message" id="message-' + history.length + '">' + message +
            '<button class="btn btn-light user-btn ml-auto" onclick="copiaTesto(\'' + history.length + '\')">' +
            '<img src="/chatbot/public/img/copy.png" alt="copy image" width="23" height="23"></button>' +
            '</div></div>');
        $('#message-input').val('');


        history.push(message);
        sendMessage(message);
    });


    function sendMessage(message) {
        let wait = "Loading...";
        $('.conversation').append('<div class="message bot-message loader">' + wait + '</div>');

        $.ajax({
            url: '/chatbot/app/controller/getResponse.php',
            method: 'POST',
            data: { message: message },
            success: (response) => {
                var message_result = showCodeInBox(response);
                history.push(response);
                //console.log(history);
                $('.conversation .loader').remove();
                $('.conversation').append('<div class="d-flex justify-content-between">' +
                    '<div class="message bot-message" id="message-' + history.length + '">' + message_result +
                    '<button class="btn btn-light bot-btn ml-auto" onclick="copiaTesto(\'' + history.length + '\')">' +
                    '<img src="/chatbot/public/img/copy.png" alt="copy image" width="23" height="23"></button>' +
                    '</div></div>');
                $('.conversation').scrollTop($('.conversation')[0].scrollHeight);

                var element = document.querySelector('.user-message');
                //console.log("user: " + element.textContent);
                element = document.querySelector('.bot-message');


                /*var clipboard = new ClipboardJS("#bot"+count);

                clipboard.on('success', function (e) {
                    console.info('Action:', e.action);
                    console.info('Text:', e.text);
                    console.info('Trigger:', e.trigger);
                  
                    e.clearSelection();
                });

                clipboard.on('error', function(e) {
                    console.error('Action:', e.action);
                    console.error('Trigger:', e.trigger);
                });*/
            }
        });
    }

    function showCodeInBox(message){
        var messages = message.split("```");
        console.log(messages.length);
        console.log(messages);
        var response = "";
        for(var i = 0 ; i  < messages.length ; i++){
            switch(i % 2 == 0){
                case true:
                    response += messages[i];
                    break;
                case false:
                    response += '<br><br><code class="language-js line-numbers" data-prismjs-copy="COPIA COPIAAAA">' +messages[i] + '</code></br></br>' ;
                    break;
            }
        }
        return response;
    }

});

function copiaTesto(idContenitore) {
    var testo = $('#message-' + idContenitore).text(); //prende il testo all'interno del div
    //var inputTemporaneo = $('<input>'); //crea un campo di input temporaneo
    //$('body').append(inputTemporaneo); //aggiunge l'input temporaneo al body della pagina
    //inputTemporaneo.val(testo).select(); //imposta il valore dell'input e lo seleziona
    //document.execCommand('copy'); //copia il testo selezionato nella clipboard
    navigator.clipboard.writeText(testo);//copia il testo del div selezionato nella clipboard
    //inputTemporaneo.remove(); //rimuove l'input temporaneo dalla pagina
}