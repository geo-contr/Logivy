$("body, .js-fraud-close").click(function(){
    $("body").removeClass("has-fraud-feed-modal");
});



function reset_connect_scroll() {
    $('.connect-crm-wrap-new').scrollTop(0); // Ensure modal content is scrolled to the top
}
$(".feed-crm-pop_open-new").click(function(){
    $("body").addClass("has-feed-modal-new");
    $(".feed-modal-new").addClass("is-active");

    // Reset the scroll position when closing
    reset_connect_scroll();
});

$(".post__close-button, .feed-crm-pop_wrapper-new").click(function(){
    $("body").removeClass("has-feed-modal-new");
    // $(".feed-modal-new").removeClass("is-active");
});





document.addEventListener('DOMContentLoaded', function () {
    // First custom-select2
    const customSelect2 = document.querySelector('.custom-select2');
    const customSelectTrigger2 = customSelect2.querySelector('.custom-select-trigger2');
    const customOptions2 = customSelect2.querySelector('.custom-options2');
    const customOptionsList2 = customOptions2.querySelectorAll('.custom-option2');
    const hiddenInput2 = document.getElementById('field_crm_industries2');

    /*customSelectTrigger2*/customSelect2.addEventListener('click', function (e) {
        e.stopPropagation();
        customSelect2.classList.toggle('open');
        // Close the other custom-select
        document.querySelector('.custom-select3').classList.remove('open');
    });

    customOptionsList2.forEach(option => {
        option.addEventListener('click', function (e) {
            e.stopPropagation();
            customSelectTrigger2.textContent = this.textContent;
            customSelectTrigger2.style.color = window.getComputedStyle(this).color;
            hiddenInput2.value = this.getAttribute('data-value');
            customSelect2.classList.remove('open');
        });
    });

    document.addEventListener('click', function (e) {
        if (!customSelect2.contains(e.target)) {
            customSelect2.classList.remove('open');
        }
    });

    // Second custom-select3
    const customSelect3 = document.querySelector('.custom-select3');
    const customSelectTrigger3 = customSelect3.querySelector('.custom-select-trigger3');
    const customOptions3 = customSelect3.querySelector('.custom-options3');
    const customOptionsList3 = customOptions3.querySelectorAll('.custom-option3');
    const hiddenInput3 = document.getElementById('field_crm_industries3');

    customSelectTrigger3.addEventListener('click', function (e) {
        e.stopPropagation();
        customSelect3.classList.toggle('open');
        // Close the other custom-select
        document.querySelector('.custom-select2').classList.remove('open');
    });

    customOptionsList3.forEach(option => {
        option.addEventListener('click', function (e) {
            e.stopPropagation();
            customSelectTrigger3.textContent = this.textContent;
            customSelectTrigger3.style.color = window.getComputedStyle(this).color;
            hiddenInput3.value = this.getAttribute('data-value');
            customSelect3.classList.remove('open');
        });
    });

    document.addEventListener('click', function (e) {
        if (!customSelect3.contains(e.target)) {
            customSelect3.classList.remove('open');
        }
    });


     $('.feed-modal-new, .container--s').click(function (e) {
        $('.custom-select2, .custom-select3').removeClass('open');
        e.stopPropagation(); // Prevents this click from bubbling up to the document click listener
    });
});



$(document).ready(function() {
  $('.filter-btn a').click(function(event) {
    // Prevent the default anchor click behavior
    event.preventDefault();

    var filterValue = $(this).data('filter');
    var $container = $('.itemBox').parent();
    var $items = $('.itemBox');
    var $filteredItems = filterValue === 'europe' ? $items : $items.filter('.' + filterValue);

    // Set the container's height to its current height before hiding items
    var originalHeight = $container.outerHeight();
    $container.height(originalHeight); 

    // Keep the current scroll position
    var scrollPos = $(window).scrollTop();

    // Hide all items without affecting the container's height
    $items.stop(true, true).fadeOut(200);

    // Immediately show the filtered items without height manipulation
    $filteredItems.fadeIn(300);

    // Maintain the container height during the animation
    // $container.css('display', 'grid').css('height', 'auto');
    // $container.css('display', 'grid');
    $container.css('height', originalHeight + '100vh').css('display', 'grid');


    // Calculate the new height based on the items that will be shown
    setTimeout(function() {
      var newHeight = $filteredItems.outerHeight(true) * $filteredItems.length;
      $container.height(newHeight); // Set the container's height to the new total height

      // Show filtered items with staggered animation
      $filteredItems.each(function(index) {
        $(this).delay(index * 100).fadeIn(200);
      });

      // Once animations are complete, set the height back to auto
      setTimeout(function() {
        $container.height('auto');
      }, $filteredItems.length * 100 + 200); // Adjust timeout based on the number of items
    }, 200); // Wait for the fadeOut to complete

    // Update 'is-active' class on buttons
    $('.filter-btn a').removeClass('is-active');
    $(this).addClass('is-active');
  });
});



