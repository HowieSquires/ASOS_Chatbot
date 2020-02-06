//Javascript reads when webpage is ready then finds all Products
// var gender = $("#gender").val();
var gender, setGender, type, setType, brand, fit, colour, style, design, material, feature, intent, weather, season, indMsg;
var storedValues = ["storeGender", "storeType", "storeBrand", "storeColour", "storeFit", "storeStyle", "storeDesign", "storeMaterial", "storeFeature", "storeIntent", "storeWeather", "storeSeason"];


$(document).ready(function(){

    gender = "%a%";
    setGender = null;
    type = "";
    setType = null;
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
    indMsg = "";

    

        if(window.location.href == "http://localhost/AsosBot/index.php" || window.location.href == "http://localhost/AsosBot/"){
            for(var i = 0; i < storedValues.length; i++){
                window.localStorage.removeItem(storedValues[i]);
            }
        }


        if(window.localStorage.getItem("storeGender") != null){
            gender = window.localStorage.getItem("storeGender");
            setGender = "set" + window.localStorage.getItem("storeGender").toLowerCase();
        }
        if(window.localStorage.getItem("storeType") != null){
            type = window.localStorage.getItem("storeType");
            setType = "set" + window.localStorage.getItem("storeType").toLowerCase();
        }
        if(window.localStorage.getItem("storeBrand") != null){
            brand = window.localStorage.getItem("storeBrand");
        }
        if(window.localStorage.getItem("storeFit") != null){
            fit = window.localStorage.getItem("storeFit");
        }
        if(window.localStorage.getItem("storeColour") != null){
            colour = window.localStorage.getItem("storeColour");
        }
        if(window.localStorage.getItem("storeStyle") != null){
            style = window.localStorage.getItem("storeStyle");
        }
        if(window.localStorage.getItem("storeDesign") != null){
            design = window.localStorage.getItem("storeDesign");
        }
        if(window.localStorage.getItem("storeMaterial") != null){
            material = window.localStorage.getItem("storeMaterial");
        }
        if(window.localStorage.getItem("storeFeature") != null){
            feature = window.localStorage.getItem("storeFeature");
        }
        if(window.localStorage.getItem("storeIntent") != null){
            intent = window.localStorage.getItem("storeIntent");
        }
        if(window.localStorage.getItem("storeWeather") != null){
            weather = window.localStorage.getItem("storeWeather");
        }
        if(window.localStorage.getItem("storeSeason") != null){
            season = window.localStorage.getItem("storeSeason");
        }


        if(window.location.href == "http://localhost/AsosBot/Results.php"){
            for(var i = 0; i < storedValues.length; i++){
                window.localStorage.removeItem(storedValues[i]);
            }
        }

        setGenderTab();

        getResults(gender, type, brand, fit, colour, style, design, material, feature, intent, weather, season);

})








    $('.pageGender').click(function () {
        localStorage.removeItem("storeGender");

        switch ($(this).attr('value')) {
            case 'Women':
                gender = "Female";
                setGender = "setfemale";                
                break;
            case 'Men':
                gender = "Male";
                setGender = "setmale";
                break;
            default:
                gender = "%a%";
                setGender = "undefined";
                break;
        }


        if(window.location.href == "http://localhost/AsosBot/index.php" || window.location.href == "http://localhost/AsosBot/"){
            storeValues();
            window.localStorage.setItem("storeIndMsg", gender);
            window.location.href = "http://localhost/AsosBot/Results.php";
        };

        chat(gender, "right");
        remMsgs.push(gender);
        getReply(gender);
        setGenderTab();
        getResults(gender, type, brand, fit, colour, style, design, material, feature, intent, weather, season);
    });











    $('.NavBtn').click(function () {

        switch ($(this).attr('value')) {
                    case 'Top':
                        type = "Top"
                         break;
                    case 'Jumpers':
                        type = "Jumper"
                         break;
                    case 'Coats':
                        type = "Coat"
                         break;
                    case 'Bottoms':
                        type = "Bottoms"
                         break;
                    case 'Underwear':
                        type = "Underwear"
                         break;
                    case 'All':
                        type = "";
                }

        var localType = type;
        var localGender = gender;

        stepOne(stepTwo);

        function stepOne(callback){
            setTimeout(() => {
                clearConv();
                callback(stepThree);
            }, 10)
            
        }

        function stepTwo(callback){
            setTimeout(() =>{
                type = localType;
                setGender = "set" + localGender.toLowerCase();
                localType = null;
                localGender = null;
                console.log("!!!Type: " + type);
                callback(stepFour);
            }, 20)
            
        }

        function stepThree(callback){
            setTimeout(() => {
                callback(stepFive);
            }, 30)
            
        }

        function stepFour(callback){
            setTimeout(() =>{
                chat(type, "right");
                remMsgs.push(type);
                if(setGender == "setmale" || setGender == "setfemale"){
                   getReply(setGender); 
                }
                getReply(type);
                callback(stepSix);
            }, 40)            
        }

        function stepFive(callback){
            setTimeout(() =>{
                checkVars();
                callback();
            }, 50)
        }

        function stepSix(){
            getResults(gender, type, brand, fit, colour, style, design, material, feature, intent, weather, season);   
        }
        
    });
















    $( "#chatinput" ).keypress(function() {

        if(keyCode === 13){

                
            checkVars();

            if(window.location.href == "http://localhost/AsosBot/index.php" || window.location.href == "http://localhost/AsosBot/"){
                window.location.href = "http://localhost/AsosBot/Results.php";
            };

            setGenderTab();

            getResults(gender, type, brand, fit, colour, style, design, material, feature, intent, weather, season);
        }
    });









