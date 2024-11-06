$(document).ready(function() {
     // Initialize ScrollMagic Controller
     var controller = new ScrollMagic.Controller();

     // Create a ScrollMagic Scene
     var classToggleScene = new ScrollMagic.Scene({
        triggerElement: ".section__mask_trigger",
        triggerHook: 0.1, // Adjust triggerHook as needed
        duration: 0 // Duration of 0 means it will happen immediately when triggered
     })
     .setClassToggle(".burger", "change") // Add the change class to .burger
     .addTo(controller);
 });

$(document).ready(function() {
     // Initialize ScrollMagic Controller
     var controller = new ScrollMagic.Controller();

     // Create a ScrollMagic Scene
     var classToggleScene = new ScrollMagic.Scene({
        triggerElement: ".section__mask_trigger",
        triggerHook: 0.08, // Adjust triggerHook as needed
        duration: 0 // Duration of 0 means it will happen immediately when triggered
     })
     .setClassToggle(".branding__logo", "change") // Add the change class to .burger
     .addTo(controller);
 });

// $(document).ready(function() {
//      // Initialize ScrollMagic Controller
//      var controller = new ScrollMagic.Controller();

//      // Create a ScrollMagic Scene
//      var classToggleScene = new ScrollMagic.Scene({
//         triggerElement: ".section__mask_trigger",
//         triggerHook: 0.08, // Adjust triggerHook as needed
//         duration: 0 // Duration of 0 means it will happen immediately when triggered
//      })
//      .setClassToggle(".branding__logo", "change") // Add the change class to .burger
//      .addTo(controller);
//  });

$(document).ready(function() {
     // Initialize ScrollMagic Controller
     var controller = new ScrollMagic.Controller();

     // Create a ScrollMagic Scene
     var classToggleScene = new ScrollMagic.Scene({
        triggerElement: ".section__mask_trigger",
        triggerHook: 0.08, // Adjust triggerHook as needed
        duration: 0 // Duration of 0 means it will happen immediately when triggered
     })
     .setClassToggle(".site-nav__list a", "change") // Add the change class to .burger
     .addTo(controller);
 });


function resetConnectScroll() {
    $('.connect-crm-wrap').scrollTop(0); // Ensure modal content is scrolled to the top
}
$('.crm-form a, .region-connect').click(function(){
    $('body').addClass('has-feed-modal');
    $('.feed-modal').addClass('is-active');
});
$('.js-post-close').click(function(){
    $('body').removeClass('has-feed-modal');
    $('.feed-modal').removeClass('is-active');

    // Reset the scroll position when closing
    resetConnectScroll();
});
$('.connect-crm-wrap').click(function(){
    $('body').removeClass('has-feed-modal');
    $('.feed-modal').removeClass('is-active');

    // Reset the scroll position when closing
    resetConnectScroll();
});

$(".container--s").click(function(event){
  event.stopPropagation();
  // Do something
});


// select codes
// old codes
// document.addEventListener('DOMContentLoaded', function () {
//     const customSelect = document.querySelector('.custom-select');
//     const customSelectTrigger = customSelect.querySelector('.custom-select-trigger');
//     const customOptions = customSelect.querySelector('.custom-options');
//     const customOptionsList = customOptions.querySelectorAll('.custom-option');
//     const hiddenInput = document.getElementById('field_crm_industries');

//     customSelectTrigger.addEventListener('click', function (e) {
//         e.stopPropagation(); // Prevents the event from bubbling up to the document click listener
//         customSelect.classList.toggle('open');
//     });

//     customOptionsList.forEach(option => {
//         option.addEventListener('click', function (e) {
//             e.stopPropagation(); // Prevents the event from bubbling up to the document click listener
//             customSelectTrigger.textContent = this.textContent;
//             customSelectTrigger.style.color = window.getComputedStyle(this).color;
//             hiddenInput.value = this.getAttribute('data-value');
//             customSelect.classList.remove('open');
//         });
//     });

