<?php

include_once 'app/views/UserView.php';

class UserController{
    private $view;

    function __construct(){
        $this->view = new UserView();
    }

    function home(){
        $this->view->showHome();
    }

    function getProductos(){
        $this->view->showProductos();
    }
}