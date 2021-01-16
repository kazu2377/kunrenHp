$(function () {
  var $win = $(window),
    $main = $("main"),
    $nav = $(".gnav"),
    navHeight = $nav.outerHeight(),
    navPos = $nav.offset().top,
    fixedClass = "is-fixed";

  $win.on("load scroll", function () {
    var value = $(this).scrollTop();
    if (value > navPos) {
      $nav.addClass(fixedClass);
      $main.css("margin-top", navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css("margin-top", "0");
    }
  });
});

$(function () {
  var topBtn = $("#page-top");
  topBtn.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });

  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0
      },
      500
    );
    return false;
  });
});

$(function () {
  $("#tags span").click(function () {
    var tags = $(this).attr("id");
    $("#tags span").removeClass("active");
    $(this).addClass("active");
    $(".lecturer-list li").hide();
    if (tags == "hw") {
      $(".lecturer-list .hw").show();
    } else if (tags == "free") {
      $(".lecturer-list .free").show();
    } else if (tags == "secujuku") {
      $(".lecturer-list .secujuku").show();
    } else if (tags == "jobtra") {
      $(".lecturer-list .jobtra").show();
    } else if (tags == "jobsup") {
      $(".lecturer-list .jobsup").show();
    } else {
      $(".lecturer-list li").show();
    }
  });
});

$(function () {
  var macy = Macy({
    container: "#brick-container",
    trueOrder: false,
    waitForImages: false,
    columns: 4,
    margin: {
      x: 14,
      y: 14
    },
    breakAt: {
      991: 3,
      767: 2,
      480: 1
    }
  });
});

$("#slide-course").slick({
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

$(function () {
  $("a[href^=http]:not(:has(img)),a[href^=https]:not(:has(img))").attr(
    "target",
    "_blank"
  );
});

$(function () {
  var windowWidth = $(window).width();
  var htmlStr = $("#pageplugin").html();
  var timer = null;
  $(window).on("resize", function () {
    var resizedWidth = $(window).width();
    if (windowWidth != resizedWidth && resizedWidth < 991) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        $("#pageplugin").html(htmlStr);
        window.FB.XFBML.parse();
        var windowWidth = $(window).width();
      }, 500);
    }
  });
});