//     // Click handler to close dropdown when clicking elsewhere
//     document.addEventListener('click', function (e) {
//         if (!customSelect.contains(e.target) && !e.target.closest('.container--s')) {
//             customSelect.classList.remove('open');
//         }
//     });

//     // jQuery equivalent to close dropdown
//     $('.container--s').click(function (e) {
//         $('.custom-select').removeClass('open');
//         e.stopPropagation(); // Prevents this click from bubbling up to the document click listener
//     });
// });


// document.addEventListener('DOMContentLoaded', function () {
//     const customSelect1 = document.querySelector('.custom-select1');
//     const customSelectTrigger1 = customSelect1.querySelector('.custom-select-trigger1');
//     const customOptions1 = customSelect1.querySelector('.custom-options1');
//     const customOptionsList1 = customOptions1.querySelectorAll('.custom-option1');
//     const hiddenInput1 = document.getElementById('field_crm_industries1');

//     customSelectTrigger1.addEventListener('click', function (e) {
//         e.stopPropagation(); // Prevents the event from bubbling up to the document click listener
//         customSelect1.classList.toggle('open');
//     });

//     customOptionsList1.forEach(option => {
//         option.addEventListener('click', function (e) {
//             e.stopPropagation(); // Prevents the event from bubbling up to the document click listener
//             customSelectTrigger1.textContent = this.textContent;
//             customSelectTrigger1.style.color = window.getComputedStyle(this).color;
//             hiddenInput1.value = this.getAttribute('data-value');
//             customSelect1.classList.remove('open');
//         });
//     });

//     // Click handler to close dropdown when clicking elsewhere
//     document.addEventListener('click', function (e) {
//         if (!customSelect1.contains(e.target) && !e.target.closest('.container--s')) {
//             customSelect1.classList.remove('open');
//         }
//     });

//     // jQuery equivalent to close dropdown
//     $('.container--s').click(function (e) {
//         $('.custom-select1').removeClass('open');
//         e.stopPropagation(); // Prevents this click from bubbling up to the document click listener
//     });
// });
// end of old codes

document.addEventListener('DOMContentLoaded', function () {
    // First custom-select
    const customSelect = document.querySelector('.custom-select');
    const customSelectTrigger = customSelect.querySelector('.custom-select-trigger');
    const customOptions = customSelect.querySelector('.custom-options');
    const customOptionsList = customOptions.querySelectorAll('.custom-option');
    const hiddenInput = document.getElementById('field_crm_industries');

    customSelectTrigger.addEventListener('click', function (e) {
        e.stopPropagation();
        customSelect.classList.toggle('open');
        // Close the other custom-select
        document.querySelector('.custom-select1').classList.remove('open');
    });

    customOptionsList.forEach(option => {
        option.addEventListener('click', function (e) {
            e.stopPropagation();
            customSelectTrigger.textContent = this.textContent;
            customSelectTrigger.style.color = window.getComputedStyle(this).color;
            hiddenInput.value = this.getAttribute('data-value');
            customSelect.classList.remove('open');
        });
    });

    document.addEventListener('click', function (e) {
        if (!customSelect.contains(e.target)) {
            customSelect.classList.remove('open');
        }
    });

    // Second custom-select1
    const customSelect1 = document.querySelector('.custom-select1');
    const customSelectTrigger1 = customSelect1.querySelector('.custom-select-trigger1');
    const customOptions1 = customSelect1.querySelector('.custom-options1');
    const customOptionsList1 = customOptions1.querySelectorAll('.custom-option1');
    const hiddenInput1 = document.getElementById('field_crm_industries1');

    customSelectTrigger1.addEventListener('click', function (e) {
        e.stopPropagation();
        customSelect1.classList.toggle('open');
        // Close the other custom-select
        document.querySelector('.custom-select').classList.remove('open');
    });

    customOptionsList1.forEach(option => {
        option.addEventListener('click', function (e) {
            e.stopPropagation();
            customSelectTrigger1.textContent = this.textContent;
            customSelectTrigger1.style.color = window.getComputedStyle(this).color;
            hiddenInput1.value = this.getAttribute('data-value');
            customSelect1.classList.remove('open');
        });
    });

    document.addEventListener('click', function (e) {
        if (!customSelect1.contains(e.target)) {
            customSelect1.classList.remove('open');
        }
    });


    $('.feed-modal, .container--s').click(function (e) {
        $('.custom-select, .custom-select1').removeClass('open');
        e.stopPropagation(); // Prevents this click from bubbling up to the document click listener
    });
});
// End of select codes



