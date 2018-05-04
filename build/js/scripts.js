$( document ).ready(function() {
  // alert('now i work on reload');
  // Click function for show the Modal
  $(".show").on("click", function(){
    $(this).next(".mask").addClass("active");
  });

  AOS.init({
      easing: 'ease-in-sine',
      once: true,
    });

  // Function for close the Modal
  function closeModal(){
    $(".mask").removeClass("active");
  }

  // Call the closeModal function on click
  $(".close, .mask").on("click", function(){
    closeModal();
  });

  // Counter
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });

  $('.port-individual-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  });

  $('.client-slider, .slider').slick({
    slidesToShow: 4,
    slidesToScroll: 3,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5500,
    arrows: true,
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
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });

// W3C Smooth Scroll
// Add smooth scrolling to all links
/**
 * Check a href for an anchor. If exists, and in document, scroll to it.
 * If href argument ommited, assumes context (this) is HTML Element,
 * which will be the case when invoked by jQuery after an event
 */
function scroll_if_anchor(href) {
    href = typeof(href) == "string" ? href : $(this).attr("href");

    // You could easily calculate this dynamically if you prefer
    var fromTop = 100;

    // If our Href points to a valid, non-empty anchor, and is on the same page (e.g. #foo)
    // Legacy jQuery and IE7 may have issues: http://stackoverflow.com/q/1593174
    if(href.indexOf("#") == 0) {
        var $target = $(href);

        // Older browser without pushState might flicker here, as they momentarily
        // jump to the wrong position (IE < 10)
        if($target.length) {
            $('html, body').animate({ scrollTop: $target.offset().top - fromTop });
            if(history && "pushState" in history) {
                history.pushState({}, document.title, window.location.pathname + href);
                return false;
            }
        }
    }
}

// When our page loads, check to see if it contains and anchor
scroll_if_anchor(window.location.hash);

// Intercept all anchor clicks
$("body").on("click", "a", scroll_if_anchor);

  // Scroll to top
  $(window).scroll(function(){

    $(".fa-angle-double-down").css("opacity", 1 - $(window).scrollTop() / 250 );

    if ($(this).scrollTop() > 300) {
        $('.header').addClass('nav-fade-in').fadeIn();
    }else {
        $('.header').removeClass('nav-fade-in');
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
    $('.header').toggleClass('background-white')
    $('.header li a').toggleClass('text-black')
  })

  $(function(){
  	$(".typed").typed({
  		strings: ["Developers", "Transparent", "Studio<span class='text-green'>7</span>"],
  		stringsElement: null,
      typeSpeed: 0,
      backSpeed: 0,
      cursorChar: '',
  		attr: null,
  		contentType: 'html',
  		callback: function() {},
  		// starting callback function before each string
  		preStringTyped: function() {},
  		//callback for every typed string
  		onStringTyped: function() {},
  		// callback for reset
  		resetCallback: function() {}
  	});
  });

  $("#sticky").sticky({
    topSpacing:0,
    className: 'sticky-config',
    responsiveWidth: 'true'
  });

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
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
update = function() {
  stats.begin();
  stats.end();
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
