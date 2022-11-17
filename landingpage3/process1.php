<?php
$name=  $_POST['firstname'];
$lastname= $_POST['lastname'];
$email= $_POST['email'];
$tel= $_POST['tel'];
$budget= $_POST['budget'];
$message= $_POST['message'];

?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>SocialPPC</title>


<!--slider functions-->
<link href="css/default.css" rel="stylesheet" type="text/css" />
<script src="js/jquery.js" type="text/javascript"></script>
<script src="js/mobilyslider.js" type="text/javascript"></script>
<script src="js/init.js" type="text/javascript"></script>
<!--end of slider functions-->


<link href="css/index1.css" rel="stylesheet" type="text/css">
<style type="text/css">
a:link {
	text-decoration: none;
}
a:visited {
	text-decoration: none;
}
a:hover {
	text-decoration: none;
}
a:active {
	text-decoration: none;
}
</style>
</head>

<body>
<header id="header">
  <div id="header-wrapper">
  <div id="div-header-wrapper">
    <div id="header-left">
        <img src="img/small-logo.png" alt="header-logo"/>
      <h1>Wee are the real experts in PPC management</h1>
       
        
       <img class="big-ppc" src="img/header-experts.jpg" alt="img" /><h4>Our clients get a full support and fast response.</h4>  <h4>We care for results, not spending your money. </h4>
          <h4>We are honest! This is our number one  for us.</h4>
          <h4>We give you the highest quality PPC Services.</h4>
        <h4>We care for every dollar you spend.</h4>
        
    </div>
    <div id="header-right">
            <nav id="header-nav">
              <ul id="header-ul">
                    <li class="header-li"><a href="#">Home</a></li>
                    <li class="header-li"><a href="#">PPC</a></li>
                    <li class="header-li"><a href="#">Pricing</a></li>
                    <li class="header-li"><a href="#">Company</a></li>
                    <li class="header-li"><a href="#">Blog</a></li>
                    <li class="header-li"><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div id="header-form-wrapper">
                <img src="img/GET SRATEDHERE.png" />
                <form id="header-form" action="#" method="post" name="header-form">                
                 
               <p><label for="FirstName" id="l_firstname">First Name</label><span class="form-span"> <?php 
				  if(empty($name)){
					echo  "*Please enter your first Name";
					  }
				  ?></span><BR />
                  <input type="text" name="firstname" id="firstname" /><BR />
                  <label for="LastName">Last name</label><span class="form-span"> <?php 
				  if(empty($lastname)){
					echo  "*Please enter your last Name";
					  }
				  ?></span><BR />
                  <input type="text" name="lastname" id="firstname" /><BR />
                  <label for="First Name">Email address</label><span class="form-span"> <?php if(empty($email)){
					echo  "*Please enter your Email address";
					  }
				  ?></span><BR />
                  <input type="email" name="email" id="firstname"  title="Enter your e-mail address" class="required email" /><BR />
                  <label for="First Name">Phone number</label><BR />
                  <input type="tel" name="tel" id="firstname" /><BR />
            
                  <label for="budget">Budget</label><br />
              <select name="budget" id="budget">
                  <option value="Milk"> Up to $1,500</option>
                  <option value="Milk">$1,500 - $3,000</option>
                  <option value="Cheese">$3,000 - $5,000</option>
                  <option value="Bread">$5,000 - $10,000</option>
                  <option value="Bread">$10,000 - $15,000</option>
                  <option value="Bread">$15,000 - $20,000</option>
                  <option value="Bread">$20,000 - $30,000</option>
                  <option value="Bread">$30,000 - $50,000</option>
                  <option value="Bread">$50,000 - $75,000</option>
                  <option value="Bread">$75,000 - $100,000</option>
                  <option value="Bread">$100,000+</option>
             </select><br />
                 <label for="message" id="l_message">Message</label><span class="form-span">		 <?php if(empty($message)){
					echo  "*Please enter your message";
					  }
				  ?></span><br />
                 <textarea name="message" id="textarea"></textarea><br />
                 <input id="submit" type="submit" value="Send" name="submit">
                 <?php 
	 if(!empty($name)&&($lastname)&&($email)&&($message))
	{ 
	



$formcontent="From: $name $lastname \n Message: $message  \n Phone: $tel \n Budget: $budget ";

$recipient = "tn2701@gmail.com";

$subject = "Contact Form";

$mailheader = "From: $email \r\n";

mail($recipient, $subject, $formcontent, $mailheader);

echo "Thank You!";
echo "Your message is sent"; }
?>
        </p>
                </form></div>
           </div>
        </div>
    </div>
</header>
<div id="main">
  <div id="main-text">
      <ul class="main-text-ul">
          <li class="our-costomers-img"></li>
          <li class="main-text-li-img"><img src="img/client1.png"/></li>
          <li class="main-text-li-img2"><img src="img/client2.jpg" alt="client-logo2"/></li>
          <li class="main-text-li-img3"><img src="img/client3.jpg" alt="client-img3" /></li>
<li class="main-text-li-img4"><img src="img/client4.jpg" alt="client-img4"/></li>

      </ul>
        
     </div><!--end of main text-->
         <div id="main-text-banner-wrapper">
             <div id="main-left">
             <h1>Welcome to <span class="h1span">SocialPPC</span>, The Best PPC Service</h1>
             <h3 class="h3-main">We are Physics Grads with a Passion for Online Marketing</h3>
                 <div class="boxes">
                     <h3>SocialPPC Management Services</h3>
                     <h4>Our PPC services will enable you to reach your targeted clients online. With SocialPPC you know your campaignis in the right hands!</h4>


                 </div>
                 <div class="boxes">
                 <h3>Physics cum-Laude Grads!</h3>
                 <h4>We are Physics Cum-Laude Grads! What does it mean? We have a great analytic mind to analyze and manage your PPC campaign to the best results.</h4>
                 </div>

                 <div class="boxes">
                 <h3>PPC\SEM Services</h3>
                 <h4>Our PPC services will enable you to reach your targeted clients online. With SocialPPC you know your campaign is in the right hands!</h4>
                 </div>
                 
            <div class="boxes">
                 <h3>PPC\SEM Services</h3>
                 <h4>Our PPC services will enable you to reach your targeted clients online. With SocialPPC you know your campaign is in the right hands!</h4>
                 </div>      
              
             </div><!--end of main left-->
             <div id="main-right">
                  <!--slider-->
         <div class="slider">
			<div class="sliderContent">
				<div class="item">
					<img src="img/img1.jpg" alt="" />
				</div>
				<div class="item">
					<img id="img-2" src="img/img2.jpg" alt="" />
				</div>
				<div class="item">
					<img class="img-3" src="img/img3.jpg" alt="" />
				</div>
				
			</div>
		</div>
        <!--slider end-->
             
             </div>
         
         </div>
     
 <!--<div id="main-text2">
      <ul class="main-text-ul2">
          <li class="main-text-li-img1"><img src="img/client1.png" alt="img-client"/></li>
          <li class="main-text-li-img2"><img src="img/client2.jpg" alt="logo2"/></li>
          <li class="main-text-li-img3"><img src="img/client3.jpg"/></li>
    <li class="main-text-li-img4"><img src="img/client4.jpg"/></li>

      </ul>
 </div>--><!--end of main text-->
    
    
    
</div><!--end of main-->
<div id="footer">
    <h4>&copy;SocialPPC 2013 All rights reserved</h4>
</div>
</body>
</html>