// $('.social-list-open').click(function (e) {
//     $('.social-list-open, .social-list').toggleClass('active');
//     $('.social-nav-list').toggle(500);
//     $('.social-nav-list li, .social-nav-list li span').toggleClass('is__active');

//     $('.Country-list').removeClass('open');
//     $('.location-list-open, .country-list').removeClass('active');
//     $('.Country-list li').removeClass('is__active');
// });


// $('.location-list-open').click(function (e) {
//     $('.location-list-open, .country-list').toggleClass('active');
//     $('.Country-list').toggleClass('open');
//     $('.Country-list li').toggleClass('is__active');

//     $('.social-nav-list').toggle(500);
// });


$('.social-list-open').click(function (e) {
    $('.social-list-open, .social-list').toggleClass('active');
    $('.social-nav-list').toggle(500);
    $('.social-nav-list li, .social-nav-list li span').toggleClass('is__active');

    $('.Country-list').removeClass('open');
    $('.location-list-open, .country-list').removeClass('active');
    $('.Country-list li').removeClass('is__active');
});

$('.location-list-open').click(function (e) {
    $('.location-list-open, .country-list').toggleClass('active');
    $('.Country-list').toggleClass('open');
    $('.Country-list li').toggleClass('is__active');

    $('.social-list-open, .social-list').removeClass('active');
    $('.social-nav-list li, .social-nav-list li span').removeClass('is__active');

    // Ensure the .social-nav-list is not toggled and is hidden
    if ($('.social-nav-list').is(':visible')) {
        $('.social-nav-list').toggle(500);
    }
});




// $('.cult-disk').click(function (e) {
//     e.stopPropagation();

//     $('.grid__item, .cult-disk-office').toggleClass('is-active');
//     // $('.comms_Zindex, .dynamic_Zindex').toggleClass('open');
//     $('.cult-card__content').slideToggle('fast');
    

//     $('.grid__item, .brand-disk-office, .exp-disk-office, .comms-disk-office, .impact-disk-office, .adtech-disk-office, .dyn-disk-office').removeClass('is-active');
//     // $('.comms_Zindex, .dynamic_Zindex').removeClass('open');
//     $('.brand-card__content, .exp-card__content, .comms-card__content, .impact-card__content, .adtech-card__content, .dyn-card__content').slideUp('fast');
// });

// $('.brand-disk').click(function (e) {
//     e.stopPropagation();

//     $('.grid__item, .brand-disk-office').toggleClass('is-active');
//     // $('.comms_Zindex, .dynamic_Zindex').toggleClass('open');
//     $('.brand-card__content').slideToggle('fast');

//     $('.grid__item, .cult-disk-office, .exp-disk-office, .comms-disk-office, .impact-disk-office, .adtech-disk-office, .dyn-disk-office').removeClass('is-active');
//     // $('.comms_Zindex, .dynamic_Zindex').removeClass('open');
//     $('.cult-card__content, .exp-card__content, .comms-card__content, .impact-card__content, .adtech-card__content, .dyn-card__content').slideUp('fast');
// });

// $('.exp-disk').click(function (e) {
//     e.stopPropagation();

