<?php
if(@$_POST["hidden"]) {
	$dt=date("d F Y, H:i:s"); // дата и время
	$mail="crazyyy@gmail.com"; // e-mail куда уйдет письмо
	$title="Запрос обратного звонка"; // заголовок(тема) письма
	$fnm=$_POST["name"];
	$fnm=htmlspecialchars($fnm); // обрабатываем


	$email="info@fender.me"; // e-mail откуда письмо

	$phone=$_POST["phone"];
	$fmail=$_POST["email"];
	$name=$_POST["name"];

	$mess.="<b>Имя:</b> $name<br>";
	$mess.="<b>Телефон:</b> $phone<br>";
	$mess.="<b>Почта:</b> $fmail<br>";
	$mess.="Форма <b>ЗАКАЗАТЬ ЗВОНОК</b>";

	$headers="MIME-Version: 1.0\r\n";
	$headers.="Content-type: text/html; charset=UTF-8\r\n"; //кодировка
	$headers.="From: Лендинг Fender\r\n"; // откуда письмо (необязательнакя строка)
	mail($mail, $title, $mess, $headers); // отправляем
}
?>