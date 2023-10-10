
<?php include('../includes/header.php'); ?>
<h1>Sign Up</h1>
<div class="signup-form">
    <form action="../models/register.php" method="POST">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" pattern="[A-Za-z0-9]+" title="Username (letters and numbers only, no punctuation or special characters)" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Password must contain at least one uppercase letter, one numeric digit, and one special character." required>
        <button type="submit">Sign Up</button>
    </form>
    <p>Already have an account? <a href="index.php">Login</a></p>
</div>
