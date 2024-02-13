<?php

/*
Template name:   Новая Главная Страница
*/

$main_fields = get_fields(2);


$all_quests = get_all_questssw() ;


get_header();?>



  <main class="main home-page">
      <div class="home-page__introduction">
       <div class="bg bg--black"></div>
        <div class="container-xl">
          <div class="row">
            <div class="col-md-8">
              <div class="slider">
                <div class="home-page__introduction-slider swiper" data-home-page-introduction-slider>
                  <div class="swiper-wrapper">
                    <?php if( have_rows("slaw",2) ): ?>

	

	<?php while( have_rows("slaw",2) ): the_row(); 
          
		

		?>
		
				<div class="swiper-slide home-page__introduction-slide"><a href="<?php the_sub_field('sslka'); ?>" class="">
                      <img class="img-fluid" src="<?php the_sub_field('kart'); ?>" alt=""></a>
                    </div>
				
				
			
<?php endwhile; ?>

	

<?php endif; ?>
                    
                  </div>
    
                  <div class="swiper-pagination"></div>
    
                </div>
                <button class="swiper-button-prev animated-button arrow-button arrow-button--left-outside"></button>
                <button class="swiper-button-next animated-button arrow-button arrow-button--right-outside"></button>
              </div>
			  <a href="https://pandoroom.org/kvest" class="header__booking-button animated-button button jkkl" style="margin:0 auto;margin-top:10px;">Забронировать квест</a>
              <p class="home-page__introduction-text">Семейное кафе и квесты Pandoroom (Пандорум) – это огромный центр отдыха для семьи, компаний друзей и детей. В наших филиалах Вас ждет: три зала фирменного кафе, огромный мир квестов для всех возрастов, а также, получившая популярность, батальная игра для детей и взрослых – Лазертаг.</p>
            </div>
            <div class="col-md-4 mt-md-0 mt-3 d-flex flex-column align-items-center">
              <img class="img-fluid home-page__introduction-baloons" src="<?php bloginfo('template_directory'); ?>/imgsz/home-page/balloons.png" alt="">
              <button class="button button--orange animated-button home-page__introduction-button" data-bs-toggle="modal" data-bs-target="#questPopup2"  >Хочу праздник!</button>
            </div>
            <div class="container-xl position-relative">
              <div class="coupon home-page__introduction-coupon">
                <img src="<?php bloginfo('template_directory'); ?>/imgsz/coupon.jpg" data-bs-toggle="modal" data-bs-target="#questPopup3" alt="Специальное предложение - подарочный сертификат на ваш праздник" class="coupon__img img-fluid">
                  <button class="button animated-button coupon__button">КУПИТЬ</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="home-page__facts-wrapper position-relative">

          <div class="container-xl">
            <h2 class="home-page__title home-page__title--first main__title">Факты о нас / Раздел о компании</h2>
            <div class="row home-page__facts">
            <div class="slider">
              <div class="home-page__reviews-slider swiper" data-home-page-reviews-slider>
                <div class="swiper-wrapper">
             
			 
			
			 
		<?php if( have_rows("fak",2) ): ?>

	

	<?php while( have_rows("fak",2) ): the_row(); 

		

		?>
				
				<div class="swiper-slide">
			 
                <div class="fact-card h-100">
                  <img src="<?php bloginfo('template_directory'); ?>/imgsz/home-page/fact1.svg" alt="" class="fact-card__img img-fluid">
                  <span class="fact-card__counter">Факт</span>
                  <p class="fact-card__description"><?php the_sub_field('text'); ?></p>
                </div>
               </div>
				
			
				
				
				
				
				
				
				
				
				
			<?php endwhile; ?>

	

