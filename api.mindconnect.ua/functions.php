<?php


    function getPosts($result__for__pagination)
    {
        while ($post = mysqli_fetch_assoc($result__for__pagination))
            $postsList[] = $post;

        echo json_encode($postsList);
    }

    function getAll($connect__db){
        $res = mysqli_query($connect__db , "SELECT * FROM users;");

        while ($post = mysqli_fetch_assoc($res))
                $postsList[] = $post;

        echo json_encode($postsList);
    }

    function getPost($connect__db , $param) {

        if ($param != null) {

            $page_number = (int) $param;
            $limit = 5;
            $offset = ($limit * $page_number) - $limit;

            $res = mysqli_query($connect__db , "SELECT * FROM users ORDER BY id DESC LIMIT 5 OFFSET ".$offset.";");

            while ($post = mysqli_fetch_assoc($res))
                $postsList[] = $post;

            echo json_encode($postsList);
        }
        else
        {
            mysqli_query($connect__db , "SELECT * FROM users ORDER BY id DESC LIMIT 5 OFFSET 0;");
        }
            

    }


    function addPost($connect__db , $fibbonachi , $data , $IP) {
        $username = $data['username'];
        $number = $data['number'];

        

        mysqli_query($connect__db , "INSERT INTO `users` (`username`,`fibbonachi`,`number`,`ip`) VALUES ('$username','$fibbonachi','$number','$IP');");
    }
    


?>