//     $('.grid__item, .exp-disk-office').toggleClass('is-active');
//     // $('.comms_Zindex, .dynamic_Zindex').toggleClass('open');
//     $('.exp-card__content').slideToggle('fast');

//     $('.grid__item, .cult-disk-office, .brand-disk-office, .comms-disk-office, .impact-disk-office, .adtech-disk-office, .dyn-disk-office').removeClass('is-active');
//     // $('.comms_Zindex, .dynamic_Zindex').removeClass('open');
//     $('.cult-card__content, .brand-card__content, .comms-card__content, .impact-card__content, .adtech-card__content, .dyn-card__content').slideUp('fast');
// });

// $('.comms-disk').click(function (e) {
//     e.stopPropagation();

//     $('.grid__item, .comms-disk-office').toggleClass('is-active');
//     // $('.comms_Zindex, .dynamic_Zindex').toggleClass('open');
//     $('.comms-card__content').slideToggle('fast');

//     $('.grid__item, .cult-disk-office, .brand-disk-office, .exp-disk-office, .impact-disk-office, .adtech-disk-office, .dyn-disk-office').removeClass('is-active');
//     // $('.comms_Zindex, .dynamic_Zindex').removeClass('open');
//     $('.cult-card__content, .brand-card__content, .exp-card__content, .impact-card__content, .adtech-card__content, .dyn-card__content').slideUp('fast');
// });

// $('.impact-disk').click(function (e) {
//     e.stopPropagation();

//     $('.grid__item, .impact-disk-office').toggleClass('is-active');
//     // $('.comms_Zindex, .dynamic_Zindex').toggleClass('open');
//     $('.impact-card__content').slideToggle('fast');

//     $('.grid__item, .cult-disk-office, .brand-disk-office, .exp-disk-office, .comms-disk-office, .adtech-disk-office, .dyn-disk-office').removeClass('is-active');
//     // $('.comms_Zindex, .dynamic_Zindex').removeClass('open');
//     $('.cult-card__content, .brand-card__content, .exp-card__content, .comms-card__content, .adtech-card__content, .dyn-card__content').slideUp('fast');
// });

// $('.adtech-disk').click(function (e) {
//     e.stopPropagation();

//     $('.grid__item, .adtech-disk-office').toggleClass('is-active');
//     // $('.comms_Zindex, .dynamic_Zindex').toggleClass('open');
//     $('.adtech-card__content').slideToggle('fast');

//     $('.grid__item, .cult-disk-office, .brand-disk-office, .exp-disk-office, .comms-disk-office, .impact-disk-office, .dyn-disk-office').removeClass('is-active');
//     // $('.comms_Zindex, .dynamic_Zindex').removeClass('open');
//     $('.cult-card__content, .brand-card__content, .exp-card__content, .comms-card__content, .impact-card__content, .dyn-card__content').slideUp('fast');
// });

// $('.dyn-disk').click(function (e) {
//     e.stopPropagation();

//     $('.grid__item, .dyn-disk-office').toggleClass('is-active');
//     // $('.comms_Zindex, .dynamic_Zindex').toggleClass('open');
//     $('.dyn-card__content').slideToggle('fast');

//     $('.grid__item, .cult-disk-office, .brand-disk-office, .exp-disk-office, .comms-disk-office, .impact-disk-office, .adtech-disk-office').removeClass('is-active');
//     // $('.comms_Zindex, .dynamic_Zindex').removeClass('open');
//     $('.cult-card__content, .brand-card__content, .exp-card__content, .comms-card__content, .impact-card__content, .adtech-card__content').slideUp('fast');
// });


// $('body').click(function (e) {
//     $('.grid__item, .cult-disk-office, .dyn-disk-office, .brand-disk-office, .exp-disk-office, .comms-disk-office, .impact-disk-office, .adtech-disk-office').removeClass('is-active');
//     // $('.comms_Zindex, .dynamic_Zindex').removeClass('open');
//     $('.cult-card__content, .dyn-card__content, .brand-card__content, .exp-card__content, .comms-card__content, .impact-card__content, .adtech-card__content').slideUp('fast');
// });


