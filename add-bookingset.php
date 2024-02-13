<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

$path = $_SERVER['DOCUMENT_ROOT'];
include_once $path . '/wp-config.php';
include_once $path . '/wp-load.php';
include_once $path . '/wp-includes/wp-db.php';
include_once $path . '/wp-includes/pluggable.php';
include_once $path . '/wp-includes/post.php';

global $wpdb;


$today 			= date("Y-m-d H:i:s");
$todayses 			= date("Y-m-d");
$location 		= intval ($_GET["loc"]);
$book_time 		= $_GET["time"];
$client_id 		= intval ($_GET["client"]);
$price 			= intval( $_GET["itogovaya"] );
$avtor = $_GET["avt"] ;
$certificate 	= intval( $_GET["cert"] );
$cur_user	 	= intval( $_GET["addeduser"] );
$cur_user	 	= intval( $_GET["addeduser"] );
$sr	 	= $_GET["derts"] ;//
$anim	 	= $_GET["anim"] ;//
$comand	 	= $_GET["comand"] ;
$comd	 	= $_GET["coms"] ;
$segodnya=

$boking_time = $book_time.':00';
$bz = strtotime($boking_time);

$qstr = "SELECT * FROM wp_pand_booking WHERE book_time = '".$boking_time."' AND location_id =' ".$location."'";
						    $date_books = $wpdb->get_results($qstr);

						   if (count($date_books) == 0) {
						    	






$cu	 	= intval( $_GET["uv"] );// напоминалки юникс тайм
$cut	 	= intval( $_GET["uvl"] );// напоминалки юникс тайм
$kross = intval( $_GET["der"] ); // смеж
$krossto = intval( $_GET["derty"] ); // смеж 
$gost = "1816";
$location_post = get_post( $location );

echo $todayses ;

echo $sr	;

$duons = strtotime($todayses);
$duonsto = strtotime($sr);




$t = is_int( $location );
//$c = is_int( $client_id );
$c = 'test';
$p = is_int( $price );
$b = strtotime($book_time);
$ct = is_int( $certificate );

if ( $t && $c && $p && $ct && $b != false ) {


	    $userdata = array(
        'user_login'    =>  $_GET["regbox"],
        'user_email'    =>  $_GET["regbox"],
        'user_url'      =>  '',
        'user_pass'     =>  md5($_GET["regbox"]), 

        'first_name'    =>  $_GET["regname"],
        'display_name'  =>  $_GET["regname"],
        'nickname'      =>  $_GET["regname"],
        'phone'         =>  $_GET["regphone"]
    );
	

	$clientnow = get_user_by( 'email', $_GET["regbox"] );
    if($clientnow->user_email != "") { $user_id=$clientnow->ID;      }
	else
     {
      $user_id = wp_insert_user( $userdata ) ;
	  if( ! is_wp_error( $user_id ) ) {
      update_user_meta($user_id, 'phone',$_GET["regphone"]);
     }
	// file_put_contents('123',implode('-',$userdata));
   }
  //file_put_contents('get',implode(' ^^^ ',$_GET)."-".$_GET['addeduser']);
  
  if($user_id==3454 ||$user_id==2071){$usnr=0;}else{$usnr=1;}
  
  
  if($_GET['regsubs']=='true') 
   {
    include_once $path . '/wp-content/plugins/pandoroom-booking/mailchimp.cfg';
    
    // file_put_contents('result',$res);
   } 
	
	$wpdb->insert(
		'wp_pand_booking',
		array(	'location_id'	=> $location,
				'book_time'		=> $book_time,
				'client_id' 	=> $user_id,
				'certificate' 	=> $certificate,
				'price'			=> $price,
				'book_date' 	=> $today,
				'confirmed' 	=> 0,
				'report'		=> $cur_user,
				'uved' 	=> "https://gate.smsaero.ru/send/?user=info@pandoroom.org&password=7c3bb4a830c94e87f6d0bd6392241df8&to=".$_GET["regphone"]."&text=Ваш Квест ".$location_post->post_title." на ".$book_time." Скоро начнется! &from=PANDOROOM",
				'posled' 	=> "https://gate.smsaero.ru/send/?user=info@pandoroom.org&password=7c3bb4a830c94e87f6d0bd6392241df8&to=".$_GET["regphone"]."&text=Спасибо, что посетили PANDOROOM! Будем благодарны Вам, если оставите о нас отзыв: http://pandoroom.org/otziv&from=PANDOROOM",
				'comm' 	=> "".$comd."",
				'uv' 	=> 0,
				'ot' 	=> 0,
				'komanda' 	=> "".$comand."",
				'foto' 	=> "",
				'textotz' 	=> "Спасибо, что посетили PANDOROOM! Будем благодарны Вам, если оставите о нас отзыв: http://pandoroom.org/otziv",
				'animater' 	=> 'без аниматора'
		),
		array( '%d', '%s', '%d', '%d', '%d', '%s', '%d', '%d', '%s', '%s', '%s', '%d', '%d', '%s', '%s', '%s', '%s',  )
	);

	$inserted = $wpdb->insert_id;
Print_r($wpdb->last_error);
	echo $inserted;
     }
	else {
	echo 'false';
     }

$location_post = get_post( $location );
$phonesе = $phones;
if($duons==$duonsto){
$msg = urlencode("****Клиент ".$_GET["regname"]." - Тел:".$_GET["regphone"]."-  самостоятельно добавил КВЕСТ ".$location_post->post_title." на ".$book_time."- В свое мероприятие!!!!!!***");
}else{$msg = urlencode("****Клиент ".$_GET["regname"]." - Тел:".$_GET["regphone"]."-  самостоятельно добавил КВЕСТ ".$location_post->post_title." на ".$book_time."- В свое мероприятие!!!!!!***");}
 


$resultsss = file_get_contents("https://api.telegram.org/bot511019545:AAEkk76DGMPZ-jRNR3loTHFXqMR_rjAGv6o/sendMessage?chat_id=-1001277891601&text=".$msg."");



	

}
						   else {
						    	echo false;
						    }


