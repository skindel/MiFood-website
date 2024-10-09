<?php
    $to = 'admin@mifood.es';
    $name = $_POST["contact-name"];
    $email= $_POST["email-address"];
    $guests= $_POST["guests"];
    $phone= $_POST["phone-number"];
    $notes= $_POST["post-message"];
    


    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From: " . $email . "\r\n"; // Sender's E-mail
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $message ='<table style="width:100%">
        <tr><td>Name: </td><td>'.$name.'</td></tr>
        <tr><td>Email: </td><td>'.$email.'</td></tr>
        <tr><td>Phone: </td><td>'.$phone.'</td></tr>
        <tr><td>Text: </td><td>'.$notes.'</td></tr>
        
    </table>';

    $subject = 'MIFOOD WEB MESSAGE';

    if (@mail($to, $subject, $message, $headers))
    {
        echo 'The message has been sent.';
    }else{
        echo 'failed';
    }

?>
