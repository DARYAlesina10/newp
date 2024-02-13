<?php

header('Content-Type: text/html; charset=utf-8');
$path = $_SERVER['DOCUMENT_ROOT'];
include_once $path . '/wp-config.php';
include_once $path . '/wp-load.php';
include_once $path . '/wp-includes/wp-db.php';
include_once $path . '/wp-includes/pluggable.php';
include_once $path . '/wp-includes/post.php';




global $wpdb;


$start = ($_GET['fn']);

$query = "SELECT * FROM wp_pand_booking WHERE book_time LIKE '".$start."%' ORDER BY book_time";

						    $even = $wpdb->get_results($query);




$i=0;

 foreach ($even  as $value) {
	 $vremay = ''.$value->book_time.'';
	 $nadpisi = ''.$value->location_id.'';
	 $das = date("H:i",$vremay);
     $location_data = get_post($nadpisi);
     $nova=array('naz','vr');
	 $novsa=array($location_data->post_title,$das);
	 $testem[$i]=array_combine($nova,$novsa);
 
 

 $i++; 
  }


$i=0;
   foreach ($testem  as $value) {
	if($value!=""){
		$testema[$i]=$value;
		
	}
	$i++;
	
}
$dsx=rand(100, 150000);
$fp = fopen('oth/othtukr'.$dsx.'.csv', 'a');
fputs($fp, chr(0xEF) . chr(0xBB) . chr(0xBF)); // BOM

foreach ($testem as $fields) {
	
fputcsv($fp, $fields, ';', '"');
	
	

}
fclose($fp); 
 
 
//print_r($testemz);
//Print_r($mass);
echo json_encode("http://pandoroom.org/oth/othl".$dsx.".csv");  
?>