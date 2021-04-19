$(function (){
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll:1,
  arrows:false,
  autoplay:true,
  autoplaySpeed: 6000,
  dots: false,
  centerMode:true,
  centerPadding:'5px',

    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '00px',
            slidesToShow: 3 ,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '5px',
            slidesToShow: 1 ,
          }
        }
    ]

});

})