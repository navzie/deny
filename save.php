<?php

// Get the email from the POST data
$email = $_POST['email'];

// Load the existing email list
$filename = 'emails.csv';
$emails = array();
if (file_exists($filename)) {
  $handle = fopen($filename, 'r');
  while (!feof($handle)) {
    $row = fgetcsv($handle);
    if (!empty($row)) {
      $emails[] = $row;
    }
  }
  fclose($handle);
}

// Generate a unique serial number
$serial_number = count($emails) + 1;

// Add the new email to the list
$emails[] = array($serial_number, $email);

// Save the updated email list
$handle = fopen($filename, 'w');
foreach ($emails as $row) {
  fputcsv($handle, $row);
}
fclose($handle);

// Display a success message
echo "Email saved successfully.";

?>
