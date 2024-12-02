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
    $arguments = explode('/' , $page);
    $param = $arguments[1];
    //$num = $_POST['number'];

    function fibo($num) { 
        if ($num == 0 ) return 0; 

        if ($num == 1 || $num == 2) { 
            return 1; 
        } 
        else { 
            return fibo($num - 1) + fibo($num -2); 
        } 
    } 
        

    

    
    if ($request__method === 'GET')
    {
        if ($page == 'posts/')
            getPosts($result__for__pagination);

        elseif ($page == 'posts/' . $param) 
            getPost($connect__db , $param);
        
    }


    elseif ($request__method === 'POST') {
        if ($page == 'posts/')
            addPost($connect__db , fibo($num) , $_POST, $_SERVER['SERVER_ADDR']);
    }

    
    
    

?>