<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
$c = true;

//= Формирование самого письма  
$title = $_POST["title"];
$name = $_POST["name"];
$tel = $_POST["tel"];

//форматируем с разметкой
$message = '
<html>
<body>
<center>
<table border="1" cellpadding="6" cellspacing="0" width="90%" bordercolor="#ed7272">
<tr><td colspan="2" align="center" bgcolor="#fe8d1b"><b>Информация о заказе:</b></td></tr>
';

$message .= '<tr><td><b>Имя клиента:</b></td><td>'.$name.'</td></tr>';
$message .= '<tr><td><b>Клиент оставил телефон:</b></td><td>'.$tel.'</td></tr>';


//= Настройки PHPMailer   
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    $mail->isSMTP();
    $mail->CharSet = "utf-8";
    $mail->SMTPAuth   = true;

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'soboleznuem.minsk@gmail.com'; // Логин на почте
    $mail->Password   = 'dfykiztsfpilwiog'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;

    $mail->setFrom('', 'Заявка с вашего сайта'); // Адрес самой почты и имя отправителя

    //= Получатель письма   
    $mail->addAddress('filippovvladimir1970@gmail.com');
    $mail->addAddress('kebikovgen@gmail.com');

    //=Отправка сообщения   
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $message;

    $mail->send();

} catch (Exception $e) {
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
