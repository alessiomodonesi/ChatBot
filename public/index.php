<!DOCTYPE html>
<html lang="en">

<head>
    <title>Chat Bot</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous">
        </script>
    <!-- style.css -->
    <link href="/chatbot/public/css/style.css" rel="stylesheet" type="text/css">
    <!-- jquery -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.min.js"></script>
    <!-- script.js -->
    <script type="text/javascript" src="/chatbot/public/js/script.js"></script>
</head>

<body>
    <div class="row">
        <!-- header.php -->
        <?php //require("../app/view/template/header.php"); ?>
    </div>


    <div class="row">
        <div class="col-10 offset-1">
            <!-- chatbot-container -->

            <!-- <div class="row" style="background-color: #4F4557;">
                <h1>Bot</h1>
            </div> -->

            <div class="chatbot-container">
                <div class="row">
                    <div class="header">
                        <div class="bot-icon">Bot</div>
                        <div class="bot-name">Chat Bot</div>
                    </div>
                </div>
                <div class="row">
                    <div class="conversation-container">
                        <div class="conversation"></div>
                    </div>
                </div>
                <div class="row">
                    <form class="d-flex" id="message-form">
                        <input class="col-11" type="text" id="message-input" placeholder="Type your message here...">
                        <button class="btn btn-success col-1" type="submit" id="send-button">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <!-- footer.php -->
        <?php require("../app/view/template/footer.php"); ?>
    </div>
</body>

</html>