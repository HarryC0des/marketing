<?php
$apiKey = '814dff8c217e4e5bd1a8dc82da419894-1654a412-687ae6ff';
$domain = 'harrywahl.com';

$data = [
    'from'    => 'Website Form <ContactForm@harrywahl.com>',
    'to'      => 'contact@harrywahl.com',
    'subject' => 'New Contact Form Submission',
    'text'    => "Name: {$_POST['name']}\nEmail: {$_POST['email']}\nMessage: {$_POST['message']}"
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.mailgun.net/v3/$domain/messages");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_USERPWD, "api:$apiKey");

$response = curl_exec($ch);
curl_close($ch);

if ($response === FALSE) {
    echo 'Error sending email.';
} else {
    echo 'Email sent successfully!';
}
?>
