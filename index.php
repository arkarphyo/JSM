<?php

	//Use an autoloader!
	require_once('router/libs/Controller.php');
	require_once('router/libs/Bootstrap.php');
	require_once('router/libs/Model.php');
	require_once('router/libs/View.php');

 	//Library
 	require_once('router/libs/DB_Lib.php');
 	require_once('include/function/permissionStr.php');
	require_once('config/paths.php');
	require_once('include/function/get_timeago.php');
	require_once('config/database.php');
	require_once('class/Jobpost.php');
	require_once('class/OptionList.php');
	require_once('include/function/callOption.php');
	$app = new Bootstrap();