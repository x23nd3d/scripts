<?php
//Нужно менять теги "message" и прочие исходя из тегов в файле index.html
$ccr_subject = ' New Client'; // Subject of your email
$to =  'feedback@xtended.pro';  //Recipient's E-mail

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= "From: " . $_REQUEST['email'] . "\r\n"; // Sender's E-mail
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$message .= 'Name: ' . $_REQUEST['name'] . "<br>";
$message .= 'Text: ' . $_REQUEST['your_message'] . "<br>";
$message .= 'Phone: ' . $_REQUEST['subject'];


if (@mail($to, $ccr_subject, $message, $headers))
{
	// Transfer the value 'sent' to ajax function for showing success message.
	echo 'sent';
}
else
{
	// Transfer the value 'failed' to ajax function for showing error message.
	echo 'failed';
}
?>