<!-- chatbot-container -->
<div class="row">
    <div class="col-10 offset-1">
        <div class="chatbot-container">
            <div class="row">
                <div class="header">
                    <div class="bot-icon">
                        <img class="bot-logo" src="/chatbot/public/img/logo.png" alt="bot image"
                            style="margin-top: 5px;">
                    </div>
                    <div class="bot-name">Chat Bot</div>
                </div>
            </div>

            <div class="row">
                <div class="conversation"></div>
            </div>

            <div class="row">
                <form class="d-flex" id="message-form" autocomplete="off">
                    <input class="col-11" type="text" id="message-input" placeholder="Type your message here...">
                    <button class="btn btn-success col-1" type="submit" id="send-button">Invia</button>
                </form>
            </div>
        </div>
    </div>
</div>