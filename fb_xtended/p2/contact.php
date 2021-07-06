<?php

{
if (mail("$adresat", "Сообщение с сайта", "От: $name\nАдрес: $email\nТема: $to\nСообщение:\n$message")) {
$ttt = 'Message was sent! Thank you.';
}
else
{
$ttt = 'Message wasn not sent.';
}
echo "<script type=\"text/javascript\">alert( \"$ttt\");</script> \n";
}
header( 'Refresh: 1; url=/lp1/index.html' );
?>
