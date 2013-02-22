<?php 
$errors = '';
$myemail = 'pebasdesign@gmail.com';//<-----Put Your email address here.
if(empty($_POST['email']))
{
    	$errors = print "
	<p>
	Subscription failed!</p>
	<hr /> 
	<p>Please refresh the page and try again.</p>
	
	";
}

$email_address = $_POST['email']; 

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
      	$errors = print "
	<p>Subscription failed!</p>
	<hr /> 
	<p>Please refresh the page and try again.</p>
	
	";
}

if( empty($errors))
{
	$to = $myemail; 
	$subject = "New Newsletter Subscription";
	$email_body = "You have received a new subscription from your website. ".
	" Here are the details:\n Email: $email_address"; 
	
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $email_address";
	
	mail($to,$subject,$email_body,$headers);
	// thank you page

	print "
	<p>Thank you!</p>
	<hr /> 
	<p>You are successfuly subscribed with this email: <span>".$email_address." </span></p>
	
	";
	
} 
?>



