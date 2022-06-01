<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

function con(){
	$db = new mysqli('localhost', 'root', 'Hello123!@#', 'farm_db');
	return $db;
}

function header_include(){
	$dir = "styles/";
	if (is_dir($dir)) {
	    if ($dh = opendir($dir)) {
	        while (($file = readdir($dh)) !== false) {
	        	if(is_dir($file)){
		        	//do nothing
	        	}
	        	else{
		        	echo "<link rel='stylesheet' href='styles/".$file."' type='text/css' charset='utf-8'/>";
	        	}
	        }
	        closedir($dh);
	    }
	}
	$dir = "scripts/";
	if (is_dir($dir)) {
	    if ($dh = opendir($dir)) {
	        while (($file = readdir($dh)) !== false) {
	        	if(is_dir($file)){
		        	//do nothing
	        	}
	        	else{
		        	echo "<script src='scripts/".$file."' type='text/javascript'/></script>";
	        	}
	        }
	        closedir($dh);
	    }
	}
}



?>