$('.amsterdam_office').click(function (e) {
    e.stopPropagation();
    $('.contact_amsterdam_office').toggleClass('is-active');
    $('.amsterdam_office_content').slideToggle('fast');
    $('.contact_athens_office, .contact_barcelona_office, .contact_belgrade_office, .contact_berlin_office, .contact_tbilisi_office, .contact_brussels_office, .contact_bucharest_office, .contact_budapest_office, .contact_copenhagen_office, .contact_dublin_office, .contact_düsseldorf_office, .contact_frankfurt_office, .contact_hamburg_office, .contact_istanbul_office').removeClass('is-active');
    $('.athens_office_content, .barcelona_office_content, .belgrade_office_content, .berlin_office_content, .tbilisi_office_content, .brussels_office_content, .bucharest_office_content, .budapest_office_content, .copenhagen_office_content, .dublin_office_content, .düsseldorf_office_content, .frankfurt_office_content, .hamburg_office_content, .istanbul_office_content').slideUp('fast');
});

$('.athens_office').click(function (e) {
    e.stopPropagation();
    $('.contact_athens_office').toggleClass('is-active');
    $('.athens_office_content').slideToggle('fast');
    $('.contact_amsterdam_office, .contact_barcelona_office, .contact_belgrade_office, .contact_berlin_office, .contact_tbilisi_office, .contact_brussels_office, .contact_bucharest_office, .contact_budapest_office, .contact_copenhagen_office, .contact_dublin_office, .contact_düsseldorf_office, .contact_frankfurt_office, .contact_hamburg_office, .contact_istanbul_office').removeClass('is-active');
    $('.amsterdam_office_content, .barcelona_office_content, .belgrade_office_content, .berlin_office_content, .tbilisi_office_content, .brussels_office_content, .bucharest_office_content, .budapest_office_content, .copenhagen_office_content, .dublin_office_content, .düsseldorf_office_content, .frankfurt_office_content, .hamburg_office_content, .istanbul_office_content').slideUp('fast');
});

$('.barcelona_office').click(function (e) {
    e.stopPropagation();
    $('.contact_barcelona_office').toggleClass('is-active');
    $('.barcelona_office_content').slideToggle('fast');
    $('.contact_amsterdam_office, .contact_athens_office, .contact_belgrade_office, .contact_berlin_office, .contact_tbilisi_office, .contact_brussels_office, .contact_bucharest_office, .contact_budapest_office, .contact_copenhagen_office, .contact_dublin_office, .contact_düsseldorf_office, .contact_frankfurt_office, .contact_hamburg_office, .contact_istanbul_office').removeClass('is-active');
    $('.amsterdam_office_content, .athens_office_content, .belgrade_office_content, .berlin_office_content, .tbilisi_office_content, .brussels_office_content, .bucharest_office_content, .budapest_office_content, .copenhagen_office_content, .dublin_office_content, .düsseldorf_office_content, .frankfurt_office_content, .hamburg_office_content, .istanbul_office_content').slideUp('fast');
});

