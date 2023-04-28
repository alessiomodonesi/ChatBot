<!-- chatbot-container -->
<div class="row">
    <div class="col-10 offset-1">
        <div class="chatbot-container">
            <div class="row">
                <div class="header">
                    <div class="bot-icon">
                        <img class="bot-logo" src="/chatbot/public/img/logo.png" alt="bot image" style="margin-top: 5px;">
                    </div>
                    <div class="bot-name">
                        <a class="name" href="https://github.com/alessiomodonesi/chatbot">Chat Bot</a>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="conversation"></div>
            </div>

            <div class="row form-box">
                <form class="d-flex" id="message-form" autocomplete="off">
                    <textarea class="col-11" id="message-input" placeholder="Type your message here..."></textarea>
                    <button class="btn btn-success" type="submit" id="send-button">
                        <img class="send-img" src="/chatbot/public/img/send.png" alt="send image">
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>