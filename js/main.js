// JAVASCRİPT ilə yazılan kodlar






const menuBtn = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
})






document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelectorAll(".falling-text").forEach(function (element) {
      element.classList.add("active");
    });
  }, 1000);
});








const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / 200;

    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});












document.addEventListener('DOMContentLoaded', function () {
  var faqItems = document.getElementsByClassName('faq-question');

  for (var i = 0; i < faqItems.length; i++) {
    faqItems[i].addEventListener('click', function () {
      var answer = this.nextElementSibling;

      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  }
});







const question = document.querySelectorAll('.faq-item');

question.forEach(faq => {
  faq.addEventListener('click', function (e) {
    e.stopPropagation();
    e.target.classList.toggle('clicked-faq');
    question.forEach(item => {
      if (item !== e.target) {
        item.classList.remove('clicked-faq')
      }
    })

  });
});


















// JQUERY ilə yazılan kodlar




$(document).ready(function () {
  $('#searchIcon').on('click', function () {
    $('#searchPopup').fadeIn();
  });

  $('#closeSearchPopup').on('click', function () {
    $('#searchPopup').fadeOut();
  });

  $(window).on('click', function (event) {
    if ($(event.target).is('#searchPopup')) {
      $('#searchPopup').fadeOut();
    }
  });









  $(document).ready(function () {
    var images = ['imgs/bg-01.jpg', 'imgs/img-07.jpg'];
    var currentImageIndex = 0;

    $('#bgImage').css('background-image', 'url(' + images[currentImageIndex] + ')');

    $('.dot').on('click', function () {
      var clickedDotIndex = $(this).index();

      if (clickedDotIndex !== currentImageIndex) {
        currentImageIndex = clickedDotIndex;
        $('#bgImage').css('background-image', 'url(' + images[currentImageIndex] + ')');

        $('.dot').removeClass('active');
        $(this).addClass('active');
      }
    });
  });









  $(document).ready(function () {
    var menu = $('.SecondMainHome');

    $(window).scroll(function () {
      if ($(window).scrollTop() > 150 && $(window).width() >= 1180) {
        menu.addClass('sticky');
      } else {
        menu.removeClass('sticky');
      }
    });

    $(window).resize(function () {
      if ($(window).width() < 1180) {
        menu.removeClass('sticky');
      }
    });
  });









  $(document).ready(function () {

    $('#videoIcon').on('click', function () {
      $('#videoPopup').fadeIn();
    });

    $(window).on('click', function (event) {
      if ($(event.target).is('#videoPopup')) {
        $('#videoPopup').fadeOut();
      }
    });
  });










  $(document).ready(function () {

    $('#videoIconSecond').on('click', function () {
      $('#videoPopupSecond').fadeIn();
    });

    $(window).on('click', function (event) {
      if ($(event.target).is('#videoPopupSecond')) {
        $('#videoPopupSecond').fadeOut();
      }
    });
  });









  $(document).ready(function () {
    $('.dot').click(function () {
      $('.testimonial').removeClass('active');
      $('.dot').removeClass('active');

      var target = $(this).data('target');

      $(this).addClass('active');
      $(target).addClass('active');
    });
  });





});