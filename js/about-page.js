$(document).ready(function () {

  // Виджеты
  const widgets = document.querySelector('.widgets-btn');
  window.addEventListener('scroll', function () {
    let st = document.documentElement.scrollTop;
    if (window.innerWidth >= 360) {
      if (st > 720) {
        widgets.classList.add('active')
      } else {
        widgets.classList.remove('active')
      }
    } else if
    (window.innerWidth >= 720) {
      if (st > 1080) {
        widgets.classList.add('active')
      } else {
        widgets.classList.remove('active')
      }
    } else if (window.innerWidth >= 1366) {
      if (st > 500) {
        widgets.classList.add('active')
      } else {
        widgets.classList.remove('active')
      }
    } else {
      widgets.classList.remove('active');
    }
  });

    $(".advantages__item--slider").owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        autoWidth:true/*,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
            },
            920: {
                items: 3,
            },
            1280: {
                items: 3,
                nav: true
            }
        }*/
    });
    $(".advantages__item-slider").owlCarousel({
        loop: false,
        items: 1,
        margin: 10,
        nav: true,
        autoWidth:true/*,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
            },
            920: {
                items: 3,
            },
            1280: {
                items: 3,
                nav: true
            }
        }*/
    });
    $(".items-link__body").on('click', 'span', function() {
      $(".advantages__item-slider").removeClass("show");
  
      var newImage = $(this).index();
  
      $(".advantages__item-slider").eq(newImage).addClass("show");
  
      $(".items-link__body span").removeClass("item-link_active");
      $(this).addClass("item-link_active");
    });
});

