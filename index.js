$(function(){
"use strict";
/*------------------------------------------------
Gloabl Variables
--------------------------------------------------*/
  var allWindow = $(window),
      top = allWindow.scrollTop(),
      navBar = $(".nav-wrapper"),
      navLinks = navBar.find(".navbar-collapse ul li a"),
      sections = $('.one-page-section'),
      navList = navBar.find("ul.navbar-nav");
/*------------------------------------------------
On page load events
--------------------------------------------------*/
  allWindow.on("load", function() {
    $('.loader-con').fadeOut('slow');
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    //$('.copy-text').html("Virbhadrasinh © " + new Date().getFullYear() + ". all right reserved.");
  });
/*------------------------------------------
  Initialize text change
--------------------------------------------
  /*var text = $('#home .text-change-title'),
      //textOne = "let's work together",
      //textTwo = "for Bridging Business Problems & Technology Solutions",
      textThree = "i can help in ",
      textFour = "architecting and building web applications & ",
      textFive = "Forward Planning for delivering projects on time";

  if (!!$.prototype.textChange) {
    text.textChange([textThree, textFour, textFive]);
  }*/
/*----------------------------------------------------------------------
 Initialize Particules
-----------------------------------------------------------------------*/
  if (typeof particlesJS !== "undefined") {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 600
          }
        },
        "color": {
          "value": '#777',
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#888"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.7,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 4,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#bbb",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 4,
          "direction": "bottom",
          "random": false,
          "straight": false,
          "out_mode": "out",
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
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    });
  }
/*---------------------------------------------------------------------
Hide Navbar Dropdown After Click On Nav Links
-------------------------------------------------------------------*/
  $.each( navLinks, function( i, val ) {
    var navLink = $(this);
    navLink.on('click', function (e) {
      navBar.find(".navbar-collapse").collapse('hide');
    });
  });
/*---------------------------------------------------------------------
Nav Links Scroll Events
----------------------------------------------------------------------*/
  $('a.scroll').on('click', function(event) {
    var target = $(this.hash),
        speed= $(this).data("speed") || 800;
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, speed);
      }
  });
/*---------------------------------------------------------------------
Scroll Top Events
----------------------------------------------------------------------*/
$(".scroll-up").on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 500);
});
/*----------------------------------------------------------------
Call Function on Window Scroll
-----------------------------------------------------------------*/
  function stikyNav() {
    top = allWindow.scrollTop();
    if ( top >= 100 ) {
      navBar.addClass("nav-sticky");
    } else {
      navBar.removeClass("nav-sticky");
    }
    if ( top >= 1000 ) {
      $('.scroll-up').addClass("show-up-btn");
    } else {
      $('.scroll-up').removeClass("show-up-btn");
    }
  }

  function ChangeClass() {
    top = allWindow.scrollTop();
    $.each(sections, function(i,val) {
      var section = $(this),
          section_top = section.offset().top - 10,
          bottom = section_top + section.height();

      function makeLinkActive(currentSection) {
        var naItems = navList.find('li');
        $.each(naItems ,function(i,val) {
          var item = $(this);
          item.find("a").removeClass("active");
        });
        navList.find('li [href="#' + currentSection.attr('id') + '"]').addClass('active');
      }
      if (top >= section_top && top <= bottom) {
        makeLinkActive(section);
      }
    });
  } 
  allWindow.on('scroll', function() {
    stikyNav();
    ChangeClass();
  });
/*------------------------------------------------------------------------
 Validate and Submit the CONTACT Form Using AJAX
-------------------------------------------------------------------------*/
  var form = $('#contact-form'),
      reg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{3,4})$/,
      inputs = $(".input-field"),
      formMessages = $('#form-message');

  function validateForm() {
    if ($(this).is("#email")) {
      var email = $(this).val(),
        res = reg.test(email);
      if (res) {
        $(".email-error").html("");
      } else {
        $(".email-error").html("please enter a valid email.");
        return false;
      }
    } else {
      var target = ($(this).attr("id")),
        targetMessage = $("." + target + "-error");
      if ($(this).val() === "") {
        targetMessage.html("please enter a valid " + target + ".");
        return false;
      } else {
        targetMessage.html(" ");
      }
    }
  }

  $.each(inputs, function (i, val) {
    $(this).on("blur", validateForm);
  });
  
  $(form).on('submit',function(event) {
    event.preventDefault();
      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vir.18.newsletter@gmail.com",
        Password : "6fa1324f-7f39-42c2-813d-fc0dc25ea75e",
        To : 'chauhanvirbhadrasinh@gmail.com',
        From : "vir.18.newsletter@gmail.com",
        Subject : $('#name').val() + " ("+ $('#email').val() +") wants to connect you",
        Body : $('#message').val()
    }).then(function(message) {
      if("OK" === message) {
        formMessages.removeClass('error');
        formMessages.addClass('success');
        formMessages.text('Thank you for your email. I will do my best to respond promptly to your email.');
        formMessages.show();
        setTimeout(function(){formMessages.text('').hide();},5000);
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
      } else {
        formMessages.removeClass('success');
        formMessages.addClass('error');
        formMessages.show();
        formMessages.text('Sorry! An error occured and your message could not be sent.');
        setTimeout(function(){formMessages.text('').hide();},5000);
      }
    });
  });
});