<?php endif; ?>	
			 
			 
			 
			 
			 
                </div>
      
              
      
              </div>
              <button class="swiper-button-prev animated-button arrow-button arrow-button--left-outside"></button>
              <button class="swiper-button-next animated-button arrow-button arrow-button--right-outside"></button>
            </div>
      
            </div>
          </div>

          <div class="home-page__gallery-wrapper position-relative">
            <div class="bg bg--black"></div>
            <div class="container-xl">
              <div class="row home-page__gallery">
           
		        <?php
		print_quests_previewsnov( $all_quests );
	?>
		   
		   
		   
		   
              </div>
              <a href="#" class="button animated-button home-page__gallery-button" style="display:none">Больше квестов</a>
            </div>
          </div>

      </section>

      <div class="home-page__review-and-news position-relative">
        <section class="home-page__reviews-wrapper position-relative">
          <div class="container-xl">
            <h2 class="home-page__title home-page__title--reviews main__title--white main__title">Отзывы о нас</h2>
            <div class="slider">
              <div class="home-page__reviews-slider swiper" data-home-page-reviews-slider>
                <div class="swiper-wrapper">
             
			 
			
			 
		<?php if( have_rows("otzivis",4120) ): ?>

	

	<?php while( have_rows("otzivis",4120) ): the_row(); 

		

		?>
				
				
			
				
				 <div class="swiper-slide ">
                    <div class="review-card ">
                      <span class="review-card__name"><?php the_sub_field('name'); ?></span>
                      <p class="review-card__comment"><?php the_sub_field('text'); ?></p>
                      <div class="review-card__rating">
                        <img src="<?php bloginfo('template_directory'); ?>/imgsz/icons/star-fill.svg" alt="">
                        <img src="<?php bloginfo('template_directory'); ?>/imgsz/icons/star-fill.svg" alt="">
                        <img src="<?php bloginfo('template_directory'); ?>/imgsz/icons/star-fill.svg" alt="">
                        <img src="<?php bloginfo('template_directory'); ?>/imgsz/icons/star-fill.svg" alt="">
                        <img src="<?php bloginfo('template_directory'); ?>/imgsz/icons/star-fill.svg" alt="">
                      </div>
                      <img src="<?php the_sub_field('logoim'); ?>" alt="" class="review-card__source img-fluid" style="
    width: 100px;
">
                    </div>
                  </div>
				
				
				
				
				
				
				
				
				
			<?php endwhile; ?>

	

<?php endif; ?>	
			 
			 
			 
			 
			 
                </div>
      
                <div class="d-flex flex-wrap-reverse mt-4 justify-content-between">
                  <a href="https://www.vl.ru/pandoroom#comments" class="me-4 link">Читать больше отзывов или оставить свой</a>
                  <div class="swiper-pagination"></div>
                </div>
      
              </div>
              <button class="swiper-button-prev animated-button arrow-button arrow-button--left-outside"></button>
              <button class="swiper-button-next animated-button arrow-button arrow-button--right-outside"></button>
            </div>
          </div>
        </section>
  
        <div class="bg home-page__green-bg bg--green"></div>

        <section class="home-page__news-wrapper position-relative">
          <div class="container-xl">
            <h2 class="home-page__title home-page__title--news main__title main__title--white">Наши новости</h2>
            <div class="slider">
              <div class="home-page__news-slider swiper" data-home-page-news-slider>
                <div class="swiper-wrapper">
            
			
								<?php $catquery = new WP_Query( 'cat=9&posts_per_page=10' ); ?>

<?php while($catquery->have_posts()) : $catquery->the_post(); ?>


 <div class="swiper-slide">
                    <div class="news-card">
                      
                      <div class="news-card__content"> <?php the_post_thumbnail(); ?>
                        <span class="news-card__date"><?php the_date(); ?></span>
                        <p class="news-card__description"><?php the_excerpt(); ?></p>
                        <a href="<?php the_permalink() ?>" class="news-card__link">Перейти к новости</a>
                      </div>
                    </div>
                  </div>




<?php endwhile; ?>

