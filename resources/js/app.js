$(document).ready(function(){
    $('.js--scroll-to-plan').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1500)
    })
    $('.js--scroll-to-start').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000)
    })
    $('.js--scroll-to-steps').click(function(){
        $('html,body').animate({scrollTop: $('.js--steps-section').offset().top},1500)
    })
    $('.js--scroll-to-cities').click(function(){
        $('html,body').animate({scrollTop: $('.js--cities-section').offset().top},1500)
    })
    $('.js--scroll-to-menu').click(function(){
        $('html,body').animate({scrollTop: $('.js--meals-section').offset().top},1500)
    })
    $('.mobile-nav-icon').click(function(e){
        e.preventDefault()
        const mainNav = $('.main-nav');
        mainNav.slideToggle(250)
        if($('.mobile-nav-icon ion-icon').attr('name') === "close-outline"){
            $('.mobile-nav-icon ion-icon').attr('name',"menu-outline");
        } else {$('.mobile-nav-icon ion-icon').attr('name',"close-outline");}
        
    })
})

const scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
const elementsToShow1 = document.querySelectorAll('.show-on-scroll'); 
const elementsToShow2 = document.querySelectorAll('.show-on-scroll-2');
const elementsToShow3 = document.querySelectorAll('.show-on-scroll-3');

function loop() {
    Array.prototype.forEach.call(elementsToShow2, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible','slideInUp');
      } });
    Array.prototype.forEach.call(elementsToShow1, function(element){
        if (isElementInViewport(element)) {
          element.classList.add('is-visible');
        } });
    Array.prototype.forEach.call(elementsToShow3, function(element){
        if (isElementInViewport(element)) {
            element.classList.add('is-visible','pulse');
        } });
      scroll(loop);
}
loop();

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  const rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}