$('.belgrade_office').click(function (e) {
    e.stopPropagation();
    $('.contact_belgrade_office').toggleClass('is-active');
    $('.belgrade_office_content').slideToggle('fast');
    $('.contact_amsterdam_office, .contact_athens_office, .contact_barcelona_office, .contact_berlin_office, .contact_tbilisi_office, .contact_brussels_office, .contact_bucharest_office, .contact_budapest_office, .contact_copenhagen_office, .contact_dublin_office, .contact_düsseldorf_office, .contact_frankfurt_office, .contact_hamburg_office, .contact_istanbul_office').removeClass('is-active');
    $('.amsterdam_office_content, .athens_office_content, .barcelona_office_content, .berlin_office_content, .tbilisi_office_content, .brussels_office_content, .bucharest_office_content, .budapest_office_content, .copenhagen_office_content, .dublin_office_content, .düsseldorf_office_content, .frankfurt_office_content, .hamburg_office_content, .istanbul_office_content').slideUp('fast');
});

$('.berlin_office').click(function (e) {
    e.stopPropagation();
    $('.contact_berlin_office').toggleClass('is-active');
    $('.berlin_office_content').slideToggle('fast');
    $('.contact_amsterdam_office, .contact_athens_office, .contact_barcelona_office, .contact_belgrade_office, .contact_tbilisi_office, .contact_brussels_office, .contact_bucharest_office, .contact_budapest_office, .contact_copenhagen_office, .contact_dublin_office, .contact_düsseldorf_office, .contact_frankfurt_office, .contact_hamburg_office, .contact_istanbul_office').removeClass('is-active');
    $('.amsterdam_office_content, .athens_office_content, .barcelona_office_content, .belgrade_office_content, .tbilisi_office_content, .brussels_office_content, .bucharest_office_content, .budapest_office_content, .copenhagen_office_content, .dublin_office_content, .düsseldorf_office_content, .frankfurt_office_content, .hamburg_office_content, .istanbul_office_content').slideUp('fast');
});

$('.tbilisi_office').click(function (e) {
    e.stopPropagation();
    $('.contact_tbilisi_office').toggleClass('is-active');
    $('.tbilisi_office_content').slideToggle('fast');
    $('.contact_amsterdam_office, .contact_athens_office, .contact_barcelona_office, .contact_belgrade_office, .contact_berlin_office, .contact_brussels_office, .contact_bucharest_office, .contact_budapest_office, .contact_copenhagen_office, .contact_dublin_office, .contact_düsseldorf_office, .contact_frankfurt_office, .contact_hamburg_office, .contact_istanbul_office').removeClass('is-active');
    $('.amsterdam_office_content, .athens_office_content, .barcelona_office_content, .belgrade_office_content, .berlin_office_content, .brussels_office_content, .bucharest_office_content, .budapest_office_content, .copenhagen_office_content, .dublin_office_content, .düsseldorf_office_content, .frankfurt_office_content, .hamburg_office_content, .istanbul_office_content').slideUp('fast');
});

$('.brussels_office').click(function (e) {
    e.stopPropagation();
    $('.contact_brussels_office').toggleClass('is-active');
    $('.brussels_office_content').slideToggle('fast');
    $('.contact_amsterdam_office, .contact_athens_office, .contact_barcelona_office, .contact_belgrade_office, .contact_berlin_office, .contact_tbilisi_office, .contact_bucharest_office, .contact_budapest_office, .contact_copenhagen_office, .contact_dublin_office, .contact_düsseldorf_office, .contact_frankfurt_office, .contact_hamburg_office, .contact_istanbul_office').removeClass('is-active');
    $('.amsterdam_office_content, .athens_office_content, .barcelona_office_content, .belgrade_office_content, .berlin_office_content, .tbilisi_office_content, .bucharest_office_content, .budapest_office_content, .copenhagen_office_content, .dublin_office_content, .düsseldorf_office_content, .frankfurt_office_content, .hamburg_office_content, .istanbul_office_content').slideUp('fast');
});

$('.bucharest_office').click(function (e) {
    e.stopPropagation();
    $('.contact_bucharest_office').toggleClass('is-active');
    $('.bucharest_office_content').slideToggle('fast');
    $('.contact_amsterdam_office, .contact_athens_office, .contact_barcelona_office, .contact_belgrade_office, .contact_berlin_office, .contact_tbilisi_office, .contact_brussels_office, .contact_budapest_office, .contact_copenhagen_office, .contact_dublin_office, .contact_düsseldorf_office, .contact_frankfurt_office, .contact_hamburg_office, .contact_istanbul_office').removeClass('is-active');
    $('.amsterdam_office_content, .athens_office_content, .barcelona_office_content, .belgrade_office_content, .berlin_office_content, .tbilisi_office_content, .brussels_office_content, .budapest_office_content, .copenhagen_office_content, .dublin_office_content, .düsseldorf_office_content, .frankfurt_office_content, .hamburg_office_content, .istanbul_office_content').slideUp('fast');
});

