$(function () {
  $("#top-slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 1
  });

  $("#slide-lecturer").slick({
    autoplay: false,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });
});
