$( document ).ready(function() {
  AOS.init({
      easing: 'ease-in-sine',
      once: true,
    });

  // Counter
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  $('.client-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    dragabble: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5500,
    arrows: false,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
  });

  $('.testimonial-slider').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
         breakpoint: 400,
         settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }]
  });

  function scroll_if_anchor(href) {
      href = typeof(href) == "string" ? href : $(this).attr("href");
      var fromTop = 100;
      if(href.indexOf("#") == 0) {
          var $target = $(href);
          if($target.length) {
              $('html, body').animate({ scrollTop: $target.offset().top - fromTop });
              if(history && "pushState" in history) {
                  history.pushState({}, document.title, window.location.pathname + href);
                  return false;
              }
          }
      }
  }
  scroll_if_anchor(window.location.hash);
  $("body").on("click", "a", scroll_if_anchor);
  $('.logo a').addClass('text-white');

  $(window).scroll(function(){
    $(".fa-angle-double-down").css("opacity", 1 - $(window).scrollTop() / 250 );
    if ($(this).scrollTop() > 300) {
        $('.header').addClass('nav-fade-in').fadeIn();
        $('.header li a, .logo a').removeClass('text-white').addClass('text-black');
    }else {
        $('.header').removeClass('nav-fade-in');
        $('.header li a, .logo a').removeClass('text-black').addClass('text-white');
    }
    if ($(this).scrollTop() > 2000) {
        $('#scroll').fadeIn();
    } else {
        $('#scroll').fadeOut();
    }
  });

  $('#scroll').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
  });

  $('.menu-icon').click(function(){
    $('.header').toggleClass('background-white');
    $('.header li a').toggleClass('text-black');
  });

  $(function(){
  	$(".typed").typed({
  		strings: ["Developers", "Transparent", "Studio<span class='text-green'>7</span>"],
  		stringsElement: null,
      typeSpeed: 100,
      backSpeed: 100,
  		attr: null,
  		contentType: 'html',
  	});
  });

  $("#sticky").sticky({
    topSpacing:0,
    className: 'sticky-config',
    responsiveWidth: 'true'
  });

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 400,
        "density": {
          "enable": true,
          "value_area": 1200
        }
      },
      "color": {
        "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 15
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1.5,
          "opacity_min": 0.15,
          "sync": false
        }
      },
      "size": {
        "value": 2.5,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0.15,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 110,
        "color": "#33b1f8",
        "opacity": 0.25,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1.6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

});
