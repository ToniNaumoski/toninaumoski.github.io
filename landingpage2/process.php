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
<title>Untitled Document</title>
<link href="css/index.css" rel="stylesheet" text type="text/css">
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

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){

var social= $('#main #main-wrapper h3');


$(social).hover(function(){
	
	$(this).stop()
	
	.animate({opacity:.6},400)
	
	},function () {
    $(this).stop()
	.animate({opacity:1},400)
	
  })
   });
</script>

</head>

<body>
<div id="header">
    <div id="header-top">
      <h2>Welcome to <span class="span-blue">WinnerPPC</span>, The Best PPC Service
      </h2>
      <h3>We are Physics Grads with a Passion for Online Marketing       </h3>
    </div><!--end of header-top-->
  <div id="header-wraper">
        <div id="header-logo">
            <img src="img/small-logo.png" alt="header-logo" />
        </div><!--end of header-logo-->   
    <div id="header-menu">
            <div id="nav">
                <ul id="header-ul">
         <li class="header-li"><a href="#">Home</a></li>
                    <li class="header-li"><a href="#">PPC</a></li>
                    <li class="header-li"><a href="#">Pricing</a></li>
                    <li class="header-li"><a href="#">Company</a></li>
                    <li class="header-li"><a href="#">Blog</a></li>
                    <li class="header-li"><a href="#">Contact</a></li>
                </ul><!--end of header-ul-->
            </div><!--end of nav-->
        </div><!--end of header menu-->
  </div><!--end of header-wrapper-->
</div><!--end of header-->
<div id="main">
    <div id="main-wrapper">
         <h1>
    <!--PPC enables our customers to reach their prospecting clients online. NuclearPPC focus on creating and managing your Pay Per Click (PPC) campaigns with the full attention span you need to get to the best results we can give you.-->PPC stands for Pay-Per-Click marketing, a model of internet advertising in which advertisers pay a specific amount each time one of their ads is clicked. Often pay-per-click marketing is used with search advertising, enabling businesses to advertise on search engines such as Google.
        </h1> 
        <div id="cloud-main">
        <h4>Cloud support & consulting</h4>
        </div><!--end of cloud main-->
        <div id="woman">
        </div><!--end of div woman-->
        <div id="main-form-wrapper">
            <div id="form-header">
            <img src="img/form-header.png" alt="form-img"/>
            </div><!--end of form header-->
            
          <form id="main-form" action="#" method="post" name="header-form"> <p>                
              
              <label for="FirstName" id="l_firstname">First Name</label><span class="form-span"> <?php 
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
                  <input type="text" name="lastname" id="lastname" /><BR />  
                  
                 <label for="First Name">Email address</label>
				 <span class="form-span"> <?php if(empty($email)){
					echo  "*Please enter your Email address";
					  }
				  ?></span><BR />
                <input type="email" name="email" id="email"  title="Enter your e-mail address" class="required email"> <BR />  
                 
                  
                 <label for="First Name">Phone number</label>
				 <BR />
                  <input type="tel" name="tel" id="tel" /><BR />
            
                  <label for="budget">Budget</label><br />
              <select name="budget"  id="budget">
                  <option value="Up to $1,500">Up to $1,500</option>
                  <option value="$1,500 - $3,000">$1,500 - $3,000</option>
                  <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000 - $15,000">$10,000 - $15,000</option>
                  <option value="$15,000 - $20,000">$15,000 - $20,000</option>
                  <option value="$20,000 - $30,000">$20,000 - $30,000</option>
                  <option value="$30,000 - $50,000">$30,000 - $50,000</option>
                  <option value="$50,000 - $75,000">$50,000 - $75,000</option>
                  <option value="$75,000 - $100,000">$75,000 - $100,000</option>
                  <option value="$100,000+">$100,000+</option>
             </select><br />
                 <label for="message" id="l_message">Message</label> 
		<span class="form-span">		 <?php if(empty($message)){
					echo  "*Please enter your message";
					  }
				  ?></span><br />
                 <textarea name="message" id="message"></textarea><br />
                 
                 <input id="submit" type="submit" value="Send " name="submit">
        
        
                 
<?php 
	 if(!empty($name)&&($lastname)&&($email)&&($message))
	{ 
	



$formcontent="From:\n FirstName: $name \n LastName: $lastname \n Message: $message \n Mail $email  \n Phone: $tel \n Budget: $budget ";

$recipient = "tn2701@gmail.com";

$subject = "Contact Form";

$mailheader = "From: $email \r\n";

mail($recipient, $subject, $formcontent, $mailheader);

echo "Thank You!";
echo "Your message is sent"; }
?>
<br>
</p>
          </form>
            
        </div><!--end of main form wrapper-->
        <h2>98% of customers recommend <span class="span-blue">WinnerPPC</span>.</h2>
        <h3><span class="span-blue">Find out why →</span></h3>
        
        <div id="footer">
        <h4>©WinnerPPC 2013 All rights reserved</h4>
            <ul id="footer-ul">
               <li class="footer-li"><a href="#">Home</a></li>
                <li class="footer-li"><a href="#">PPC</a></li>
                <li class="footer-li"><a href="#">Pricing</a></li>
                <li class="footer-li"><a href="#">Company</a></li>
                <li class="footer-li"><a href="#">Blog</a></li>
                <li class="footer-li"><a href="#">Contact</a></li>
            </ul>
        </div><!--end of fotter-->
    </div><!--end of main-wrapper-->   
   
</div><!--end of main-->
</body>
</html>
    