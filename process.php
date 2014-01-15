<html><body>
<?php
$RTs = $_POST['RTs'];
$handle = fopen("results.txt","a");

fwrite($handle, $RTs . "\n");

fclose($handle);

?>
</body></html>


