<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: Ting Co.';
    $to = 'welllife0801@hotmail.com';
    $subject = 'Form submission from Ting Co.';
    $human = $_POST['human'];

    $body = "From: $name\n Email: $visitor_email\n Message:\n $message";

    if ($_POST['submit']) {
		if ($name != '' && $human != '') {
			if ($human == '7') {
				if (mail($to, $subject, $body, $from)) {
					echo '<p>Your message has been sent!</p>';
				} else {
					echo '<p>Something went wrong, go back and try again!</p>';
				}
			} else if ($_POST['submit'] && $human != '7') {
				echo '<p>You answered the anti-spam question incorrectly!</p>';
			}
		} else {
			echo '<p>You need to fill in all required fields!</p>';
		}
	}
