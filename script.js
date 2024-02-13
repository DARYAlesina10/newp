$(document).ready(function() {


});



function createScrollTopListener() {
  const scrollTopButton = document.createElement("button");
  scrollTopButton.className = "arrow-button animated-button arrow-button--scroll-top";
  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  })
  document.body.appendChild(scrollTopButton);

  const toggleScrollTopButton = () => {
    if (scrollY >= 600) {
      scrollTopButton.style.opacity = "1";
    } else {
      scrollTopButton.style.opacity = "0";
    }
  }

  toggleScrollTopButton();
  window.addEventListener("scroll", toggleScrollTopButton)
}
createScrollTopListener();

function addWaveToButtons() {
  const createWave = (event) => {
    const button = event.currentTarget;

    const circle = document.createElement("div");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.classList.add("wave");
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.offsetX - radius}px`;
    circle.style.top = `${event.offsetY - radius}px`;

    setTimeout(() => {
      circle.remove();
    }, 1000);

    button.appendChild(circle);
  }

  const buttons = document.querySelectorAll(".animated-button");
  buttons.forEach(button => {
    button.addEventListener("click", createWave);
  })
}
addWaveToButtons();
$(document).on('click','.quests-info__time', function(){


		names=$(this).attr('data-nazv');
	    tima=$(this).attr('data-time');
	    vrem=$(this).attr('data-calend');
	    sena=$(this).attr('data-prise');
		dop=$(this).attr('data-dop');
		animk=$(this).attr('data-dopa');
		ogr=$(this).attr('data-ogr');
		ext=$(this).attr('data-ank');
		kartinka=$(this).attr('data-cart');
		adress=$(this).attr('data-adress');
		$('#questPopup1Label').text(names);
		$('#questPopupphoto').css('background-image', 'url(' + kartinka + ')');
		$('#questPopupdate').text(vrem);
		$('#questPopuptime').text(tima);
		$('#questPopupstoim').text(sena);
		$('#questPopupdopigr').children().first().next().val(dop);
		$('#questPopupdopigr').children().first().next().next().val(dop*2);
		$('#cena').text(sena);
		$('#textus').text(ext);
		$('#dopcen').text(dop);
		
        $('#questPopupadress').text(adress);
		$('#get_cena').val(sena);
		$('#anzzv').val(animk);
		df=$(this).attr("data");
		if(df==13304 || df==8341 || df==14677){$('#questPopupanim').show();}else{$('#questPopupanim').show();}
	var get='?loc='+$(this).attr("data")+'&derts='+$(this).attr("data-calend")+'&uv='+$(this).attr("data-nap")+'&uvl='+$(this).attr("data-otz")+'&time='+$(this).attr("data-calend")+" "+$(this).attr("data-time")+'&client='+$("#user_logged_in").attr("data")+'&price='+$(this).attr("data-prise");
	$("#get_param").val(get);
		
			});	

	$( "#questPopupdopigr" ).change(function() {
     var an=$("#questPopupdopigr").val();
	 var dop=$("#questPopupanim").val();
	 var dceb=$("#get_cena").val();
	 var it = $('#cena').text();
	 var sda=an*1;
	 var sdda=dop*1;
	 var sddda=it*1;

	 $('#questPopupstoim').text(sda+sdda+sddda);
});
	
	$("#questPopuptel").mask("79999999999");
	
	$( "#questPopupanim" ).change(function() {
     var an=$("#questPopupdopigr").val();
	 var dop=$("#questPopupanim").val();
	 var dceb=$("#get_cena").val();
	 var it = $('#cena').text();
	 var sd=an*1;
	 var sdd=dop*1;
	 var sddd=it*1;
	 
	 $('#questPopupstoim').text(sd+sdd+sddd);
});


$("#stoliki").click(function(e){
	
	ach=document.getElementById('nax').value;
	

    date=document.getElementById('datz').value;
	if ($('#loung').is(':checked')){
	            var zal='loung';
        } else {
	             var zal=''; 
				 }
	
	    $('.stolsz').empty();
		$('.stolsz').hide();
		$('.preloader-55').show();


	$.ajax({
		url:"/svstol.php?dat="+date+"&start="+ach+"&zal="+zal+"&ok=2",
		success:function(result){

			$('.preloader-55').hide();
	        
			
			
			  jq_json_obj = $.parseJSON(result); //Convert the JSON object to jQuery-compatible

      if(typeof jq_json_obj == 'object'){ //Test if variable is a [JSON] object
        jq_obj = eval (jq_json_obj); 

        //Convert back to an array
        jq_array = [];
        for(elem in jq_obj){
            jq_array.push(jq_obj[elem]);
        }
		
		var strJSON = jq_array[0];

		for (i = 0; i < jq_array.length; i++) {
			
			
			if(jq_array[i]["zal"]==1){zals="Кафе";}else if(jq_array[i]["zal"]==2){zals="Лаунж";}else if(jq_array[i]["zal"]==3){zals="Кидс";}
			
          $(".stolsz").show();
		  $(".stolsz").append('<div class="col-lg-6 stols"><div class="row" style="color: #000;"><div class="col-lg-5"> <img  class="testov"  style="width: 100%;" src="'+jq_array[i]["kar"]+'"/></div><div class="col-lg-3"><legend class="booking-popup__legend">Зал '+zals+'</legend><div class="nomera">стол '+jq_array[i]["stol"]+'</div><span><img class="button__icon" src="https://pandoroom.org/wp-content/themes/pandoroom/imgs/person.2.fill.png" alt="">'+jq_array[i]["vm"]+'</span></div><div class="col-lg-4"><div class="animated-button button stolmer"data-zal="Зал '+zals+' стол '+jq_array[i]["stol"]+'" data-uy="'+jq_array[i]["id"]+'" data-vm="'+jq_array[i]["vm"]+'">Выбрать</div></div></div></div>');
			
			
			
			
			
			}}
			

			}
			
			
			}); 
			

			
			e.preventDefault();
			
			
			
			
			});	
		


$("#next1").click(function(e){
	$('#vibkv').show();
	$('html, body').animate({
 scrollTop: $("#vibkv").offset().top // класс объекта к которому приезжаем
 }, 500); 
	
	

		
	
		$("div.preloader-5").show();

		var dats =$(this).attr('data-dates');
	    var start =$(this).attr('data-start');
	    var stop =$(this).attr('data-stop');
	

      var get='?date='+dats+'&st='+start+'&sp='+start+'';
      wurl=location.href;

  $.ajax({
	  url:location.href+get,
      success:function(html){

           $("#kvests").html(html);
           $("#kvests").removeClass("in_process");
		   $("div.preloader-5").hide();
		   
		
		}
		   
		   
		   
		   });e.preventDefault();
	
	
	
	$('#vibkv').show(500);
	
});


$("#kvestvib").click(function(e){
	

		
	
		$("div.preloader-5").show();

		var dats =$(this).attr('data-dates');
	    var start =$(this).attr('data-start');
	    var stop =$(this).attr('data-stop');
	

      var get='?date='+dats+'&st='+start+'&sp='+start+'';
      wurl=location.href;

  $.ajax({
	  url:location.href+get,
      success:function(html){

           $("#kvests").html(html);
           $("#kvests").removeClass("in_process");
		   $("div.preloader-5").hide();
		   
		
		}
		   
		   
		   
		   });e.preventDefault();
	
	$('#vibzali').show(500);
	
	$('#vibkv').show(500);
	
});





$("#dtolvibx").click(function(e){
   
   $('html, body').animate({
 scrollTop: $("#vibzali").offset().top // класс объекта к которому приезжаем
 }, 500); 
   
   var vrem=$(this).attr("data-start");
   var datr=$(this).attr("data-dates");
   var vnm=$("#vozr").val();
   var kvz=$("#kdet").val();
   var kdet=$("#kgos").val();
   var kol=kvz*1+kdet*1;
      var get='?datec='+datr+' '+vrem+'';
      wurl=location.href;
if ($('#loung').is(':checked')){
	            var zal='loung';
        } else {
	             var zal=''; 
				 }
	
	    $('.stolsz').empty();
		$('.stolsz').hide();
		$('.stolszl').empty();
		$('.stolszl').hide();
		$('.stolsk').empty();
		$('.stolsk').hide();
		if(vrem==""){$("#nax").css("border","1px solid red");}else{$("#nax").css("border","1px solid #a4d013");}
	if(datr==""){$("#datz").css("border","1px solid red");}else{$("#datz").css("border","1px solid #a4d013");}
	if(vnm==""){$("#vozr").css("border","1px solid red");}else{$("#vozr").css("border","1px solid #a4d013");}
	if(kvz==""){$("#kdet").css("border","1px solid red");}else{$("#kdet").css("border","1px solid #a4d013");}
	if(kdet==""){$("#kgos").css("border","1px solid red");}else{$("#kgos").css("border","1px solid #a4d013");}
		if(vrem!=='' & datr!=='' & vnm!=='' & kvz!=='' & kdet!==''){
			
			
			
			
			
			
			
			
			
  $.ajax({
	 url:"/svstol.php?dat="+datr+"&start="+vrem+"&stop="+vrem+"&kol="+kol+"&voz="+vnm+"&zal="+zal+"&ok=2",
      success:function(result){

			$('.preloader-5').hide();
	        $(this).attr("disabled"); 
			
			
			  jq_json_obj = $.parseJSON(result); //Convert the JSON object to jQuery-compatible

      if(typeof jq_json_obj == 'object'){ //Test if variable is a [JSON] object
        jq_obj = eval (jq_json_obj); 

        //Convert back to an array
        jq_array = [];
        for(elem in jq_obj){
            jq_array.push(jq_obj[elem]);
        }
		
		var strJSON = jq_array[0];
ki = 0;
lo = 0;
ka = 0;
var с='';
        var vnm=$("#vozr").val();
		for (i = 0; i < jq_array.length; i++) {
			if(i>2){var vv='sllp';}else{var vv='';}
			if(vnm>8){var m='pok';var n='';}else{var m='';var n='poks';}
			
		if(jq_array[i]["zal"]==1){zals="Кидс";kzals="kids";
          $(".stolsz").show();
		  if($(".kids").length>1){var vvz='net';}
		  $(".stolsz").append('<div class="col-lg-6  '+kzals+'  stols '+vvz+' '+m+'" ><div class="row" style="color: #000;"><div class="col-lg-12"> <img  class="testov olk"  style="width: 100%;" src="'+jq_array[i]["kar"]+'" data-bs-toggle="modal" data-bs-target="#stolPopup1"></div><div class="row"><div class="col-lg-12 col-sm-6"><div class="ro" style="padding-bottom: 15px;padding-top: 15px;padding-left: 15px;"><h4>Зал Кидс стол '+jq_array[i]["stol"]+'</h3></div></div><div class="col-lg-12" style="padding-bottom: 15px;"><span><img class="button__icon" src="https://pandoroom.org/wp-content/themes/pandoroom/imgs/person.2.fill.png" alt="">'+jq_array[i]["vm"]+'</span><span><img class="button__icon" src="https://pandoroom.tech/wp-content/uploads/2024/02/divan.png" alt="">Мягкие диваны </span><span><img class="button__icon" src="https://pandoroom.tech/wp-content/uploads/2024/02/dostup-v-igrovuyu.png" alt="">Доступ в детскую</span></div></div><div class="col-lg-12 col-sm-6"><div class="animated-button button stolmer"data-zal="Зал '+zals+' стол '+jq_array[i]["stol"]+'" data-uy="'+jq_array[i]["id"]+'" data-vm="'+jq_array[i]["vm"]+'">Выбрать</div></div></div></div>');
		
		}else if(jq_array[i]["zal"]==2){zals="Лаунж"; kzals="laun"; $(".stolszl").show();if($(".laun").length>1){var vvzx='netx'; }
		$(".stolszl").append('<div class="col-lg-6  '+kzals+'  stols '+vvzx+' '+n+' " ><div class="row" style="color: #000;"><div class="col-lg-12"> <img  class="testov olk"  style="width: 100%;" src="'+jq_array[i]["kar"]+'" data-bs-toggle="modal" data-bs-target="#stolPopup1"/></div><div class="row"><div class="col-lg-12 col-sm-6"><div class="ro"style="padding-bottom: 15px;padding-top: 15px;padding-left: 15px;"><h4>Зал Лаунж стол '+jq_array[i]["stol"]+'</h3></div></div><div class="col-lg-12 " style="padding-bottom: 15px;"><span><img class="button__icon" src="https://pandoroom.org/wp-content/themes/pandoroom/imgs/person.2.fill.png" alt="">'+jq_array[i]["vm"]+'</span><span><img class="button__icon" src="https://pandoroom.tech/wp-content/uploads/2024/02/plejstejshn.png" alt="">Playstation 4</span><span><img class="button__icon" src="https://pandoroom.tech/wp-content/uploads/2024/02/divan.png" alt="">Мягкие диваны </span><span><img class="button__icon" src="https://pandoroom.tech/wp-content/uploads/2024/02/USB-1.png" alt=""></span></div></div><div class="col-lg-12 col-sm-6"><div class="animated-button button stolmer"data-zal="Зал '+zals+' стол '+jq_array[i]["stol"]+'" data-uy="'+jq_array[i]["id"]+'" data-vm="'+jq_array[i]["vm"]+'">Выбрать</div></div></div></div>');
		
		
		}else if(jq_array[i]["zal"]==3){zals="Кафе";kzals="kafee";$(".stolsk").show();if($(".kafee").length>1){var vvzm='netm';}
			$(".stolsk").append('<div class="col-lg-6  '+kzals+'  stols '+vvzm+' " ><div class="row" style="color: #000;"><div class="col-lg-12"> <img  class="testov olk"  style="width: 100%;" src="'+jq_array[i]["kar"]+'" data-bs-toggle="modal" data-bs-target="#stolPopup1"/></div><div class="row"><div class="col-lg-12 col-sm-6"><div class="ro" style="padding-bottom: 15px;padding-top: 15px;padding-left: 15px;"><h4>Зал Кафе стол '+jq_array[i]["stol"]+' </h3></div></div><div class="col-lg-12 " style="padding-bottom: 15px;"><span><img class="button__icon" src="https://pandoroom.org/wp-content/themes/pandoroom/imgs/person.2.fill.png" alt="">'+jq_array[i]["vm"]+'</span></div></div><div class="col-lg-12 col-sm-6"><div class="animated-button button stolmer"data-zal="Зал '+zals+' стол '+jq_array[i]["stol"]+'" data-uy="'+jq_array[i]["id"]+'" data-vm="'+jq_array[i]["vm"]+'">Выбрать</div></div></div></div>');
		
			}
		  
			
			
			}
			
			}
			
    $(".next_dates").removeClass("date_selected");
   $('#vibzali').show(500);
		
		   

		
		}});
			
		}else{}
		
		});




$(document).on('click','#izkvest', function(){
$( "#bezkvest" ).trigger( "click" );
$(this).parent().next().show();
$('.delkv').remove();



});

$(document).on()

$(document).on('click','#iztort', function(){
$( "#svert" ).trigger( "click" );$( "#bezert" ).trigger( "click" );
$(this).parent().next().show();
$('.deltort').remove();


});

$(document).on('click','.dellf', function(){

$(this).parent().parent().remove();
var prt=$(this).attr('data-as');

$( '.'+prt+'' ).trigger( "click" );

});

$(document).on('click','#izshow', function(){
$( "#bezdsh" ).trigger( "click" );
$(this).parent().next().show();
$('.delsh').remove();

});
$(document).on('click','#izukr', function(){
$( "#bezukr" ).trigger( "click" );
$(this).parent().next().show();
$('.delukr').remove();

});

$(document).on('click','#bezkvest', function(){




if ($('#bezkvest').is(':checked')){
	$(this).parent().next().hide();
    $('#cdv').append('<div class="uls delkv"><a href="#vibkv" class="prik" style="text-decoration: line-through !important;">❌ Без квеста </a></div>');	
    $('.delkvf').remove();
	$('.selskve').removeClass('button--orange');
	$('.selskve').removeClass('sels');
	$('.selskve').removeClass('selskve');
} else {
$(this).parent().next().show();
 $('.delkv').remove();
}
});
$(document).on('click','#bezert', function(){




if ($('#bezert').is(':checked')){
	$('#gkl').hide();
    $('#cdv').append('<div class="uls deltort"><a href="#vibtorts" class="prik" style="text-decoration: line-through !important;">❌ Без торта </a></div>');
    $('.deltortf').remove();
	$('.selstort').removeClass('button--orange');
	$('.selstort').removeClass('sels');
	$('.selstort').removeClass('selstort');
	$('.topx').prop('selectedIndex',0);
} else {
$('#gkl').show();
$('.deltort').remove();$('.deltortd').remove();
}









});


$(document).on('click','#svert', function(){
if ($('#svert').is(':checked')){
	$('#gkl').hide();
    $('#cdv').append('<div class="uls deltortd"><a href="#vibtorts" class="prik">✔️ Свой торт </a></div>');
    $('.deltortf').remove();
	$('.selstort').removeClass('button--orange');
	$('.selstort').removeClass('sels');
	$('.selstort').removeClass('selstort');
	$('.topx').prop('selectedIndex',0);
} else {

$('#gkl').show();
$('.deltort').remove();
$('.deltortd').remove();
}
});

$(document).on('click','#bezukr', function(){


if ($('#bezukr').is(':checked')){
	
$(this).parent().next().hide();
$('#cdv').append('<div class="uls delukr"><a href="#ukrvib" class="prik" style="text-decoration: line-through !important;">❌ Без украшений </a></div>');
$('.delukrf').remove();
$('.selsukr').removeClass('button--orange');
$('.selsukr').removeClass('sels');
$('.selsukr').removeClass('selsukr');

} else {
$(this).parent().next().show();
$('.delukr').remove();
}






});

$(document).on('click','#bezdsh', function(){



if ($('#bezdsh').is(':checked')){
	$(this).parent().next().hide();
    $('#cdv').append('<div class="uls delsh"><a href="#shvib" class="prik"  style="text-decoration: line-through !important;">❌ Без шоу-программы </a></div>');
    $('.delshf').remove();
    $('.selsshow').removeClass('button--orange');
	$('.selsshow').removeClass('sels');
	$('.selsshow').removeClass('selsshow');

} else {
$(this).parent().next().show();
$('.delsh').remove();
}


});

$(document).on('click','#idkvestus', function(){

	if ($(this).is(':checked')){
	$(".kids").show();
	$(".laun").hide();
	$(".kafee").hide();
	$('#idlaunge').prop('checked', false);
	$('#idkafe').prop('checked', false);
	} else {
		$(".kids").show();
		$(".laun").show();
	$(".kafee").show();
	}
});



$(document).on('click','#idlaunge', function(){


	if ($(this).is(':checked')){
	$(".kids").hide();
	$(".laun").show();
	$(".kafee").hide();
	
	$('#idkvestus').prop('checked', false);
	$('#idkafe').prop('checked', false);
	} else {
		$(".kids").show();
		$(".laun").show();
	$(".kafee").show();
	}
});

$(document).on('click','#idkafe', function(){

	if ($(this).is(':checked')){
	$(".kids").hide();
	$(".laun").hide();
	$(".kafee").show();
	$('#idkvestus').prop('checked', false);
	$('#idlaunge').prop('checked', false);

	} else {
		$(".kids").show();
		$(".laun").show();
	$(".kafee").show();
	}
});











$("#next2").click(function(e){
		$('#vibtorts').show();
		$('html, body').animate({
 scrollTop: $("#vibtorts").offset().top // класс объекта к которому приезжаем
 }, 500); 
		
		
		
	   


	   $(this).hide();
	
});


$("#next3").click(function(e){
	$('#shvib').show();
	$('html, body').animate({
 scrollTop: $("#shvib").offset().top // класс объекта к которому приезжаем
 }, 500); 
	
		
	   
	
});







$("#next5").click(function(e){
	$('#ukrvib').show();
	$('html, body').animate({
 scrollTop: $("#ukrvib").offset().top // класс объекта к которому приезжаем
 }, 500); 
	
		
	   
	
});


$("#next6").click(function(e){
		$('#iton').show();
		
		$('html, body').animate({
 scrollTop: $("#iton").offset().top // класс объекта к которому приезжаем
 }, 500);
		
	
	    	$('#stplk').hide(500);
});

$("#next7").click(function(e){
		$('#iton').show();
		var price = 0;

		
		
        $('#stplk').hide(500);
	$('html, body').animate({
 scrollTop: $("#iton").offset().top // класс объекта к которому приезжаем
 }, 500); 	
});

$("#tortiks").click(function(e){
		$('.sl').show(500);
	    
	
});
$(document).on('click','#stolk', function(){	
		$('.sll').show(500);
	    
	
});
 
$('body').on('click', function (e) {
 var price = 0;
     $('.cens').each(function() {
    price += parseInt(this.textContent);
	
  });
  $('#sums').text(price);

});


$("#showwa").click(function(e){
		$('.scritt').show(500);
	   
	
});

$("#ukrasha").click(function(e){
		$('.scrit').show(500);
	   
	
});

$("#nax").click(function(e){
		$('.scrit').show(500);
	   
	
});

$( "#vozr" ).on( "change", function() {
     $('.pok').removeClass('pok');
$('.poks').removeClass('poks');
} );



$( "#nax" ).on( "change", function() {
     
	 $('#next1').attr( "data-start", ""+$(this).val()+"" );
     $('#next1').attr( "data-dates", ""+$("#datz").val()+"" );
	 $('#dtolvibx').attr( "data-start", ""+$(this).val()+"" );
     $('#dtolvibx').attr( "data-dates", ""+$("#datz").val()+"" );
     $('#kvestvib').attr( "data-start", ""+$(this).val()+"" );
     $('#kvestvib').attr( "data-dates", ""+$("#datz").val()+"" );
} );

$( "#datz" ).on( "change", function() {
     
	  $('#next1').attr( "data-start", ""+$("#nax").val()+"" );
     $('#next1').attr( "data-dates", ""+$("#datz").val()+"" );
	 $('#dtolvibx').attr( "data-start", ""+$("#nax").val()+"" );
     $('#dtolvibx').attr( "data-dates", ""+$("#datz").val()+"" );
     $('#kvestvib').attr( "data-start", ""+$("#nax").val()+"" );
     $('#kvestvib').attr( "data-dates", ""+$("#datz").val()+"" );
} );

$(".zakaz").click(function(e){
	
	ach=document.getElementById('nax').value;

    date=document.getElementById('datz').value;
    nam=document.getElementById('nas').value;
	reb=document.getElementById('reb').value;
    vozr=document.getElementById('vozr').value;
	tel=document.getElementById('tel').value;
	det=document.getElementById('kgos').value;
    vzrosl=document.getElementById('kdet').value;
    zal=$('.dobstolz').attr("data-naz");
     var poz = [];

  $(".poz").not('.dobstolz').not('.delkvf').each(function() { 
  

    var id=$(this).attr("data-id");
	var col=$(this).attr("data-kk");
	var naza=$(this).attr("data-naz");
	
    var Itemsh = {productId:id,type:"Product",amount:col,naz:naza}; 

    poz.push(Itemsh); 
  
    });




	$.ajax({
		url:"/prechek.php",
		
		type: "POST",
		data: {
		
		
		tov:poz,
		zal:zal,
		ach:ach,
        datez:date,
        nam:nam,
	    reb:reb,
        vozr:vozr,
	    tel:tel,
	    det:det,
        vzrosl:vzrosl,
		},
		
		
		success:function(result){

			alert('Успешно');

			}
			
			
			}); 
			

			
			e.preventDefault();
			
			
			
			
			});

















$(document).on('click','.vse', function(){	
	
	 $(this).parent().parent().find('.spryat').css('display', 'block');
	 $(this).parent().parent().find('.spryat').addClass('zapr');
	 $(this).parent().parent().find('.zapr').removeClass('spryat');
	 $(this).addClass('zapry');	
	 $(this).text('Скрыть');	
});



$(document).on('click','.zapry', function(){	
	$(this).parent().parent().find('.sels').css('display', 'block');
	$(this).parent().parent().find('.zapr').css('display', 'none');
	 $(this).parent().parent().find('.zapr').addClass('spryat');
	 $(this).parent().parent().find('.spryat').removeClass('zapr');
	 $(this).addClass('vse'); $(this).removeClass('zapry');	
	 $(this).text('Показать все');
	 
});





$(document).on('click','.stolmer', function(){	
	
	$(this).text('Добавлен');
	$(this).addClass('button--orange');
	$(this).addClass('sels');
	$(this).addClass('selsstol');
	ach=document.getElementById('nax').value;

    date=document.getElementById('datz').value;
  	$('.vabor').append('<tr class="poz dobstolz" data-id="'+$(this).attr('data-uy')+'" data-nah="'+ach+'" data-naz ="'+$(this).attr('data-zal')+'" data-date="'+date+'" data-kk="1"><th scope="row"><input type="checkbox" name="" class="form-quests__checkbox" id="form-quests-checkbox"></th><td class="vren">'+ach+'</td><td class="cens">0</td><td class="naz">'+$(this).attr('data-zal')+'</td><td class="colм">1</td><td><span class="dellf" data-as="selsstol">Удалить</span></td></tr>');
	$('#stplk').show();
	$('#cdv').append("<div class='uls dobstol'><a href='#vibzali' class='prik'>✔️ "+$(this).attr('data-zal')+"</a></div>");
	
			
});	


$(document).on('click','.selsstol', function(){	
	
	$(this).text('Выбрать');
	$(this).removeClass('button--orange');
	$(this).removeClass('sels');
	$(this).removeClass('selsstol');
	ach=document.getElementById('nax').value;
    date=document.getElementById('datz').value;
  	$('a:contains('+$(this).attr('data-zal')+')').remove();
    $('#stplk').show();
	
			$('.dobstol').remove();
		$('.dobstolz').remove();
});	








$(document).on('click','.onbron', function(){	
	remya =$(this).attr('data-time');
    naz =$(this).attr('data-nazv');
	prise =$(this).attr('data-prise');
	id=$(this).attr('data');
	$(this).text(''+remya+'');
	$(this).addClass('button--orange');
	$(this).addClass('sels');
	$(this).addClass('selskve');
	$('#stplk').show();
	ach=document.getElementById('nax').value;
    var kdet=$("#kdet").val();
	 var kvz=$("#kgos").val();
    var kol=kvz*1+kdet*1;
	var kl=$('.delkvf').length;
	var dh=kl*6;
	if(kol>dh){$('.noits').show();}else{$('.noits').hide();}
    date=document.getElementById('datz').value;
  	$('.vabor').append('<tr class="poz kvestsi delkvf" data-id="'+id+'" data-nah="'+ach+'" data-con="" data-date="'+date+'" data-kk="1"><th scope="row"><input type="checkbox" name="" class="form-quests__checkbox" id="form-quests-checkbox"></th><td class="vren">'+remya+'</td><td class="cens">'+prise+'</td><td class="naz">'+naz+'</td><td class="colм">1</td><td><span class="dellf" data-as="selskve">Удалить</span></br><span class="anims" style="display:none;"><a  class="animl" id="">+ Аниматор</a></span></br><span class="dopigr"><a  class="dopig" id="" style="display:none;">+ Доп. игрок</a></span></td></tr>');
	$('#cdv').append('<div class="uls delkvf"><a href="#vibkv" class="prik">✔️ '+naz+'  '+remya+'</a></div>');	
});	

$(document).on('click','.selskve', function(){	
	

	$(this).removeClass('button--orange');
	$(this).removeClass('sels');
	$(this).removeClass('selskve');
	ach=document.getElementById('nax').value;
    date=document.getElementById('datz').value;
  	$('a:contains(✔️ '+naz+'  '+remya+')').remove();
    $('#stplk').show();
	$('.kvestsi').remove();
		$('.delkvf').remove();
	
			
});

$(document).on('click','.tortk', function(){	
	
	$(this).text('Добавлен');
	$(this).addClass('button--orange');
	$(this).addClass('sels');
	$(this).addClass('selstort');
	ach=document.getElementById('nax').value;
	val1 = $('select[name="tort"]').val();
	var naz=$(this).prev().children('.topx').find(":selected").attr('data-naz');
	var cena=$(this).prev().children('.topx').find(":selected").attr('data_cen');
	var vaid=$(this).prev().children('.topx').find(":selected").val();
  	$('.vabor').append('<tr class="poz tortj deltortf" data-id="'+vaid+'" data-naz="'+naz+'" data-cen="'+cena+'" data-kk="1"><th scope="row"><input type="checkbox" name="" class="form-quests__checkbox" id="form-quests-checkbox"></th><td class="vren">'+ach+'</td><td class="cens">'+cena+'</td><td class="naz">'+naz+'</td><td class="colм">1</td><td><span class="dellf" data-as="selstort" >Удалить</span></td></tr>');
	$('#cdv').append('<div class="uls deltortf"><a href="#vibtorts" class="prik">✔️ '+naz+'</a></div>');	
	$('#stplk').show();		
});	

$(document).on('click','.selstort', function(){	
	
	$(this).text('Выбрать');
	$(this).removeClass('button--orange');
	$(this).removeClass('sels');
	$(this).removeClass('selstort');
	$('.topx').prop('selectedIndex',0);
	$('.deltort').remove();
	$('.deltortd').remove();
	$('.deltortf').remove();
		$('.tortj').remove();
});


$(document).on('click','.shou', function(){	
	
	$(this).text('Добавлен');
	$(this).addClass('button--orange');
	$(this).addClass('sels');
	$(this).addClass('selsshow');
	ach=document.getElementById('nax').value;
var vaid=$(this).attr('data-ids');
var cena=$(this).attr('data-sen');
var naz=$(this).attr('data-naz');
	
  	$('.vabor').append('<tr class="poz showw delshf" data-id="'+vaid+'" data-naz="'+naz+'" data-cen="'+cena+'" data-kk="1"><th scope="row"><input type="checkbox" name="" class="form-quests__checkbox" id="form-quests-checkbox"></th><td class="vren">'+ach+'</td><td class="cens">'+cena+'</td><td class="naz">'+naz+'</td><td class="colм">1</td><td><span class="dellf"  data-as="selsshow">Удалить</span></td></tr>');
	$('#cdv').append('<div class="uls delshf"><a href="#shvib" class="prik">✔️ '+naz+'</a></div>');			
	$('#stplk').show();		
});

$(document).on('click','.selsshow', function(){	
	
	$(this).text('Выбрать');
	$(this).removeClass('button--orange');
	$(this).removeClass('sels');
	$(this).removeClass('selsshow');
	
	$('.delshf').remove();
		
});
$(document).on('click','.ukr', function(){	
	
	$(this).text('Добавлен');
	$(this).addClass('button--orange');
	$(this).addClass('sels');
	$(this).addClass('selsukr');
	ach=document.getElementById('nax').value;
var vaid=$(this).attr('data-ids');
var cena=$(this).attr('data-sen');
var naz=$(this).attr('data-naz');
	var kold=$(this).prev().find('.zn').val();
  	$('.vabor').append('<tr class="poz ukrad delukrf" data-id="'+vaid+'" data-naz="'+naz+'" data-cen="'+cena+'" data-kk="'+kold+'" ><th scope="row"><input type="checkbox" name="" class="form-quests__checkbox" id="form-quests-checkbox"></th><td class="vren">'+ach+'</td><td class="cens">'+cena+'</td><td class="naz">'+naz+'</td><td class="colм">'+kold+'</td><td><span class="dellf" data-as="selsukr">Удалить</span></td></tr>');
			$('#cdv').append('<div class="uls delukrf"><a href="#ukrvib" class="prik">✔️ '+naz+' '+kold+' шт.</a></div>');	
			$('#stplk').show();
});

$(document).on('click','.selsukr', function(){	
	
	$(this).text('Выбрать');
	$(this).removeClass('button--orange');
	$(this).removeClass('sels');
	$(this).removeClass('selsukr');
$(this).prev().prev().children().val(0);
	$('.delukrf').remove();
		
});
$(".plus").click(function(e){
	
	
	dd=$(this).prev().children().val();
    ff=dd*1;
	g=ff+1;
	
		$(this).prev().children().val(g);	
			
			
			});	
	$(".pluss").click(function(e){
	
	
	dd=$(this).prev().children().val();
    ff=dd*1;
	g=ff+1;
	if(g<5){
		$(this).prev().children().val(g);	
			
	}
			});		
$(".minus").click(function(e){
	
	
	dd=$(this).next().children().val();
    ff=dd*1;
	g=ff-1;
		if(g>=0){
		$(this).next().children().val(g);	
			}
			
			});

$(".minuss").click(function(e){
	
	
	dd=$(this).next().children().val();
    ff=dd*1;
	g=ff-1;
	if(g>=0){
		$(this).next().children().val(g);	
	}
			
			});
			
			
			
			
			
			
			
			
$("#questPopupzapkod").click(function(e){
	
	regphone=document.getElementById('questPopuptel').value;
	cer=regphone.replace(/^\s+|\s+$/g,'');
	regname=document.getElementById('questPopupname').value;
	kod=$('#offr').text();
	$('#questPopupzapkod').hide();
    result = regphone.replace(/[^+\d]+/g, "");
	if(regphone!=''){if(regname!=''){
	$.ajax({
		url:"/wacap.php?phone="+regphone+"&kod="+kod+"&ok=2",
		success:function(html){

		$('#zapkof').show();
	    $('#knopzap').show();
			}
			
			
			}); 
			
}else{alert("Укажите Ваше имя!");}
			
}else{alert("Укажите Ваш номер телефона!");}
			
			e.preventDefault();
			
			
			
			
			});	
			
				
$("#questPopupzapkodd").click(function(e){
	
	regphone=document.getElementById('questPopuptel').value;
		regname=document.getElementById('questPopupname').value;
	cer=regphone.replace(/^\s+|\s+$/g,'');
	kod=$('#offr').text();
	$('#questPopupzapkod').hide();
    result = regphone.replace(/[^+\d]+/g, "");
	$(this).hide();
	 if(regphone!=''){if(regname!=''){
	$.ajax({
		url:"/wacap.php?phone="+regphone+"&kod="+kod+"&ok=5",
		success:function(html){

		$('#zapkof').show();
	    $('#knopzap').show();
	
			}
			
			
	 }); }else{alert("Укажите Ваше имя!");}
			
}else{alert("Укажите Ваш номер телефона!");}
			
			e.preventDefault();
			
			
			
			
			});		
			
	$("#location__item").click(function(e){
	
	$(".location__item--highlight").removeClass("location__item--highlight");
			$(this).addClass("location__item--highlight");
			});	
					

$('.form-quests__input').on('change', function () {
		var strSelector = '',
			val1 = $('.form-quests__input[name="age"]').val(),
			val2 = $('.form-quests__input[name="type"]').val(),
            val4 = $('.form-quests__input[name="level"]').val();

		if(val1 != 'NULL'){ strSelector = strSelector + '.js-age-'+val1; }
		
		
		if(val2 != 'NULL'){ strSelector = strSelector + '.js-type-'+val2; }
		
		if(val4 != 'NULL'){ strSelector = strSelector + '.js-level-'+val4; }

		$('.js-col-quest').hide(500);
        $('.js-age-'+val1+'.js-type-'+val2+'.js-level-'+val4+'').show(500);

		$(strSelector).show(500);


	});		
			
			
			
			
			
			
$(document).on('click','#questPopupbron', function(){
		
		
		get=$("#get_param").val();
		regname=document.getElementById('questPopupname').value;
		regphone=document.getElementById('questPopuptel').value;
		regbox=document.getElementById('questPopuptel').value;
		addeduser=1;
		regsubs=0;
		hvost="@pdfteee.ru";
		kodeus=document.getElementById('kodsd').value;
		kodir=$('#offr').text();
		itogovaya = $('#questPopupstoim').text();
		comand = $("#questPopupdopigr").val();
		
result = regphone.replace(/[^+\d]+/g, "");
		kolich="2-4";
		anim = $("#questPopupanim").val();
		if (anim==0){anims = "Без аниматора "}else{anims = "С аниматором"};
		red=1408;
		get+='&regname='+regname+'&comand='+kolich+'&anim='+anims+'&regphone='+result+'&regsubs='+regsubs+'&itogovaya='+itogovaya+'&addeduser='+addeduser+'&regbox='+regbox+''+hvost;
      
	  if(kodeus==kodir||kodeus==red)
{
		  if(regname!=''){
	
	  if(kodeus==red){ avtor="Самостоятельно"}else{avtor="Самостоятельно"};
		
		$("div.preloader-55").show();
		$('#questPopupbron').hide();
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		$.ajax({
			url:"/wp-content/plugins/pandoroom-booking/add-booking.php"+get+'&avt=Самостоятельно&skid='+0+'&nom=',
            success:function(html){if(html!=false){$("a#booking_confirm").css("display","block");$('#olg').hide();
			$('#olgd').show();
            var r=$("button.quests-info__time").attr("data");var s=$("div#last_clicked_time").attr("data-time");
            var t=$("button.quests-info__time").attr("data-id");
            var at='button.quests-info__time[data="'+r+'"][data-time="'+s+'"][data-id="'+t+'"]';
            $('div.preloader-55').hide();
			$('#questPopupbron').show();
			$(at).removeClass("active");
			$(at).addClass("quests-info__time--gray");
			$('.btn-close').trigger("click");
			$("#questPopupdopigr").prop('selectedIndex',0);
		   
	$("#questPopupanim").prop('selectedIndex',0);
			}else { 
			alert ("Время уже занято! ") ; 
			$("#questPopupdopigr").prop('selectedIndex',0);
		$("#questPopupanim").prop('selectedIndex',0);

	};
	
	
	
	$.get("https://pandoroom.org/provkod.php?dell_id="+msgz, function (data) {  
  });
	
	
	
	
	}
	});
	
	}else{alert("Укажите ваше имя!");};
		
		
}else{alert("Неверный проверочный код");$('#status').hide();
		$('#questPopupbron').show();}
		
	});