<?php

$conn = new mysqli("localhost","bhanuka","mysql","game");
// include("connect.php");

if(isset($_POST['login'])) {
	$sql = mysqli_query($conn,
	"SELECT * FROM users WHERE username='"
	. $_POST["username"] . "' AND
	passwords='" . $_POST["pwd"] . "' ");

	$num = mysqli_num_rows($sql);

	if($num > 0) {
		// $row = mysqli_fetch_array($sql);
		header("location:login_video.html");
		// exit();
		// echo "ok";
	}
	else 
	{
		header("location:error_login.html");
	}
}
?>
