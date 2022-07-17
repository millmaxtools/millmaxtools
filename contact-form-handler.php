<?php
    if ($_POST['send'] && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
   
        $name = $_POST['name'];
        $email = $_POST["email"];
        $phone = $_POST['tel'];
        $website = $_POST['company'];
        $message = $_POST['message'];
        $formcontent=" From: $name \n Phone: $phone \n Company: $website \n Message: $message";
        $recipient = "contact-us@millmax.com";
        $subject = "Contact Form - $name";
        $mailheader = "From: $email \r\n";
        
        if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            header("Location: index.html#contact-us");
            exit;
        }
            
        mail($recipient, $subject, $formcontent, $mailheader);
        header("Location: index.html");
    }

?>