// $('.contact-card__content-wrapper').click(function (e) {
//     e.stopPropagation();
// });




$('.cult-disk').click(function (e) {
    e.stopPropagation();
    $('.grid__item, .cult-disk-office').toggleClass('is-active');
    $('.cult-card__content').slideToggle('fast');
    $('.grid__item, .brand-disk-office, .exp-disk-office, .comms-disk-office, .impact-disk-office, .adtech-disk-office, .dyn-disk-office').removeClass('is-active');
    $('.brand-card__content, .exp-card__content, .comms-card__content, .impact-card__content, .adtech-card__content, .dyn-card__content').slideUp('fast');
});

$('.brand-disk').click(function (e) {
    e.stopPropagation();
    $('.grid__item, .brand-disk-office').toggleClass('is-active');
    $('.brand-card__content').slideToggle('fast');
    $('.grid__item, .cult-disk-office, .exp-disk-office, .comms-disk-office, .impact-disk-office, .adtech-disk-office, .dyn-disk-office').removeClass('is-active');
    $('.cult-card__content, .exp-card__content, .comms-card__content, .impact-card__content, .adtech-card__content, .dyn-card__content').slideUp('fast');
});

$('.exp-disk').click(function (e) {
    e.stopPropagation();
    $('.grid__item, .exp-disk-office').toggleClass('is-active');
    $('.exp-card__content').slideToggle('fast');
    $('.grid__item, .cult-disk-office, .brand-disk-office, .comms-disk-office, .impact-disk-office, .adtech-disk-office, .dyn-disk-office').removeClass('is-active');
    $('.cult-card__content, .brand-card__content, .comms-card__content, .impact-card__content, .adtech-card__content, .dyn-card__content').slideUp('fast');
});

$('.comms-disk').click(function (e) {
    e.stopPropagation();
    $('.grid__item, .comms-disk-office').toggleClass('is-active');
    $('.comms-card__content').slideToggle('fast');
    $('.grid__item, .cult-disk-office, .brand-disk-office, .exp-disk-office, .impact-disk-office, .adtech-disk-office, .dyn-disk-office').removeClass('is-active');
    $('.cult-card__content, .brand-card__content, .exp-card__content, .impact-card__content, .adtech-card__content, .dyn-card__content').slideUp('fast');
});

$('.impact-disk').click(function (e) {
    e.stopPropagation();
    $('.grid__item, .impact-disk-office').toggleClass('is-active');
    $('.impact-card__content').slideToggle('fast');
    $('.grid__item, .cult-disk-office, .brand-disk-office, .exp-disk-office, .comms-disk-office, .adtech-disk-office, .dyn-disk-office').removeClass('is-active');
    $('.cult-card__content, .brand-card__content, .exp-card__content, .comms-card__content, .adtech-card__content, .dyn-card__content').slideUp('fast');
});

$('.adtech-disk').click(function (e) {
    e.stopPropagation();
    $('.grid__item, .adtech-disk-office').toggleClass('is-active');
    $('.adtech-card__content').slideToggle('fast');
    $('.grid__item, .cult-disk-office, .brand-disk-office, .exp-disk-office, .comms-disk-office, .impact-disk-office, .dyn-disk-office').removeClass('is-active');
    $('.cult-card__content, .brand-card__content, .exp-card__content, .comms-card__content, .impact-card__content, .dyn-card__content').slideUp('fast');
});

$('.dyn-disk').click(function (e) {
    e.stopPropagation();
    $('.grid__item, .dyn-disk-office').toggleClass('is-active');
    $('.dyn-card__content').slideToggle('fast');
    $('.grid__item, .cult-disk-office, .brand-disk-office, .exp-disk-office, .comms-disk-office, .impact-disk-office, .adtech-disk-office').removeClass('is-active');
    $('.cult-card__content, .brand-card__content, .exp-card__content, .comms-card__content, .impact-card__content, .adtech-card__content').slideUp('fast');
});

