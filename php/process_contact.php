<?php 
$errors = '';
$myemail = 'pebasdesign@gmail.com';//<-----Put Your email address here.
if(empty($_POST['name'])  || 
   empty($_POST['email']) || 
   empty($_POST['subject']) ||
   empty($_POST['message']))
{
          	$errors = print "
	<p>
	Sorry your message isn't sent!</p>
	<hr /> 
	<p>Please refresh the page and try again.</p>
	
	";
}

$name = $_POST['name']; 
$email_address = $_POST['email']; 
$subject = $_POST['subject']; 
$message = $_POST['message']; 

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
          	$errors = print "
	<p>
	Sorry your message isn't sent!</p>
	<hr /> 
	<p>Please refresh the page and try again.</p>
	
	";
}

if( empty($errors))
{
	$to = $myemail; 
	$email_body = "You have received a new message from your website. ".
	" Here are the details:\n Name: $name \n Subject: $subject \n Email: $email_address \n Message \n $message"; 
	
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $email_address";
	
	mail($to,$subject,$email_body,$headers);
	// thank you page
	print "
	
	<p>
	Thank you <span>".$_POST['name']."</span></p>
	<hr /> 
	<p>We received your message with this subject: <span>".$_POST['subject']." </span> </p>
	<p>Sent from this: <span>".$_POST['email']." </span></p>
	<p>Thanks again and we will answer as soon as possible. </span></p>
	
	";
} 
?>
