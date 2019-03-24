<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: Content-Type");
	require_once('./mail/class.phpmailer.php');
		
	if(!isset($_POST['email'])) die("Forbidden.");

	$subject = 'Contact form submitted from '.$_POST['email'];
	$body =	'Name: '.$_POST['name'].'<br/>'.
            'Phone: '.$_POST['phone'].'<br/>'.
            'Email: <a href="mailto:'.$_POST['email'].'">'.$_POST['email'].'</a><br/>'.
            'Message: '.$_POST['message'].'<br>';
    
    sendMail($body, $subject);
    
    echo "success";

    function sendMail($body, $title){
        
		error_log("\n\n\n\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SENDING MAIL >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
		error_log("title:".$title);
		error_log("body:".$body);
		
		$mail = new PHPMailer();
		$mail->CharSet="UTF-8";
	    
		$mail->AddReplyTo("info@swedishnet.se","info@swedishnet.se");
		$mail->SetFrom('info@swedishnet.se', "info@swedishnet.se");
		$mail->AddBCC("irvingedc@gmail.com" , "Irving Diaz");
		$mail->AddAddress("info@swedishnet.se", "info@swedishnet.se");
		$mail->Subject    = $title;
		$mail->AltBody    = "To view the message properly, please use an HTML compatible email viewer.";
		$mail->MsgHTML($body);                                           
		$mail->Send();
    }
    
?>