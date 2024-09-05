<?php

    $connect__db = mysqli_connect("localhost" , "root" , "" , "fullstack");
    $result = mysqli_query($connect__db , "SELECT * FROM users;");

    $result__for__pagination = mysqli_query($connect__db , "SELECT * FROM users ORDER BY id DESC LIMIT 5 OFFSET 0;");

?>