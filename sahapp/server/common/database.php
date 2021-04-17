<?php
    function getConnection()
    {
        $host = 'localhost';
        $db_name = 'sahapp';
        $username = 'admin';
        $password = '123456';
        $conn= new mysqli($host, $username, $password, $db_name);
        if ($conn->connect_error) {
            $conn= null;
        }
        return $conn;
    }
