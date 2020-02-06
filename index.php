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
    <title>ASOS | Online Shopping for the Latest Fashion</title>
</head>

<body>
	<!--Container for bootstrap-->
<div class="container-fluid index">

     <div class="row header">
        <!--logo-->
        <div class="col-sm-1 col-md-1 NoPad">
           <a class="HdBtn" id="logo"><img class="d-block logo" src="res/img/AsosLogo.png"></a>
        </div>



        <div class="col-sm-1 col-md-1 NoPad" id="lgBtn"> 
            <button class="HdBtn pageGender" id="Womens" value="Women">WOMEN</button>
        </div>

        <div class="col-sm-1 col-md-1 NoPad" id="lgBtn">
            <button class="HdBtn pageGender" id="Mens" value="Men">MEN</button>
        </div>



        

        <!-- Include chatbot.php which contains the search bar and code for the chatbot integration -->
        <?php include("elements/chatbot.php"); ?>


        <!-- Unusable buttons -->
        <div class="col-sm-1 col-md-2">
            <img class="symbol" src="res/img/Account.png">
            <img class="symbol" src="res/img/Wishlist.png">
            <!-- usable -->
            <img class="symbol" src="res/img/Basket.png">
        </div>
    </div>


    <!-- deactivated Asos promo advertisements  -->
    <div class="row promoBar">
        <div class="col-sm-6 col-md-6" style="background-color: purple">
            <p style="margin-top: 2%">WOMEN: 20% OFF DRESSES AND JUMP SUITS</p>
        </div>

        <div class="col-sm-6 col-md-6" style="background-color: orange">
            <p style="margin-top: 2%">MEN: 20% OFF FRESH FOOTWEAR</p>
        </div>
    </div>

    <!-- Main page content -->
    <div class="row main">
        <div class="col-sm-12">

            <div class="row" style="margin-top: 350px">
                <div class="col-sm-1 col-md-4 offset-md-4">
                    <div class="mainText">
                        <h1>THIS IS ASOS</h1>
                    </div>
                </div>
            </div>

            <div class="row" style="margin-top: 5px">
                <div class="col-sm-1 col-md-4 offset-md-4">
                    <div class="mainText">
                        <h2>ASOS DESIGN and 850+ brands</h2>
                    </div>
                </div>
            </div>

            <!-- Womens/Mens navigation buttons -->
            <div class="row PgNav">
                <div class="col-sm-1 col-md-2 NoPad" id="PgBtnTxt">
                    <a class="PgBtn pageGender" id="Womens" value="Women">SHOP WOMENS</a>
                </div>

                 <div class="col-sm-1 col-md-2 NoPad MensBtn" id="PgBtnTxt">
                    <a class="PgBtn pageGender" id="Mens" value="Men">SHOP MENS</a>
                </div>
            </div>

            <!-- main content footer -->
            <div class="row mainFooter" style="margin-top: 90px">
                <div class="col-sm-1 col-md-2 offset-md-2">
                    <p class="footText">PREMIER DELIVERY</p>
                    <p class="subFootText">Unlimited free Next-Day Delivery for a whole year for £9.95. T&Cs apply</p>
                </div>
                <div class="col-sm-1 col-md-2 offset-md-4">
                    <p class="footText">STUDENTS: 10% OFF 24/7</p>
                    <p class="subFootText">+ More good stuff</p>
                </div>
            </div>
            
        </div>
    </div>

    <!-- Unusable page footer - as image -->
    <div class="row">
        <div class="col-sm-12 NoPad">
            <img src="res/img/AsosFooter.png" style="width: inherit">
        </div>
    </div>


</div>
</body>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
<script src='Script/GetResults.js'></script>

</html>