$('body').click(function (e) {
    $('.grid__item, .cult-disk-office, .dyn-disk-office, .brand-disk-office, .exp-disk-office, .comms-disk-office, .impact-disk-office, .adtech-disk-office').removeClass('is-active');
    $('.cult-card__content, .dyn-card__content, .brand-card__content, .exp-card__content, .comms-card__content, .impact-card__content, .adtech-card__content').slideUp('fast');
});

$('.contact-card__content-wrapper').click(function (e) {
    e.stopPropagation();
});




$(document).ready(function() {
  $('.contact__subnav-item a').click(function(event) {
    // Prevent the default anchor click behavior
    event.preventDefault();

    // Get the filter value from the clicked item's data-filter attribute
    var filterValue = $(this).parent().data('filter');

    // Find all itemBox_ab elements
    var $items = $('.itemBox_ab');

    // Hide all items
    $items.stop(true, true).fadeOut(200);

    // Show the filtered item(s) based on the clicked filter value
    var $filteredItems = $items.filter('.' + filterValue);
    setTimeout(function() {
      $filteredItems.fadeIn(300);
    }, 200);

    // Update 'is-active' class on navigation links
    $('.contact__subnav-item a').removeClass('is-active');
    $(this).addClass('is-active');
  });
});








 $('.cookies_ani-border.active').click(function (e) {
    $('.cookies_ani-border.active').toggleClass('is_active');
 });
$('#performance-cookies-id').click(function (e) {
    $('#performance-cookies-id').toggleClass('is_active');
 });

// Change text without animation
// $('#functional_cookies_id').on("click", function() {
//     const p = $(this).find("p"); // Select the <p> inside #functional_cookies_id
//     if (p.text().trim() === "On") {
//         p.text("Off");
//     } else {
//         p.text("On");
//     }
// });

// Change text with animation (fade-out)
// $('#functional_cookies_id').on("click", function() {
//     const p = $(this).find("p"); // Select the <p> inside #functional_cookies_id

//     // Add the fade-out class to trigger the animation
//     p.addClass("fade-out");

//     // Wait for the fade-out animation to complete, then change the text and fade back in
//     setTimeout(() => {
//         // Toggle the text between "On" and "Off"
//         p.text(p.text().trim() === "On" ? "Off" : "On");

//         // Remove fade-out to fade back in
//         p.removeClass("fade-out");
//     }, 200); // Matches the transition duration in CSS (0.3s)
// });

// Change text with animation (opacity)
$('#functional_cookies_id').on("click", function() {
    const p = $(this).find("p"); // Select the <p> inside #functional_cookies_id

    // Set opacity to 0 to fade out
    p.css("opacity", "0");

    // Wait for the fade-out animation to complete, then change the text and fade back in
    setTimeout(() => {
        // Toggle the text between "On" and "Off"
        p.text(p.text().trim() === "On" ? "Off" : "On");

        // Set opacity back to 1 to fade in
        p.css("opacity", "1");
    }, 200); // Matches the transition duration in CSS (0.3s)
});

$('#performance-cookies-id').on("click", function() {
    const p = $(this).find("p"); // Select the <p> inside #functional_cookies_id

    // Set opacity to 0 to fade out
    p.css("opacity", "0");

    // Wait for the fade-out animation to complete, then change the text and fade back in
    setTimeout(() => {
        // Toggle the text between "On" and "Off"
        p.text(p.text().trim() === "On" ? "Off" : "On");

        // Set opacity back to 1 to fade in
        p.css("opacity", "1");
    }, 200); // Matches the transition duration in CSS (0.3s)
});



// Direct Scroll to Section
document.addEventListener("DOMContentLoaded", function() {
    document.body.style.visibility = "visible";
// Rest of the scroll code here
});