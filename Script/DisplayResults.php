<!-- AJAX search data to display on ASOS website -->
<head>
  <link rel="stylesheet" type="text/css" href="CSS/ProductsStyle.css">
</head>

<?php

//Include the database credentials for access
include("../db.php");

$gender = $_GET['gender'];
$type = $_GET['type'];
$brand = $_GET['brand'];
$fit = $_GET['fit'];
$colour = $_GET['colour'];
$style = $_GET['style'];
$design = $_GET['design'];
$material = $_GET['material'];
$feature = $_GET['feature'];
$intent = $_GET['intent'];
$weather = $_GET['weather'];
$season = $_GET['season'];

//Create SQL query for the database search
$sql = "SELECT * FROM Products WHERE Gender LIKE \"$gender\"
        AND Type LIKE \"%$type%\"
        AND Brand LIKE \"%$brand%\"
        AND Fit LIKE \"%$fit%\"
        AND Colour LIKE \"%$colour%\"
        AND Style LIKE \"%$style%\"
        AND Design LIKE \"%$design%\"
        AND Material LIKE \"%$material%\"
        AND Features LIKE \"%$feature%\"
        AND Intent LIKE \"%$intent%\"
        AND Weather LIKE \"%$weather%\"
        AND Season LIKE \"%$season%\";";
?>

<div class="col-xs-12">

  <?php
  //If the SQL query is successful and there is more than 1 result 
  if($result = mysqli_query($connection, $sql)){ ?>

    <div class="row justify-content-center">
      <div class="col-xs-4" id="ProdHeadText">
        <p id="NumProdText"><?php echo mysqli_num_rows($result) ?> styles found</p> 
      </div>
    </div>

  <?php
  	if(mysqli_num_rows($result) > 0){
  ?>
        <div class="row" id="ProductCont">

      <?php
      while($row = mysqli_fetch_array($result)){   
        //Div each product found inside a new column and Products div
        echo "<div style=\"padding: 5px !important\" class=\"col-xs-12 col-sm-6 col-md-3\">
                <div id=\"Product\">
                  <!--Load product image-->
                    <img id=\"ProdImg\" src=\"" . $row['Image'] . ".png\">
                    <div id=\"ProductInfo\">
                      <p class=\"ProdInfoTxt\">" . $row['Name'] . "</p>

                      <p class=\"ProdInfoTxt\">£" . number_format($row['Price']/100, 2) . "</p>
                    </div>
                </div>
              </div>";  
      
      }
    }
    //if user search Query returns no results, apologise
    else{
      echo "<div class=\"col-xs-12 float-left d-inline-block\">
             	<div id=\"blog\">
             		<h4>Sorry no products available at this time</h4>
             	</div>
            </div>";
  	}
  }
  //If SQL query failed then display message
  else{
    echo "<div class=\"col-xs-12 float-left d-inline-block\">
           	<div id=\"blog\">
           		<h4>Sorry no products available at this time</h4>
           	</div>
          </div>";
  }

  ?>
        </div>

</div>


<?php

mysqli_close($connection);

?>
