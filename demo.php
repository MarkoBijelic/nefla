<?php
require './PHPMailer-master/PHPMailerAutoload.php';


$field_name = $_REQUEST['name'];
$field_company = $_REQUEST['company'];
$field_email = $_REQUEST['email'];
$field_phone = $_REQUEST['phone'];
$field_notes = $_REQUEST['notes'];

$to = 'info@neefla.com';
$subject = 'Demo request from neefla.com';


$mail = new PHPMailer;

$mail->SMTPAuth = true; 
$mail->SMTPSecure = 'tls';
$mail->Host = "smtp.office365.com";
$mail->Mailer = "smtp";
$mail->Port = 587;
$mail->Username = "noam@neefla.com";
$mail->Password = "!Neefla3030";

$mail->setFrom('info@neefla.com', 'neefla.com');
$mail->addAddress($to, 'neefla.com');     // Add a recipient
$mail->addReplyTo($field_email, '');


$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = $subject;
$mail->Body = '<p>From: info@neefla.com</p>'
        . '<p>Name: ' . $field_name . '</p>'
        . '<p>E-mail: ' . $field_email . '</p>'
        . '<p>Phone: ' . $field_phone . '</p>'
        . '<p>Company: ' . $field_company . '</p>'
        . '<p>Message: ' . $field_notes . '</p>';


if (!$mail->send()) {
    echo 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
} else { 
   echo "Your message has been sent! Our representatives will reach out shortly.";
 }
?>

