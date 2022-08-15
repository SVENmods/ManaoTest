
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      desableOnInteraction : false,
    },
    breakpoints: {
      320:{
        slidesPerView: 1,
      },
      480:{
        slidesPerView: 2,
      },
      768:{
        slidesPerView: 2,
      },
      1024:{
        slidesPerView: 3,
      },
    }
  });

  function validate(){
    var check1=document.getElementById('checkbox-cons');
    var check2=document.getElementById('checkbox-tarif');
    var check3=document.getElementById('checkbox-mark');
    // var error=document.getElementById('errorMSG');
    // var conf=document.getElementById('popup__conf');
    // var body=document.getElementById('popup__body');
    if(check1.checked == true){
      // error.textContent="Вы не подтвердили согласие";
      console.log('mark1-yes');
      return false;
    }
    if(check2.checked == true){
      // error.textContent="Вы не подтвердили согласие";
      console.log('mark2-yes');
      return false;
    }
    if(check3.checked == true){
      // error.textContent="Вы не подтвердили согласие";
      console.log('mark3-yes');
      return false;
    }
    else{
      // body.style.display="none";
      // conf.style.display="flex";
      alert('form-clear');
      return false;
    }
}

function getCheckedCheckBoxes() {
  var checkboxes = document.getElementsByClassName('checkbox');
  var checkboxesChecked = [];
  for (var index = 0; index < checkboxes.length; index++) {
    if (checkboxes[index].checked) {
        checkboxesChecked.push(checkboxes[index].value);
        console.log(checkboxes[index].value);
    }
  }
  return checkboxesChecked;
}

function openPopup() {
  $('.popup-back').fadeIn(300);
  // $(elem).next().fadeIn(200);
  // $(elem).next().siblings(".popup").hide();
  $('body').css('overflow', 'hidden');
}

function closePopup() {
  $('.popup-back').fadeOut(300);
  $('body').css('overflow', 'visible');
}

$('.popup-back, .popup__close').click(function(e) { 
  if(e.target.className != 'popup') {
      closePopup();
  }
})

$(document).ready(function(){
  $('.send-form').submit(function () {
    console.clear();
    var form = $(this);
    var field = [];
    form.find('[data-validate]').each(function () {
      field.push('[data-validate]');
      var value = $(this).val(),
          line = $(this).closest('.send-form__field');
          if(value != ''){
            console.log(value);
            openPopup();
          }
      for(var i=0;i<field.length;i++) {
        if( !value ) {
          line.addClass('send-form__field-required');
          setTimeout(function() {
            line.removeClass('send-form__field-required')
          }.bind(this),2000);
          event.preventDefault();
        }
      }
    });
    getCheckedCheckBoxes();
    $(".send-form")[0].reset();
    return false;
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
      $('.scrollup').css('display', 'flex');
    } else {
      $('.scrollup').fadeOut();
      $('.scrollup').css('display', 'none');
    }
  });

  $('.scrollup').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
});