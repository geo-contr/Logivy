document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.querySelector('.js-feed-search');
    var advSearchIcon = document.querySelector('.adv-search-icon');
    var inputElement = searchButton.querySelector('input');

    searchButton.addEventListener('click', function(event) {
        if (event.target !== inputElement) {
            searchButton.classList.add('is-active');

            advSearchIcon.style.display = 'inline';
            
            // if (advSearchIcon.style.display === 'none' || advSearchIcon.style.display === '') {
            //     advSearchIcon.style.display = 'inline';
            // } else {
            //     advSearchIcon.style.display = 'none';
            // }
        }
    });

    advSearchIcon.addEventListener('click', function(event) {
        if (event.target !== inputElement) {
            searchButton.classList.remove('is-active');

            advSearchIcon.style.display = 'none';
        }
    });

    inputElement.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up to the searchButton
    });
});

// $('.js-feed-search').click(function(){
//     $('.js-feed-search').addClass('is-active');
//     $('.adv-search-icon').css('display', 'inline');
// });

// $('.adv-search-icon').click(function(){
//     $('.js-feed-search').removeClass('is-active');
//     $('.adv-search-icon').css('display', 'none');
// });




// Filter animation
// $(document).ready(function(){
//     $('.filter-btn').click(function(){
//         const value = $(this).attr('data-filter');
//         if (value == 'all'){
//             $('.itemBox').fadeIn(0); // Use fadeIn for smoother transition
//         } else {
//             $('.itemBox').fadeOut(0, function() {
//                 $('.itemBox').hide();
//                 $('.itemBox.'+value).fadeIn(0); // Show only the filtered items
//             });
//         }
//         $(this).addClass('active').siblings().removeClass('active');
//     });
// });

// $(document).ready(function() {
//   $('.filter-btn').on('click', function() {
//     var filterValue = $(this).data('filter');

//     // Remove 'active' class from all buttons and add it to the clicked one
//     $('.filter-btn').removeClass('active');
//     $(this).addClass('active');

//     // Stop any ongoing animations and hide all items
//     $('.filter-item').stop(true, true).fadeOut(0);

//     // Show the items that match the clicked filter
//     if (filterValue === 'all') {
//       $('.filter-item').stop(true, true).fadeIn(500); // Show all items
//     } else {
//       $('.' + filterValue).stop(true, true).fadeIn(500); // Show filtered items
//     }
//   });
// });

// $(document).ready(function() {
//   $('.filter-btn').click(function() {
//     var filterValue = $(this).data('filter');

//     // Stop any ongoing animations and hide all items immediately
//     $('.itemBox').stop(true, true).hide();

//     // Filter items and animate them with the staggered effect
//     if (filterValue === 'all') {
//       // Show all items with a staggered animation
//       $('.itemBox').each(function(index) {
//         $(this).delay(index * 100).fadeIn(200);  // Delay of 200ms per item
//       });
//     } else {
//       // Show only filtered items with a staggered animation
//       $('.' + filterValue).each(function(index) {
//         $(this).delay(index * 100).fadeIn(200);  // Delay of 200ms per item
//       });
//     }

//     // Add 'active' class to the clicked button and remove from others
//     $(this).addClass('active').siblings().removeClass('active');
//   });
// });

// Without push
// $(document).ready(function() {
//   $('.filter-btn').click(function() {
//     var filterValue = $(this).data('filter');
//     var $container = $('.itemBox').parent(); // Assuming the parent container holds the items
//     var originalHeight = $container.height(); // Get the original height of the container

//     // Stop any ongoing animations and hide all items immediately
//     $('.itemBox').stop(true, true).hide();

//     // Maintain the container height during the animation
//     $container.css('height', originalHeight + 'px');

//     // Filter items and animate them with the staggered effect
//     if (filterValue === 'all') {
//       // Show all items with a staggered animation
//       $('.itemBox').each(function(index) {
//         $(this).delay(index * 100).fadeIn(200);
//       });
//     } else {
//       // Show only filtered items with a staggered animation
//       $('.' + filterValue).each(function(index) {
//         $(this).delay(index * 100).fadeIn(200);
//       });
//     }

//     // Once animations are complete, set the container height back to auto
//     setTimeout(function() {
//       $container.css('height', 'auto');
//     }, $('.itemBox').length * 100 + 200); // Total duration for the staggered animation

//     // Add 'active' class to the clicked button and remove from others
//     $(this).addClass('active').siblings().removeClass('active');
//   });
// });

$(document).ready(function() {
  $('.filter-btn').click(function() {
    var filterValue = $(this).data('filter');
    var $container = $('.itemBox').parent(); // Assuming the parent container holds the items
    var originalHeight = $container.height(); // Get the original height of the container

    // Stop any ongoing animations and hide all items immediately
    $('.itemBox').stop(true, true).hide();

    // Maintain the container height during the animation
    $container.css('height', originalHeight + 'px');

    // Filter items and animate them with a consistent staggered effect
    if (filterValue === 'all') {
      // Show all items with a staggered animation
      $('.itemBox').each(function(index) {
        $(this).delay(index * 100).fadeIn(200); // Consistent delay between items
      });
    } else {
      // Show only filtered items with a staggered animation
      $('.' + filterValue).each(function(index) {
        $(this).delay(index * 100).fadeIn(200); // Consistent delay between items
      });
    }

    // Once animations are complete, set the container height back to auto
    setTimeout(function() {
      $container.css('height', 'auto');
    // }, $('.itemBox:visible').length * 100 + 200); // Adjust based on visible items
    }, $('.itemBox:hidden').length * 20 + 200); // Adjust based on visible items

    // Add 'active' class to the clicked button and remove from others
    $(this).addClass('active').siblings().removeClass('active');
  });
});
// End of Without push


$(".read_filter").click(function(){
    $(".read_future, .read_build, .read_sport").addClass("marg-top");
});
$(".watch_filter").click(function(){
    $(".watch_hungr, .watch_mod, .watch_putt, .watch_how").addClass("marg-top");
});
$(".listen_filter").click(function(){
    $(".listen_liz, .listen_dev, .listen_art, .listen_hea, .listen_talks").addClass("marg-top");
});
$(".news_filter").click(function(){
    $(".news_bol, .news_award, .news_named").addClass("marg-top");
});

$(".all").click(function(){
    $(".read_future, .read_build, .read_sport, .watch_hungr, .watch_mod, .watch_putt, .watch_how, .listen_liz, .listen_dev, .listen_art, .listen_hea, .listen_talks, .news_bol, .news_award, .news_named").removeClass("marg-top");
});
// End of Filter animation



function resetModalScroll() {
    $('.js-modal__wrapper').scrollTop(0); // Ensure modal content is scrolled to the top
}
$('.itemBoxClick').click(function(){
    $('body').addClass('has-modal');
    $('.js-modal1').addClass('is-active');
});
$('.post__close-button, .post__close.js-post-close').click(function(){
    $('body').removeClass('has-modal');
    $('.js-modal').removeClass('is-active');

    // Reset the scroll position when closing
    resetModalScroll();
});
$('.js-modal__wrapper').click(function(){
    $('body').removeClass('has-modal');
    $('.js-modal1').removeClass('is-active');

    // Reset the scroll position when closing
    resetModalScroll();
});


// $(".container--s").click(function(event){
//   event.stopPropagation();
//   // Do something
// });



