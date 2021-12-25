$('.ask').on('click', function () {
    
    $('.ask').not(this).removeClass('active').next().slideUp(500)
    $(this).toggleClass('active').next().slideToggle(500)

})



$('.header_ask').on('click', function () {
    
  $('.ask').not(this).removeClass('header_active').next().slideUp(500)
  $(this).toggleClass('header_active').next().slideToggle(500)

})


const infoSlider = new Swiper(".info__slider", {
    slidePerView: 1,
    spaceBetween: 10,
    loop: true,
  
    navigation: {
      nextEl: ".info__slider-next",
      prevEl: ".info__slider-prev"
    }
  })