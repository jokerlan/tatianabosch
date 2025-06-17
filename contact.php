<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect data safely
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // You can display this for now
    echo "<h2>Thank you, $name!</h2>";
    echo "<p>Your message has been received.</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Message:</strong><br>$message</p>";
}
?>
