<?php

include 'connect.php';

if(isset($_POST['signUp'])){ // ako je označen gumb za registraciju
    $firstname=$_POST['fName'];
    $lastname=$_POST['lName'];
    $email=$_POST['email'];
    $password=$_POST['password'];

    



$checkmail = "SELECT * FROM korisnici WHERE email ='$email'";
$result = pg_query($conn, $checkmail);

$nrows = pg_num_rows ($result);

if($nrows>0){

    echo "Email već postoji";
}else{

    $insertQuery = "INSERT INTO korisnici (fname, lname, email, lozinka) VALUES ('$firstname', '$lastname', '$email', '$password')";
 
$result = pg_query($conn, $insertQuery);

if ($result == TRUE){
   header("location:indexx.html");
}
else{
    echo "Pogreška:".pg_last_error();
}

}
}else{


if(isset($_POST['signIn'])){
    $email = $_POST['email'];
    $password = $_POST['password'];
   

    $sql = "SELECT * FROM korisnici WHERE email='$email' and lozinka = '$password'";
    $result = pg_query($conn, $sql);
    $nrows = pg_num_rows ($result);

    if($nrows>0){

        session_start();
        $row = pg_fetch_assoc($result);
        $_SESSION['email']=$row['email'];
        header("Location:indexx.html");
        exit();

    }
    else{
        echo "User not found.";
    }
}
}