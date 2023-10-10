<?php
include('../config/db.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve user input and perform validation

    // Hash the password
    $hashed_password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Insert the user into the database
    $sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $_POST['username'], $hashed_password);

    if ($stmt->execute()) {
        // User registered successfully
        header("Location: ../views/index.php");
        exit();
    } else {
        // Error occurred during registration
        echo "Registration failed.";
    }
}

include('../includes/header.php');
?>
<h1>Sign Up</h1>
