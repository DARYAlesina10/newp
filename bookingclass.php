<?php

Class Booking {
	public $location;
	public $date;
	public $time;
	public $client;

	function __construct( $loc, $date, $time, $client )
	{
		$this->location = $loc;
		$this->date 	= $date;
		$this->time 	= $time;
		$this->client 	= $client;
	}

	function is_booked()
	{
		//$wpdb->query();
		return true;
	}

}

$book = new Booking(49, 'today', 'time', 2);

if ( is_user_logged_in() ) {
	echo 'a';
} else {
	echo 'b';
}