function setGenderTab(){

        if(window.location.href == "http://localhost/AsosBot/index.php" || window.location.href == "http://localhost/AsosBot/"){
            document.getElementById("Womens").classList.remove("Active");
            document.getElementById("Mens").classList.remove("Active");
        }
        else{
            if(gender.toLowerCase() == "female"){
                document.getElementById("Womens").classList.add("Active");
                document.getElementById("Mens").classList.remove("Active");
            }
            else if(gender.toLowerCase() == "male"){
                document.getElementById("Mens").classList.add("Active");
                document.getElementById("Womens").classList.remove("Active");
            }
            else{
                document.getElementById("Womens").classList.remove("Active");
                document.getElementById("Mens").classList.remove("Active");
            }
        }
}





function storeValues(){
    window.localStorage.setItem("storeGender", gender);
    window.localStorage.setItem("storeType", type);
    window.localStorage.setItem("storeBrand", brand);
    window.localStorage.setItem("storeFit", fit);
    window.localStorage.setItem("storeColour", colour);
    window.localStorage.setItem("storeStyle", style);
    window.localStorage.setItem("storeDesign", design);
    window.localStorage.setItem("storeMaterial", material);
    window.localStorage.setItem("storeFeature", feature);
    window.localStorage.setItem("storeIntent", intent);
    window.localStorage.setItem("storeWeather", weather);
    window.localStorage.setItem("storeSeason", season);
}