<?php wp_reset_postdata(); ?>
					
					
			
			
			
			
                </div>
      
              </div>
              <button class="swiper-button-prev animated-button arrow-button arrow-button--left-outside"></button>
              <button class="swiper-button-next animated-button arrow-button arrow-button--right-outside"></button>
            </div>
          </div>
        </section>
      </div>

      <section class="home-page__location-wrapper position-relative">
        <div class="bg bg--black"></div>
        <div class="container-xl">
          <h2 class="home-page__title main__title main__title--white mt-0">Как нас найти?</h2>
          <div class="row location home-page__location">
            <div class="col-lg-3 pe-lg-0">
              <div class="location__item adress adress-1 js-coordinat location__item--highlight" data-coord1="43.11150807452048" data-coord2="131.88291549999994">
                <strong class="location__name">Развлекательный центр Pandoroom</strong>
                <p class="location__address">г. Владивосток, ул. Нижнепортовая, 1 «Морской вокзал», 1 этаж, вход со стороны моря</p>
                <a class="location__phone" href="tel:74232022696">+7 (423) 202-26-96</a>
              </div>
              <div class="location__item adress adress-2 js-coordinat" data-coord1="43.11298363349471" data-coord2="131.87884370370477">
                <strong class="location__name">Филиал Pandoroom на Посьетской</strong>
                <p class="location__address">г. Владивосток, район «Центр», ул. Посьетская, 27 стр.2</p>
                <a class="location__phone" href="tel:74232054409">+7(423) 205-44-09</a>
              </div>
              <div class="location__item adress adress-1 js-coordinat" data-coord1="43.11298363349471" data-coord2="131.87884370370477">
                <strong class="location__name">Филиал хоррор квестов Pandoroom</strong>
                <p class="location__address">г. Владивосток, район «Серая лошадь», ул. Алеутская, 17а</p>
                <a class="location__phone" href="tel:74232054458">+7(423)205-44-58</a>
              </div>
            </div>
            <div class="col-lg-9 mt-3 mt-lg-0 ps-lg-0">
              <div class="location__map"  id="map">
              
              </div>
            </div>
          </div>
        </div>
      </section>
	  <div class="modal fade booking-popup" id="questPopup2" tabindex="-1" aria-labelledby="questPopup1Label" aria-hidden="true" style="--bs-modal-width: auto;">
                      <div class="modal-dialog booking-popup__dialog modal-dialog-centered">
                        <div class="modal-content booking-popup__content" style=" margin: 0 auto;">
                          <div class="modal-header booking-popup__header border-0">
                            <img class="booking-popup__logo-img img-fluid" src="<?php bloginfo('template_directory'); ?>/imgsz/black-logo.svg" alt="">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                          </div>
                          <div class="modal-body booking-popup__body">
                            <h2 class="booking-popup__title" id="questPopup1Label">Оформление праздника</h2>
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="row">
                                  <div class="col-md-6">
                                    <div id="questPopupphoto" class="booking-popup__img img-fluid" style="background-image: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 32.2%, rgba(0, 0, 0, 0) 100%), url('https://pandoroom.org/wp-content/themes/pandoroom/imgsz/cafe-page/pr7.jpg');    background-size: cover;"></div>
                                  </div>
                                  <div class="col-md-6">
                                    <dl class="booking-popup__info-list" style="
    padding-left: 15px;
"> <form method="POST" action="https://pandoroom.org/stranitsa-spasibo" class="booking-popup__form">
                                  <fieldset>
                                    
                                  
                                    <div class="row booking-popup__buttons" id="nezap">
                                     
								<div class="col-md-12">
                                        <div class="booking-popup__field">
                                          <input placeholder="Ваше имя" type="text" id="questPopupname" name="namez"  class="booking-popup__input">
                                        </div>
                                      </div>
                                      <div class="col-md-12">
                                        <div class="booking-popup__field">
                                          <input placeholder="+7 (___) ___-__-__" type="tel" id="questPopuptel" name="phone" class="booking-popup__input phone-field">
                                        </div></br>
										  <small class="form-text text-muted">На этот номер поступит звонок от менеджера.</small>
                                      </div>
                                      
                                    
                                      <div class="col-md-12">
                                        
										<div  id="questPopupbron" class="booking-popup__button button" onclick="ym(27918807, 'reachGoal', 'callback_gl'); return true;">Отправить заявку</div>
										
                                      </div>
                                    </div>
                                  </fieldset>
                                </form>
                                    </dl>
                                  </div>
                                </div>
                               
                              </div>
                            
                            </div>
                        
                          </div> </div>
                            
                            </div>
                        
                          </div>
						   <div class="modal fade booking-popup" id="questPopup3" tabindex="-1" aria-labelledby="questPopup1Label" aria-hidden="true" style="--bs-modal-width: auto;">
                      <div class="modal-dialog booking-popup__dialog modal-dialog-centered">
                        <div class="modal-content booking-popup__content" >
                          <div class="modal-header booking-popup__header border-0">
                            <img class="booking-popup__logo-img img-fluid" src="<?php bloginfo('template_directory'); ?>/imgsz/black-logo.svg" alt="">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                          </div>
                          <div class="modal-body booking-popup__body">
                            <h2 class="booking-popup__title" id="questPopup1Label">Заказ сертификата</h2>
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="row">
                                  <div class="col-md-6">
                                    <div id="questPopupphoto" class="booking-popup__img img-fluid" style="background-image: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 32.2%, rgba(0, 0, 0, 0) 100%), url('<?php bloginfo('template_directory'); ?>/imgsz/coupon.jpg');"></div>
                                  </div>
                                  <div class="col-md-6">
                                    <dl class="booking-popup__info-list" style="
    padding-left: 15px;
