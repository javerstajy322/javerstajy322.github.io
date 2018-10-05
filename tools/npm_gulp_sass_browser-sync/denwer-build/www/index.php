<?php
if (isset($_GET['a'])) $string_a=htmlentities($_GET['a']);
if (isset($_GET['b'])) $string_b=htmlentities($_GET['b']);
 
$isEmpty=false;
if ((empty($string_a))&&(empty($string_b))) $isEmpty=true;
 
if ($isEmpty==false)
{
	$a = (int)$string_a;
	$b = (int)$string_b;
	$c = $a+$b;
}
else
{
	$a = 1;
	$b = 1;
}
?>
<!DOCTYPE html>
<html lang="ru">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>test PHP</title>
		<link href='css/style.min.css' rel='stylesheet' type='text/css'>
	</head>
	<body>
		<form action="index.php">
			<input name="a" type="text" value="<?php echo $a;?>"><br>
			<input name="b" type="text" value="<?php echo $b;?>"><br>
			<input type="submit" value="SLOJIT 2 NUMBER"><br>
		</form>
		<br><br>
		<button class="form-button">sssss</button>
		<li class="modal-choice">sssssssssssssss</li>
<?php
if ($isEmpty==false)
{
	echo $a." + ".$b." = ".$c;
}
?>
<script src="js/script.js"></script>
	</body>
</html>