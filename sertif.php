<h3 class="date_h1"></h3>

<form name="" method="post" action="https://pandoroom.org/wp-admin/admin.php?page=pandoroom-booking/sertif.php">    
                        <select  id="nominals" class="booking-popup__input">
                                            <option value="1000" selected>1000</option>
											<option value="2000">2000</option>
											<option value="3000">3000</option>
											<option value="4000">4000</option>
											<option value="5000">5000</option>
                                          </select>
						  
						<input type="text" name="isk" placeholder="  ">   
						 
						<button type="submit">Выпустить сертификт</button> 
						 
</form>
						 
<?

global $wpdb;

if($_POST["isk"]){
	
	$useem=''.$_POST["isk"].'@pdfteee.ru';
	$user = get_user_by('email', $useem);
	echo $user->ID;
	$delquery = "SELECT * FROM wp_pand_booking WHERE client_id='".$user->ID."' ORDER BY book_time";    
	$delbook  = $wpdb->get_results( $delquery );	
	echo		"			<table class='one_quest'><tr><th>Сертификат</th><th>Дата Выпуска</th><th>Наминал</th></tr>									";	
	
	foreach ($delbook as $item) 		{	

	$locations[$item->location_id][] = $item;
	$location_data = get_post( $item->location_id );					
	
	if($item->report!=0) { $author='<BR><small>(<a href="/wp-admin/user-edit.php?user_id='.$time->report.'" target="_blank">админ</a>)</small>'; }						
	if($item->report==0) { $author='<BR><small>(самостоятельно)</small>'; }				 
	$i++;				   
	echo '<tr>';                           
	echo '<td>',$location_data->post_title, '</td>
	<td>', date("d.m.Y H:i", strtotime( $item->book_time ) ), '</td>
	<td>', $user->display_name, '</td>
	<td>', date("d.m.Y H:i", strtotime( $item->book_date ) ), '</td>
	<td>', $author, '</td>
	<td><p align="center">
	<input type="button" value="ОТМЕНИТЬ" OnClick="DelTime(\''.$item->id.'\');" name="out" style="font-family: Verdana; font-size: 10pt; color: #FFFFFF; background-color: #FF0000"><input type="button" value="РЕДАКТ" OnClick="ShowTime(\''.$item->id.'\');" name="outs" style="'.$ui.'; display: block; font-family: Verdana; font-size: 10pt;color: #FFFFFF;background-color: #424c53;border: 0px;padding: 4px;padding-left: 18px;padding-right: 16px;cursor: pointer;border: 2px solid #00000082;"></p>
	</td>								'; 
	echo '</tr>';			}
	echo		"																					
	</table>";}
	
	include_once(WP_PLUGIN_DIR.'/pandoroom-booking/popup.inc'); 
	
	
?>