<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hospital";

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");
header("Access-Control-Allow-Credentials: true");

//create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

//check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {

    echo "[";
    while ($row = mysqli_fetch_assoc($result)) {
        $data = new stdClass();
        $no = "no";
        $name = "name";
        $username = "username";
        $password = "password";
        $token = "token";
        $role = "role";

        $data->$no = $row['no'];
        $data->$name = ucwords(strtolower($row['name']));
        $data->$username = $row["username"];
        $data->$password = $row['password'];
        $data->$token = $row['token'];
        $data->$role = $row['role'];

        $data = json_encode($data);
        echo $data . ",";
    }
    echo "{}";
    echo "]";
} else {
    echo "No results found";
}
mysqli_close($conn);
