<?php

include_once './libs/smarty/libs/Smarty.class.php';

class UserView{

    function showHome(){
        $smarty = new Smarty ();
        $smarty->display('./templates/main.tpl');
    }
}