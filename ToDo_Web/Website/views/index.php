
<?php include('../includes/header.php'); 

?>
<h1>Login</h1>
<div class="login-form">
    <form action="../models/login.php" method="POST">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <button type="submit">Login</button>
    </form>
    <p>Don't have an account? <a href="signup.php">Sign Up</a></p>
    <p>Forgot your password? <a href="forgot_password.php">Reset it</a></p>

</div>

