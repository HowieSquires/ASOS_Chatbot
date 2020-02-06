<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    <!-- Custom CSS -->
    <link rel="stylesheet" type="text/css" href="CSS/style.css">

    <!--Browser tab icon and title-->
    <link rel="icon" href="res/img/AsosIcon.jpg">
    <title>Men's Clothes | Shop for Men's Fashion | Asos</title>
</head>

<div class="container-fluid">

    <div class="row header">
        <!--logo-->
        <div class="col-sm-1 col-md-1 NoPad">
           <a class="HdBtn" id="logo" href="index.php"><img class="d-block logo" src="res/img/AsosLogo.png"></a>
        </div>

        <div class="col-sm-1 col-md-1 NoPad" id="lgBtn"> 
            <a class="HdBtn" id="MWBtn" href="Womens.php">WOMEN</a>
        </div>

        <div class="col-sm-1 col-md-1 NoPad" id="lgBtn">
            <a class="HdBtn Active" id="MWBtn">MEN</a>
        </div>
        


        <!-- Include chatbot.php which contains the search bar and code for the chatbot integration -->
        <?php include("elements/chatbot.php"); ?>



        <div class="col-sm-1 col-md-2">
            <img class="symbol" src="res/img/Account.png">
            <img class="symbol" src="res/img/Wishlist.png">
            <img class="symbol" src="res/img/Basket.png">
        </div>
    </div>

    
    <div class="row NavBar">
        <div class="col-sm-1 col-md-1 NoPad" id="smBtn">
            <button class="NavBtn" value="All">All</button>
        </div>

        <div class="col-sm-1 col-md-1 NoPad" id="smBtn">
            <button class="NavBtn" value="Top">Tops</button>
        </div>
            
        <div class="col-sm-1 col-md-1 NoPad" id="smBtn">
            <button class="NavBtn" value="Jumpers">Jumpers</button>
        </div>
            
        <div class="col-sm-1 col-md-1 NoPad" id="smBtn">
            <button class="NavBtn" value="Coats">Coats</button>
        </div>
            
        <div class="col-sm-1 col-md-1 NoPad" id="smBtn">
            <button class="NavBtn" value="Bottoms">Bottoms</button>
        </div>
            
        <div class="col-sm-1 col-md-1 NoPad" id="smBtn">
            <button class="NavBtn" value="Underwear">Underwear</button>
        </div>
            
            <!-- <div class="col-sm-1 col-md-1 NoPad" id="smBtn">
                <a class="NavBtn" href="#">Active</a>
                <button class="NavBtn" value="Active">Active</button>
            </div> -->
    </div>

    <div class="row">
        <div class="col-sm-12 NoPad">
            <img src="res/img/AsosWomensPromo.png" style="width: inherit">
        </div>
    </div>

    <option id="gender" value="Male"></option>
    <div class="row" id="Products"></div>

</div>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
<script src='Script/GetResults.js'></script>
<script src='Elements/Script/CBscript.js'></script>

</html>