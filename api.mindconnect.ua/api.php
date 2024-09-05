<?php


    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Credentials: true");
    header("Content-type: json/application; charset=UTF-8");

    require_once "db.php";
    require_once "functions.php";


    $request__method = $_SERVER['REQUEST_METHOD'];
    $page = $_GET['page'];
    $num = $_POST['number'];

    function fibo($num) { 
        if ($num == 0 ) return 0; 

        if ($num == 1 || $num == 2) { 
            return 1; 
        } 
        else { 
            return fibo($num - 1) + fibo($num -2); 
        } 
    } 
        

    
    
    /*
    if ($page != null)
    {
        $arguments = explode('/' , $page);

        $type = $arguments[0];
        $param = $arguments[1];
    }
    */

    

    
    if ($request__method === 'GET')
    {
        $page_number = $_GET['page'];

        if ($page_number == null) 
            getPosts($result__for__pagination);

        elseif ($page_number != null) {
            getPost($connect__db , $page_number);
        }
    }









    
    elseif ($request__method === 'POST') {
        addPost($connect__db , fibo($num) , $_POST, $_SERVER['SERVER_ADDR']);
    }

    
    
    

?>