"> <form method="POST" action="#" class="booking-popup__form">
                                  <fieldset>
                                    
                                  
                                    <div class="row booking-popup__buttons" id="nezap">
                                     
								<div class="col-md-12">
                                        <div class="booking-popup__field">
                                          <input placeholder="Ваше имя" type="text" id="questPopupname" class="booking-popup__input">
                                        </div>
                                      </div>
                                      <div class="col-md-12">
                                        <div class="booking-popup__field">
                                          <input placeholder="+7 (___) ___-__-__" type="tel" id="questPopuptel" class="booking-popup__input phone-field">
                                        </div></br>
										  <small class="form-text text-muted">На этот номер поступит звонок от менеджера.</small>
                                      </div>
                                      
                                    
                                      <div class="col-md-12">
                                        
										<button  id="questPopupbron" class="booking-popup__button button">Отправить заявку</button>
										
                                      </div>
                                    </div>
                                  </fieldset>
                                </form>
                                    </dl>
                                  </div>
                                </div>
                               
                              </div>
                            
                            </div>
                        
                          </div> </div>
                            
                            </div>
                        
                          </div>
						     <div class="modal fade booking-popup" id="questPopupzvon" tabindex="-1" aria-labelledby="questPopup1Label" aria-hidden="true" style="--bs-modal-width: auto;">
                      <div class="modal-dialog booking-popup__dialog modal-dialog-centered">
                        <div class="modal-content booking-popup__content" >
                          <div class="modal-header booking-popup__header border-0">
                            <img class="booking-popup__logo-img img-fluid" src="<?php bloginfo('template_directory'); ?>/imgsz/black-logo.svg" alt="">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                          </div>
                          <div class="modal-body booking-popup__body">
                            <h2 class="booking-popup__title" id="questPopup1Label">Заказ Обратного звонка!</h2>
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="row">
                                  <div class="col-md-6">
                                    <div id="questPopupphoto" class="booking-popup__img img-fluid" style="background-image: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 32.2%, rgba(0, 0, 0, 0) 100%), url('http://pandoroom.org/wp-content/uploads/2020/06/Mask-Group-5-2.png');"></div>
                                  </div>
                                  <div class="col-md-6">
                                    <dl class="booking-popup__info-list" style="
    padding-left: 15px;