function checkVars(){
 
                if(getBotGender == "undefined"){
                    gender = gender;
                }
                else if(getBotGender != "undefined"){
                    if(getBotGender == "%a%" || getBotGender == "all"){
                        gender = "%a%";
                    }
                    else{
                        gender = getBotGender;
                    }
                }
                else{
                    gender = "%a%";
                }


                if(getBotType == "undefined" || getBotType == null){
                    type = "";
                }
                else if(getBotType != "undefined" && getBotType != null){
                    type = getBotType;
                    setType = "set" + type.toLowerCase();
                }

                if(getBotBrand == "undefined"){
                    brand = "";
                }
                else if(getBotBrand != "undefined"){
                    brand = getBotBrand;
                }


                if(getBotFit == "undefined"){
                    fit = "";
                }
                else if(getBotFit != "undefined"){
                    fit = getBotFit;
                }


                if(getBotColour == "undefined"){
                    colour = "";
                }
                else if(getBotColour != "undefined"){
                    colour = getBotColour;
                }


                if(getBotStyle == "undefined" || getBotStyle == null){
                    style = "";
                    setType = null;
                    }
                else if(getBotStyle != "undefined" && getBotStyle != null){
                    style = getBotStyle;


                    var btmStyles = ["jeans", "shorts", "skirt", "trouser", "leggings", "chini", "joggers"];
                    var ctStyles = ["boucle", "jacket", "coat", "blazer", "raincoat", "cape", "parka", "harrington", "waistcoat", "bomber", "fanorak", "trench coat", "worker jacket", "reissue jacket", "track jacket"];
                    var jmprStyles = ["hoodie", "sweatshirt", "cardigan", "short sleeve hoodie", "jersey bomber"];
                    var topStyles = ["bodysuit", "tshirts", "turtleneck", "blouse", "shirt", "polo", "vest", "boy shirt", "long sleeve polo", "ringer tshirt", "long sleeve tshirt"];
                    var undStyles = ["set", "bra", "thong", "bralet", "trunk", "boxer", "briefs", "jockstrap"]; 


                    for(var i = 0; i < btmStyles.length; i++){
                        if(style == btmStyles[i]){
                            type = "bottoms";
                            setType = "setbottoms";
                       }
                    }

                    for(var i = 0; i < ctStyles.length; i++){
                        if(style == ctStyles[i]){
                            type = "coat";
                            setType = "setcoat";
                       }
                    }

                    for(var i = 0; i < jmprStyles.length; i++){
                        if(style == jmprStyles[i]){
                            type = "jumper";
                            setType = "setjumper";
                       }
                    }

                    for(var i = 0; i < topStyles.length; i++){
                        if(style == topStyles[i]){
                            type = "top";
                            setType = "settop";
                       }
                    }

                    for(var i = 0; i < undStyles.length; i++){
                        if(style == undStyles[i]){
                            type = "underwear";
                            setType = "setunderwear";
                       }
                    }


                    if(window.location.href == "http://localhost/AsosBot/index.php" || window.location.href == "http://localhost/AsosBot/"){
                        window.localStorage.setItem("storeSetType", setType);
                    }

                    var settypes = ["setbottoms", "setcoat", "setjumper", "settop", "setunderwear"];

                    for(var i = 0; i < settypes.length; i++){
                        if(setType == settypes[i]){
                            getReply(setType);
                            setType = null;
                        }
                    }
                }

                

                if(getBotDesign == "undefined"){
                    design = "";
                }
                else if(getBotDesign != "undefined"){
                    design = getBotDesign;
                }


                if(getBotMaterial == "undefined"){
                    material = "";
                }
                else if(getBotMaterial != "undefined"){
                    material = getBotMaterial;
                }


                if(getBotFeature == "undefined"){
                    feature = "";
                }
                else if(getBotFeature != "undefined"){
                    feature = getBotFeature;
                }


                if(getBotIntent == "undefined"){
                    intent = "";
                }
                else if(getBotIntent != "undefined"){
                    intent = getBotIntent;
                }


                if(getBotWeather == "undefined"){
                    weather = "";
                }
                else if(getBotWeather != "undefined"){
                    weather = getBotWeather;
                }


                if(getBotSeason == "undefined"){
                    season = "";
                }
                else if(getBotSeason != "undefined"){
                    season = getBotSeason;
                }


                if(window.location.href != "http://localhost/AsosBot/Results.php"){
                    storeValues();
                }
                else if(window.location.href == "http://localhost/AsosBot/Results.php"){
                    console.log("DELETING STORED VALUES")
                    for(var i = 0; i < storedValues.length; i++){
                        window.localStorage.removeItem(storedValues[i]);
                    }
                }

                getResults(gender, type, brand, fit, colour, style, design, material, feature, intent, weather, season);
                setGenderTab();

}


function getResults(gender, type, brand, fit, colour, style, design, material, feature, intent, weather, season){
    $.get("Script/DisplayResults.php", {"gender": gender, "type": type, "brand": brand, "fit": fit, "colour": colour, "style": style, "design": design, "material": material, "feature": feature, "intent": intent, "weather": weather, "season": season}, function(data) {
        $("#Products").html(data);
    })
}