$('.budapest_office').click(function (e) {
    e.stopPropagation();
    $('.contact_budapest_office').toggleClass('is-active');
    $('.budapest_office_content').slideToggle('fast');
    $('.contact_amsterdam_office, .contact_athens_office, .contact_barcelona_office, .contact_belgrade_office, .contact_berlin_office, .contact_tbilisi_office, .contact_brussels_office, .contact_bucharest_office, .contact_copenhagen_office, .contact_dublin_office, .contact_düsseldorf_office, .contact_frankfurt_office, .contact_hamburg_office, .contact_istanbul_office').removeClass('is-active');
    $('.amsterdam_office_content, .athens_office_content, .barcelona_office_content, .belgrade_office_content, .berlin_office_content, .tbilisi_office_content, .brussels_office_content, .bucharest_office_content, .copenhagen_office_content, .dublin_office_content, .düsseldorf_office_content, .frankfurt_office_content, .hamburg_office_content, .istanbul_office_content').slideUp('fast');
});

$('.copenhagen_office').click(function (e) {
    e.stopPropagation();
    $('.contact_copenhagen_office').toggleClass('is-active');
    $('.copenhagen_office_content').slideToggle('fast');
    $('.contact_amsterdam_office, .contact_athens_office, .contact_barcelona_office, .contact_belgrade_office, .contact_berlin_office, .contact_tbilisi_office, .contact_brussels_office, .contact_bucharest_office, .contact_budapest_office, .contact_dublin_office, .contact_düsseldorf_office, .contact_frankfurt_office, .contact_hamburg_office, .contact_istanbul_office').removeClass('is-active');
    $('.amsterdam_office_content, .athens_office_content, .barcelona_office_content, .belgrade_office_content, .berlin_office_content, .tbilisi_office_content, .brussels_office_content, .bucharest_office_content, .budapest_office_content, .dublin_office_content, .düsseldorf_office_content, .frankfurt_office_content, .hamburg_office_content, .istanbul_office_content').slideUp('fast');
});

$('.dublin_office').click(function (e) {
    e.stopPropagation();
    $('.contact_dublin_office').toggleClass('is-active');
    $('.dublin_office_content').slideToggle('fast');
    $('.contact_amsterdam_office, .contact_athens_office, .contact_barcelona_office, .contact_belgrade_office, .contact_berlin_office, .contact_tbilisi_office, .contact_brussels_office, .contact_bucharest_office, .contact_budapest_office, .contact_copenhagen_office, .contact_düsseldorf_office, .contact_frankfurt_office, .contact_hamburg_office, .contact_istanbul_office').removeClass('is-active');
    $('.amsterdam_office_content, .athens_office_content, .barcelona_office_content, .belgrade_office_content, .berlin_office_content, .tbilisi_office_content, .brussels_office_content, .bucharest_office_content, .budapest_office_content, .copenhagen_office_content, .düsseldorf_office_content, .frankfurt_office_content, .hamburg_office_content, .istanbul_office_content').slideUp('fast');
});

$('.düsseldorf_office').click(function (e) {
    e.stopPropagation();
    $('.contact_düsseldorf_office').toggleClass('is-active');
    $('.düsseldorf_office_content').slideToggle('fast');
    $('.contact_amsterdam_office, .contact_athens_office, .contact_barcelona_office, .contact_belgrade_office, .contact_berlin_office, .contact_tbilisi_office, .contact_brussels_office, .contact_bucharest_office, .contact_budapest_office, .contact_copenhagen_office, .contact_dublin_office, .contact_frankfurt_office, .contact_hamburg_office, .contact_istanbul_office').removeClass('is-active');
    $('.amsterdam_office_content, .athens_office_content, .barcelona_office_content, .belgrade_office_content, .berlin_office_content, .tbilisi_office_content, .brussels_office_content, .bucharest_office_content, .budapest_office_content, .copenhagen_office_content, .dublin_office_content, .frankfurt_office_content, .hamburg_office_content, .istanbul_office_content').slideUp('fast');
});

