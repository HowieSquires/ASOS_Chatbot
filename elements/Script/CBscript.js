//p5 library code for chatbot
var bot, userID, user_input, userinput, botReply, output, introChat;

var getBotGender = "%a%";
var getBotType = null;
var getBotColour = null;
var getBotBrand = null;
var getBotFit = null;
var getBotStyle = null;
var getBotDesign = null;
var getBotMaterial = null;
var getBotFeature = null;
var getBotIntent = null;
var getBotWeather = null;
var getBotSeason = null;

var checkBotVars = ["getBot"]


var conversation = [];
var remMsgs = [];


function setup(){
  noCanvas();

  loadRivescript();

  userID = "User1";
  user_input = select("#chatinput");
  output = select("#chatoutput");
}



function loadRivescript(){
  bot = new RiveScript({
    debug_div: "debug",
    debug:     debugMode
  });

  bot.loadFile("Elements/Rivescript/begin.rive");
  bot.loadFile("Elements/Rivescript/Test/chatcheckall.rive").then(ChatbotReady).catch(ChatbotError);

  function ChatbotReady(){
    bot.sortReplies();
    console.log("Chatbot Ready!");
    getReply("Start");

    if(setGender == "setmale" || setGender == "setfemale"){
      getReply(setGender);
    }

    if(window.localStorage.getItem("storeSetType") != null){
      setType = window.localStorage.getItem("storeSetType");
      var settypes = ["setbottoms", "setcoat", "setjumper", "settop", "setunderwear"];
      for(var i = 0; i < settypes.length; i++){
        if(setType == settypes[i]){
          getReply(setType);
          setType = null;
        }
      }
      window.localStorage.removeItem("storeSetType");
    }
    
  }

   function ChatbotError(){
    console.log("Gobble Dee Goop, Errrror!");
  }
}


function keyPressed() {
  if (keyCode === 13) {
    cbOpen();
    userinput = user_input.value();

    if(userinput == "back"){
      revertMessage();
    }
    else if(userinput == "clear" || userinput == "any" || userinput == "everything" || userinput == "all"){
      clearConv();
      clearBack();
    }
    else{

      remMsgs.push(userinput);

      if(window.location.href == "http://localhost/AsosBot/index.php" || window.location.href == "http://localhost/AsosBot/"){
        window.localStorage.setItem("storeIndMsg", userinput);
      }

      chat(userinput, "right");
      getReply(userinput);
    }
  }
}


function revertMessage(){
  
  if(remMsgs.length != 0){

    stepOne(stepTwo);

    function stepOne(callback){
      setTimeout(()=>{
        remMsgs.pop();
        clearConv();
        callback(stepThree);
      }, 20);
    }

    function stepTwo(callback){
      setTimeout(() =>{
        callback(stepFour);
      }, 200);
    }

    function stepThree(callback){
      for (var i = 0; i < remMsgs.length; i++) {
        (function (i) {
          setTimeout(function () {
            chat(remMsgs[i], "right");
            getReply(remMsgs[i]);
            callback();
          },300*i);
        })(i)
      }
    }

    function stepFour(){
      setTimeout(() =>{
        checkVars();
        getResults(gender, type, brand, fit, colour, style, design, material, feature, intent, weather, season);
      }, 10);
    }
  }
}






