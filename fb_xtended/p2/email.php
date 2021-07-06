<?php

$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
	
// Create the email and send the message
$to = 'feedback@xtended.pro'; 

// Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "New message from:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nMessage:\n$message";

$headers .= "From: " . $_REQUEST['email'] . "\r\n"; // Sender's E-mail
// This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
		

header( 'Refresh: 0; url=/lp1/contact.php' );
?>

