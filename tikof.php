<?php
header('Content-Type: text/html; charset=utf-8');
$path = $_SERVER['DOCUMENT_ROOT'];
include_once $path . '/wp-config.php';
include_once $path . '/wp-load.php';
include_once $path . '/wp-includes/wp-db.php';
include_once $path . '/wp-includes/pluggable.php';
include_once $path . '/wp-includes/post.php';



global $wpdb;

$json = file_get_contents('php://input');

$decoded = json_decode($json);
$name =$decoded->da;


$resultsssa = file_get_contents("https://api.telegram.org/bot511019545:AAEkk76DGMPZ-jRNR3loTHFXqMR_rjAGv6o/sendMessage?chat_id=-1001926693021&text=Пришло -".$name." ");

	
	
if($name){
	


	
	
	
	
	
	
	
	
	
	
	
	$url = 'https://apis.clockster.com/company/v1/auth/token'; 


$post_datax = array(
"client_id"=> '769',
"client_secret"=>"ZV7dypiRV4RfgjmBQZLfbRjgoUVtUelf1c7xDEQK",

);

$headersx = array("Content-Type: application/json");


$data_jsonx = json_encode($post_datax);
$curl = curl_init();
curl_setopt($curl, CURLOPT_HTTPHEADER, $headersx);curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 );
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_VERBOSE, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, $data_jsonx);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true); 

$resultm = curl_exec($curl);

$hjm=json_decode($resultm);

$tok=$hjm->data;
$f=$tok->access_token;
	
	
	
	
$resultsssa = file_get_contents("https://api.telegram.org/bot511019545:AAEkk76DGMPZ-jRNR3loTHFXqMR_rjAGv6o/sendMessage?chat_id=-1001926693021&text=Пришло ".$name." ");
			





	
		
	$url = 'https://apis.clockster.com/company/v1/users/'.$name.''; 
$post_datax = array(
 
 
 
 
);

$headersx = array("Authorization: Bearer ".$f."","Content-Type: application/json");


$data_jsonx = json_encode($post_datax);
$curl = curl_init();
curl_setopt($curl, CURLOPT_HTTPHEADER, $headersx);curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 );
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_VERBOSE, 1); 
curl_setopt($curl, CURLOPT_POST, false); // 
curl_setopt($curl, CURLOPT_URL, $url);

$resultm = curl_exec($curl);

$hjm=json_decode($resultm);	
$tok=$hjm->data;
$fb=$tok->phone;	
$dilgn=$tok->position_id;		
	

$namem="".$tok->first_name." ".$tok->last_name."";






$today 			= date("Y-m-d");



if($dilgn==3583){

$resultsssa = file_get_contents("https://api.telegram.org/bot511019545:AAEkk76DGMPZ-jRNR3loTHFXqMR_rjAGv6o/sendMessage?chat_id=-1001926693021&text=Пришло - 2 ");

$qstr = "SELECT * FROM wp_sotr WHERE tel =".$fb." ";
$user_books = $wpdb->get_results($qstr);
$fooz = (int) $user_books[0]->ball;


$wpdb->insert(

		'wp_tickets',

		array(	 'dataz'=> $today,
				 'prichin'	=> "Бизнесс",
				 'ball'=> 1,
				 'tel'	=> $fb,
				 'admine'=> '',
				 'status'	=> 1
				 'koment'=>"Автоматический",
				 'tar'	=> $fooz,
				 'name'=> $namem,
				 'zx'=>$today,
				
				 ),
array( '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s' )

);

}




}










?>	