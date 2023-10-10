<?php

include('../includes/header.php');

include('../config/db.php');

session_start();



if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Handle the password reset request

    $username = $_POST['username'];

    $new_password = $_POST['new_password'];

    $confirm_password = $_POST['confirm_password'];



    if ($new_password === $confirm_password) {

        // Passwords match, proceed with reset

        $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);

        $sql = "UPDATE users SET password = ? WHERE username = ?";

        $stmt = $conn->prepare($sql);

        $stmt->bind_param("ss", $hashed_password, $username);



        if ($stmt->execute()) {

            header("Location: index.php");

            exit();

        } else {

            echo "An error occurred. Please try again later.";

        }

    } else {

        echo "Passwords do not match. Please try again.";

    }

} else {


    ?>



    <h1>Forgot Password</h1>

    <div class="password-reset-form">

        <form action="forgot_password.php" method="POST">

            <label for="username">Username:</label>

            <input type="text" id="username" name="username" required>

            <label for="new_password">New Password:</label>

            <input type="password" id="new_password" name="new_password" required>

            <label for="confirm_password">Confirm Password:</label>

            <input type="password" id="confirm_password" name="confirm_password" required>

            <button type="submit">Reset Password</button>

        </form>

    </div>



    <?php

}

?>