"> <form method="POST" action="https://pandoroom.org/zakaz-zvonka" class="booking-popup__form">
                                  <fieldset>
                                    
                                  
                                    <div class="row booking-popup__buttons" id="nezap">
                                     
									 <div class="col-md-12">
                                        <div class="booking-popup__field">
                                          <input placeholder="+7 (___) ___-__-__" type="phone" name="tel" id="questPopuptel" class="booking-popup__input phone-field">
                                        </div>
                                      </div>
								     <div class="col-md-12">
                                        <div class="booking-popup__field">
                                          <input placeholder="Ваше имя" type="text" id="questPopupname" name="im" class="booking-popup__input">
                                        </div>
                                      </div>
                                      <div class="col-md-12">
                                        <div class="booking-popup__field">
                                          <textarea placeholder="Введите ваш вопрос." type="textarea" id="questPopupmes" name="vap" class="booking-popup__input phone-field"></textarea>
                                        </div></br>
										 
                                      </div>
                                    
                                      <div class="col-md-12">
                                        <?php echo do_shortcode( '[anr-captcha]' );?>
										<button  id="questPopupbron" class="booking-popup__button button">Отправить заявку</button>
										
                                      </div>
                                    </div>
                                  </fieldset>
                                </form>
                                    </dl>
                                  </div>
                                </div>
                               
                              </div>
                            
                            </div>
                        
                          </div> </div>
                            
                            </div>
                        
                          </div>
  </main>
 <footer class="footer">
    <div class="container-xl">
      <div class="row footer__inner">
        <div class="col-md-6 col-lg-3 footer__left">
          <a href="/">
            <img src="<?php bloginfo('template_directory'); ?>/imgsz/logo.svg" class="img-fluid footer__logo" alt="Логотип Pandoroom">
          </a>
          <span class="footer__legal-data">© Pandoroom 2022, Все права защищены</span>
          <a href="https://pandoroom.org/politika-kompanii-v-otnoshenii-obrabotki-personalnyh-dannyh" class="footer__legal-data">Политика конфиденциальности</a>
        
        </div>
        <div class="col-md-6 mt-4 mt-md-0 col-lg-4 footer__middle">
          <ul class="row footer__nav-list mb-2 mb-lg-0">
            <li class="mb-2 mb-md-4 col-sm-4 footer__nav-item">
              <a href="https://pandoroom.org/kvest-gid" class="footer__nav-link">Квесты</a>
            </li>
            <li class="mb-2 mb-md-4 col-sm-4 footer__nav-item">
              <a href="https://pandoroom.org/kids" class="footer__nav-link">Детям</a>
            </li>
            <li class="mb-2 mb-md-4 col-sm-4 footer__nav-item">
              <a href="https://pandoroom.org/birthday" class="footer__nav-link">Праздник</a>
            </li>
            <li class="mb-2 mb-md-4 col-sm-4 footer__nav-item">
              <a href="http://pandoroom.org/kafe" class="footer__nav-link">Кафе</a>
            </li>
            <li class="mb-2 mb-md-4 col-sm-4 footer__nav-item">
              <a href="https://pandoroom.org/menpands.pdf" class="footer__nav-link">Меню</a>
            </li>
            <li class="mb-2 mb-md-4 col-sm-4 footer__nav-item">
              <a href="https://pandoroom.org/kontakty" class="footer__nav-link">Контакты</a>
            </li>
            <li class="mb-2 mb-md-4 col-sm-4 footer__nav-item">
              <a href="https://pandoroom.org/pravila" class="footer__nav-link">Правила</a>
            </li>
            <li class="mb-2 mb-md-4 col-sm-4 footer__nav-item">
              <a href="https://pandoroom.org/discount" class="footer__nav-link">Система лояльности</a>
            </li>
            <li class="mb-2 mb-md-4 col-sm-4 footer__nav-item">
              <a href="https://pandoroom.org/novosti" class="footer__nav-link">Акции и новости</a>
            </li>
           
          </ul>
        </div>
        <div class="col-lg-5 footer__right align-items-lg-end text-lg-end">
          <a href="tel:#" class="footer__phone">+7(423)202-26-96</a>
          <a href="mailto:#" class="footer__email">info@pandoroom.org</a>
          <div class="footer__social-links mt-3 mt-sm-5">
           
            <a href="https://instagram.com/pandoroom_vl?igshid=MzRlODBiNWFlZA==" class="footer__social">
              <img src="<?php bloginfo('template_directory'); ?>/imgsz/icons/soc2.svg" alt="">
            </a>            
            <a href="https://vk.com/pandoroom_vl" class="footer__social">
              <img src="<?php bloginfo('template_directory'); ?>/imgsz/icons/soc3.svg" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <style>
  .ymaps-2-1-79-map{ height: 450px !important;}
  .wp-post-image{width: auto;
    height: auto;}.h-100 {
    height: fit-content;
}
.gallery-card {height: 241px !important;}
  .gallery-card__human-count {margin-top: 3px;}
  .gallery-card__name{margin-top: 2px;}
  .gallery-card:hover {
    -webkit-filter: brightness(70%);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
}
.jkkl{display: none;}
.modal.show .modal-dialog {
    transform: none;
    width: fit-content;
}
@media (max-width: 600px){
  a.jkkl{display: block;padding-top: 16px;}
}
  </style>
  
  
  

<!-- Yandex.Metrika counter -->
<script async type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(27918807, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true,
        trackHash:true,
        ecommerce:"dataLayer"
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/27918807" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter --> 
<!-- calltouch -->

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-115311345-1"></script>
<script async>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-115311345-1');
  gtag('set', {'user_id': 'USER_ID'});
</script>


 
<script>(function(w, c){(w[c]=w[c]||[]).push(function(){new zTracker({"id":"8e21936153cced22d04f4bcce8b77f1113019","metrics":{"metrika":"27918807"},"cssClass":"link-phone"});});})(window, "zTrackerCallbacks");</script>
<script async src="https://my.novofon.com/js/ct_phone.min.js"></script>
  <script defer src="<?php bloginfo('template_directory'); ?>/scriptsz/sliders.js"></script><script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=e8b112f9-0b31-4a11-b332-d5bf87445847" type="text/javascript"></script><script src="https://pandoroom.org/wp-content/themes/pandoroom/js/jquery.min.js"></script><script  src="<?php bloginfo('template_directory'); ?>/js/main.js?cache_v=1.0.0"></script>
</body>
</html>
<?php?>