$('.frankfurt_office').click(function (e) {
    e.stopPropagation();
    $('.contact_frankfurt_office').toggleClass('is-active');
    $('.frankfurt_office_content').slideToggle('fast');
    $('.contact_amsterdam_office, .contact_athens_office, .contact_barcelona_office, .contact_belgrade_office, .contact_berlin_office, .contact_tbilisi_office, .contact_brussels_office, .contact_bucharest_office, .contact_budapest_office, .contact_copenhagen_office, .contact_dublin_office, .contact_düsseldorf_office, .contact_hamburg_office, .contact_istanbul_office').removeClass('is-active');
    $('.amsterdam_office_content, .athens_office_content, .barcelona_office_content, .belgrade_office_content, .berlin_office_content, .tbilisi_office_content, .brussels_office_content, .bucharest_office_content, .budapest_office_content, .copenhagen_office_content, .dublin_office_content, .düsseldorf_office_content, .hamburg_office_content, .istanbul_office_content').slideUp('fast');
});

$('.hamburg_office').click(function (e) {
    e.stopPropagation();
    $('.contact_hamburg_office').toggleClass('is-active');
    $('.hamburg_office_content').slideToggle('fast');
    $('.contact_amsterdam_office, .contact_athens_office, .contact_barcelona_office, .contact_belgrade_office, .contact_berlin_office, .contact_tbilisi_office, .contact_brussels_office, .contact_bucharest_office, .contact_budapest_office, .contact_copenhagen_office, .contact_dublin_office, .contact_düsseldorf_office, .contact_frankfurt_office, .contact_istanbul_office').removeClass('is-active');
    $('.amsterdam_office_content, .athens_office_content, .barcelona_office_content, .belgrade_office_content, .berlin_office_content, .tbilisi_office_content, .brussels_office_content, .bucharest_office_content, .budapest_office_content, .copenhagen_office_content, .dublin_office_content, .düsseldorf_office_content, .frankfurt_office_content, .istanbul_office_content').slideUp('fast');
});

$('.istanbul_office').click(function (e) {
    e.stopPropagation();
    $('.contact_istanbul_office').toggleClass('is-active');
    $('.istanbul_office_content').slideToggle('fast');
    $('.contact_amsterdam_office, .contact_athens_office, .contact_barcelona_office, .contact_belgrade_office, .contact_berlin_office, .contact_tbilisi_office, .contact_brussels_office, .contact_bucharest_office, .contact_budapest_office, .contact_copenhagen_office, .contact_dublin_office, .contact_düsseldorf_office, .contact_frankfurt_office, .contact_hamburg_office').removeClass('is-active');
    $('.amsterdam_office_content, .athens_office_content, .barcelona_office_content, .belgrade_office_content, .berlin_office_content, .tbilisi_office_content, .brussels_office_content, .bucharest_office_content, .budapest_office_content, .copenhagen_office_content, .dublin_office_content, .düsseldorf_office_content, .frankfurt_office_content, .hamburg_office_content').slideUp('fast');
});

$('body').click(function (e) {
    $('.contact_amsterdam_office, .contact_athens_office, .contact_barcelona_office, .contact_belgrade_office, .contact_berlin_office, .contact_tbilisi_office, .contact_brussels_office, .contact_bucharest_office, .contact_budapest_office, .contact_copenhagen_office, .contact_dublin_office, .contact_düsseldorf_office, .contact_frankfurt_office, .contact_hamburg_office, .contact_istanbul_office').removeClass('is-active');
    $('.amsterdam_office_content, .athens_office_content, .barcelona_office_content, .belgrade_office_content, .berlin_office_content, .tbilisi_office_content, .brussels_office_content, .bucharest_office_content, .budapest_office_content, .copenhagen_office_content, .dublin_office_content, .düsseldorf_office_content, .frankfurt_office_content, .hamburg_office_content, .istanbul_office_content').slideUp('fast');
});

$('.contact-card__content-wrapper').click(function (e) {
    e.stopPropagation();
});























































