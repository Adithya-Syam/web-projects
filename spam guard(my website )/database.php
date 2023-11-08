<?php

$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "your_database"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$username = $_POST["username"];
$password = $_POST["password"];


$hashedPassword = password_hash($password, PASSWORD_DEFAULT);


$sql = "INSERT INTO users (username, password) VALUES ('$username', '$hashedPassword')";

if ($conn->query($sql) === TRUE) {
    echo "Credentials stored successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
