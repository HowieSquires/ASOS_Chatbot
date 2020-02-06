<!doctype html>
<html lang="en">
<head>
    <!-- Chatbot CSS -->
    <link rel="stylesheet" type="text/css" href="elements/CSS/CBstyle.css">

    <!-- P5 library CDN for chatbot integration -->
    <script src="libs/p5/p5.js"></script>
    <script src="libs/p5/addons/p5.dom.js"></script>

    <!-- RiveScript CDN -->
    <script src="https://unpkg.com/rivescript@latest/dist/rivescript.min.js"></script>
    <!-- My script to integrate the chatbot -->
    <script src="Elements/Script/CBscript.js"></script>
</head>

<body>
<!-- Source Code: https://www.w3schools.com/howto/howto_css_mega_menu.asp -->
<!-- Make dropdown appear on click: https://www.w3schools.com/jsref/event_onclick.asp -->

<div class="col-sm-1 col-md-6 NoPad dontHide" id="SearchBar"> <!-- .SearchBar == .Navbar -->

  <div class="chatbox dropdown NoPad dontHide">

      <!-- <form action="#"> --> <!-- Make this so the messages return to the bottom of the chat and are added to an array -->
        <input class="dropbtn chatbar dontHide" type="text" id="chatinput" placeholder="Want something? I can help!" autocomplete="off" onclick="cbOpen()">
        <!-- <button class="sugBtn dontHide" id="send">Send</button> -->
     <!--  </form> -->



      <div id="chat-content" class="dropdown-content dontHide">

        <!-- Chat messages -->
        <div class="CbMessagesCont dontHide" id="chatoutput"></div>



        <!-- Option buttons for search submit and clear -->
        <!-- floating 'right' so swapped order -->
        <div class="CbSugBtnsCont dontHide">
          <!-- <button class="optBtn" onclick="cbClose()">Submit</button> -->
          <button class="optBtn dontHide" onclick="clearConv(); clearBack();">Clear</button>
          <button class="optBtn dontHide" onclick="revertMessage()">Back</button>
        </div>

      </div>

  </div>



</div>
</body>