function getReply(userinput){
    bot.reply(userID, userinput).then(function(reply){
      botReply = reply;
      chat(botReply, "left");

      bot.getUservar(userID, "type").then(function(reply){
        getBotType = reply;
        console.log("TYPE: " + getBotType);
      });

      bot.getUservar(userID, "gender").then(function(reply){
        getBotGender = reply;
        console.log("GENDER: " + getBotGender);
      })

      bot.getUservar(userID, "colour").then(function(reply){
        getBotColour = reply;
        console.log("COLOUR: " + getBotColour);
      })

      bot.getUservar(userID, "brand").then(function(reply){
        getBotBrand = reply;
        console.log("BRAND: " + getBotBrand);
      })

      bot.getUservar(userID, "fit").then(function(reply){
        getBotFit = reply;
        console.log("FIT: " + getBotFit);
      })

      bot.getUservar(userID, "style").then(function(reply){
        getBotStyle = reply;
        console.log("STYLE: " + getBotStyle);
      })

      bot.getUservar(userID, "design").then(function(reply){
        getBotDesign = reply;
        console.log("DESIGN: " + getBotDesign);
      })

      bot.getUservar(userID, "material").then(function(reply){
        getBotMaterial = reply;
        console.log("MATERIAL: " + getBotMaterial);
      })

      bot.getUservar(userID, "feature").then(function(reply){
        getBotFeature = reply;
        console.log("FEATURE: " + getBotFeature);
      })

      bot.getUservar(userID, "intent").then(function(reply){
        getBotIntent = reply;
        console.log("INTENT: " + getBotIntent);
      })

      bot.getUservar(userID, "weather").then(function(reply){
        getBotWeather = reply;
        console.log("WEATHER: " + getBotWeather);
      })

      bot.getUservar(userID, "season").then(function(reply){
        getBotSeason = reply;
        console.log("SEASON: " + getBotSeason);
      })
    
    });

    user_input.value("");

}







function chat(message, side){

  function formChat(side){
    if(side == "left"){
      conversation.push(
      "<div class=\"cbMsgBlock\" id=\"left\"><img class=\"msgIcon\" src=\"elements/res/icons/asosicon.png\"> <p class=\"CbMessages dontHide\">" + message +  "</p> </div>"
    );  
    }
    if(side == "right"){
       conversation.push(
      "<div class=\"cbMsgBlock\" id=\"right\"> <p class=\"CbMessages dontHide\">" + message +  "</p> <img class=\"msgIcon\" src=\"elements/res/icons/usericon.png\"></div>" 
    );  
    }
  }

  if(message != "" && message != "undefined" && message != "ERR: No Reply Matched"){

    if(window.location.href == "http://localhost/AsosBot/index.php" || window.location.href == "http://localhost/AsosBot/"){
      formChat(side);
    }

    else if(window.location.href == "http://localhost/AsosBot/Results.php"){
      if(window.localStorage.getItem("storeIndMsg") == null){
        formChat(side);
      }

      else if(window.localStorage.getItem("storeIndMsg") != null){
        formChat(side);
        message = window.localStorage.getItem("storeIndMsg");
        formChat("right");
        getReply(window.localStorage.getItem("storeIndMsg"));
        remMsgs.push(window.localStorage.getItem("storeIndMsg"));
        localStorage.removeItem("storeIndMsg");
      }
    }
  }

  else if(message == "ERR: No Reply Matched"){
    getReply("ERROR");
  }

  output.html(conversation);  

  $("#chatoutput").scrollTop($("#chatoutput")[0].scrollHeight);
}




function clearConv(){
  console.log("CLEAR");

  conversation = [];
  localStorage.removeItem("storeConvo");
  loadRivescript();

  getBotGender = "undefined";
  getBotType = "";
  getBotColour = "";
  getBotBrand = "";
  getBotFit = "";
  getBotStyle = "";
  getBotDesign = "";
  getBotMaterial = "";
  getBotFeature = "";
  getBotIntent = "";
  getBotWeather = "";
  getBotSeason = "";

  gender = "%a%";
  setGender = null;
  type = "";
  brand = "";
  fit = "";
  colour = "";
  style = "";
  design = "";
  material = "";
  feature = "";
  intent = "";
  weather = "";
  season = "";
  
  setGenderTab();
  getResults(gender, type, brand, fit, colour, style, design, material, feature, intent, weather, season);

}

function clearBack(){
  remMsgs = [];
}









//JavaScript code for chatbot
//On chatbar click - give 'chat-content' class 'displayChat' to show to content
// Script to open chatbot on search bar click
function cbOpen() {
  document.getElementById("chat-content").classList.add("displayChat");
  $("#chatoutput").scrollTop($("#chatoutput")[0].scrollHeight);
}

//On 'Submit' click - remove 'displayChat' to hide the content
function cbClose(){
  document.getElementById("chat-content").classList.remove("displayChat");
}

// When click outside of the chatbot - chatbot closes
window.onclick = function(event){
    if(!event.target.matches(".dontHide")){
      cbClose();
    }
}
