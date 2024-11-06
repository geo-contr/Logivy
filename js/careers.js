$(document).ready(function() {
     // Initialize ScrollMagic Controller
     var controller = new ScrollMagic.Controller();

     // Create a ScrollMagic Scene
     var classToggleScene = new ScrollMagic.Scene({
        triggerElement: ".careers-work-section-wrapper",
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
        triggerElement: ".careers-work-section-wrapper",
        triggerHook: 0.08, // Adjust triggerHook as needed
        duration: 0 // Duration of 0 means it will happen immediately when triggered
     })
     .setClassToggle(".branding__logo", "change") // Add the change class to .burger
     .addTo(controller);
 });

$(document).ready(function() {
     // Initialize ScrollMagic Controller
     var controller = new ScrollMagic.Controller();

     // Create a ScrollMagic Scene
     var classToggleScene = new ScrollMagic.Scene({
        triggerElement: ".careers-work-section-wrapper",
        triggerHook: 0.08, // Adjust triggerHook as needed
        duration: 0 // Duration of 0 means it will happen immediately when triggered
     })
     .setClassToggle(".site-nav__list .is-active", "change") // Add the change class to .burger
     .addTo(controller);
 });

$(document).ready(function() {
     // Initialize ScrollMagic Controller
     var controller = new ScrollMagic.Controller();

     // Create a ScrollMagic Scene
     var classToggleScene = new ScrollMagic.Scene({
        triggerElement: ".careers-work-section-wrapper",
        triggerHook: 0.08, // Adjust triggerHook as needed
        duration: 0 // Duration of 0 means it will happen immediately when triggered
     })
     .setClassToggle(".site-nav__list .no-active", "change") // Add the change class to .burger
     .addTo(controller);
 });


function resetConnectScroll() {
    $('.connect-crm-wrap').scrollTop(0); // Ensure modal content is scrolled to the top
}
$('.crm-form a').click(function(){
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

// 
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


    $('.container--s').click(function (e) {
        $('.custom-select, .custom-select1').removeClass('open');
        e.stopPropagation(); // Prevents this click from bubbling up to the document click listener
    });
});


// Select 
// // Function to close all dropdowns
// function closeAllDropdowns() {
//     $('.select-dropdown__list1, .select-dropdown__list, .select-dropdown__list2, .select-dropdown__list3').removeClass('active');
//     $('.select-dropdown__button1, .select-dropdown__button, .select-dropdown__button2, .select-dropdown__button3').attr('aria-expanded', 'false');
// }

// // Toggle the dropdown and close others when clicking the button
// $('.select-dropdown__button1').click(function (e) {
//     e.stopPropagation(); // Prevents the click event from bubbling up
//     // closeAllDropdowns();
//     $('.select-dropdown__list1').toggleClass('active');
//     $(this).attr('aria-expanded', $('.select-dropdown__list1').hasClass('active'));

//     $('.select-dropdown__list, .select-dropdown__list2, .select-dropdown__list3').removeClass('active');
// });

// $('.select-dropdown__button').click(function (e) {
//     e.stopPropagation();
//     // closeAllDropdowns();
//     $('.select-dropdown__list').toggleClass('active');
//     $(this).attr('aria-expanded', $('.select-dropdown__list').hasClass('active'));

//     $('.select-dropdown__list1, .select-dropdown__list2, .select-dropdown__list3').removeClass('active');
// });

// $('.select-dropdown__button2').click(function (e) {
//     e.stopPropagation();
//     // closeAllDropdowns();
//     $('.select-dropdown__list2').toggleClass('active');
//     $(this).attr('aria-expanded', $('.select-dropdown__list2').hasClass('active'));

//     $('.select-dropdown__list, .select-dropdown__list1, .select-dropdown__list3').removeClass('active');
// });

// $('.select-dropdown__button3').click(function (e) {
//     e.stopPropagation();
//     // closeAllDropdowns();
//     $('.select-dropdown__list3').toggleClass('active');
//     $(this).attr('aria-expanded', $('.select-dropdown__list3').hasClass('active'));

//     $('.select-dropdown__list, .select-dropdown__list2, .select-dropdown__list1').removeClass('active');
// });

// // Close dropdown when clicking outside
// $(document).click(function () {
//     closeAllDropdowns();
// });

// // Update the button text and value when an item is selected
// $('.select-dropdown__list-item1').click(function () {
//     var selectedValue = $(this).attr('data-value');
//     $('.select-dropdown__button1 .black1').text($(this).text());
//     $('.select-dropdown__button1').attr('data-value', selectedValue);
//     $('.select-dropdown__list1').removeClass('active');
// });

// $('.select-dropdown__list-item').click(function () {
//     var selectedValue = $(this).attr('data-value');
//     $('.select-dropdown__button .black2').text($(this).text());
//     $('.select-dropdown__button').attr('data-value', selectedValue);
//     $('.select-dropdown__list').removeClass('active');
// });

// $('.select-dropdown__list-item2').click(function () {
//     var selectedValue = $(this).attr('data-value');
//     $('.select-dropdown__button2 .black').text($(this).text());
//     $('.select-dropdown__button2').attr('data-value', selectedValue);
//     $('.select-dropdown__list2').removeClass('active');
// });

// $('.select-dropdown__list-item3').click(function () {
//     var selectedValue = $(this).attr('data-value');
//     $('.select-dropdown__button3 span').text($(this).text());
//     $('.select-dropdown__button3').attr('data-value', selectedValue);
//     $('.select-dropdown__list3').removeClass('active');
// });
// End of Select



// Select with Filter
// Function to close all dropdowns
function closeAllDropdowns() {
    $('.select-dropdown__list1, .select-dropdown__list, .select-dropdown__list2, .select-dropdown__list3').removeClass('active');
    $('.select-dropdown__button1, .select-dropdown__button, .select-dropdown__button2, .select-dropdown__button3').attr('aria-expanded', 'false');
}

// Function to filter job listings with two or more attr
function filterJobs() {
    var selectedRegion = $('.select-dropdown__button1').attr('data-value');
    var selectedRegionSelected = $('.select-dropdown__button1').attr('data-region-selected'); // Get the second region
    var selectedLocation = $('.select-dropdown__button').attr('data-value');
    var selectedDepartment = $('.select-dropdown__button2').attr('data-value');
    var selectedDepartmentSelected = $('.select-dropdown__button2').attr('data-region');
    var selectedCompany = $('.select-dropdown__button3').attr('data-value');
    
    // Show clear filters button if any filter is selected
    if (selectedRegion !== 'All' || selectedLocation !== 'All' || selectedDepartment !== 'All' || selectedCompany !== 'All') {
        $('#clear-filters').show();
    } else {
        $('#clear-filters').hide();
    }

    // Loop through job listings and hide or show based on filter criteria
    $('.careers--listings li').each(function() {
        // Get job details
        var jobCompany = $(this).find('.lg25.careers--listings-loc').first().text(); // Company name is assumed to be the first div
        var jobLocation = $(this).find('.lg25.careers--listings-loc').last().text(); // Location is assumed to be the last div
        var jobRegion = $(this).find('.lg25.careers--listings-loc').first().text() + ', ' + $(this).find('.last-text').text();
        var jobDepartment = $(this).find('.lg25.careers--listings-loc').first().text() + ', ' + $(this).find('.last-text').text();
        // var jobDepartment = $(this).find('.lg25.careers--listings-loc').first().text() + ', ' + $(this).find('.last-text').text();
        // var jobDepartment = $(this).find('.lg25.careers--listings-loc').last().text(); // Adjust this according to your HTML structure
        // var jobDepartment = $(this).find('.lg50.careers--listings-title').text(); // Adjust this according to your HTML structure
        
        var show = true; // Default to show the job listing

        // Apply filtering logic
        if (selectedRegion !== 'All' && !jobRegion.includes(selectedRegion)) {
            show = false;
        }
        // Additional condition to check the 'data-region-selected' value
        if (selectedRegionSelected !== undefined && selectedRegionSelected !== 'All' && jobRegion.includes(selectedRegionSelected)) {
            show = true;
        }
        if (selectedDepartment !== 'All' && !jobDepartment.includes(selectedDepartment)) {
            show = false;
        }
        if (selectedDepartmentSelected !== undefined && selectedDepartmentSelected !== 'All' && jobDepartment.includes(selectedDepartmentSelected)) {
            show = true;
        }
        if (selectedLocation !== 'All' && jobLocation !== selectedLocation) {
            show = false;
        }
        // if (selectedDepartment !== 'All' && jobDepartment !== selectedDepartment) {
        //     show = false;
        // }
        if (selectedCompany !== 'All' && jobCompany !== selectedCompany) {
            show = false;
        }

        // Show or hide the job listing based on the filter criteria
        if (show) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

// Toggle dropdowns and assign selection behavior
$('.select-dropdown__button1').click(function (e) {
    e.stopPropagation(); 
    $('.select-dropdown__list1').toggleClass('active');
    $(this).attr('aria-expanded', $('.select-dropdown__list1').hasClass('active'));
    $('.select-dropdown__list, .select-dropdown__list2, .select-dropdown__list3').removeClass('active');
});

$('.select-dropdown__button').click(function (e) {
    e.stopPropagation();
    $('.select-dropdown__list').toggleClass('active');
    $(this).attr('aria-expanded', $('.select-dropdown__list').hasClass('active'));
    $('.select-dropdown__list1, .select-dropdown__list2, .select-dropdown__list3').removeClass('active');
});

$('.select-dropdown__button2').click(function (e) {
    e.stopPropagation();
    $('.select-dropdown__list2').toggleClass('active');
    $(this).attr('aria-expanded', $('.select-dropdown__list2').hasClass('active'));
    $('.select-dropdown__list, .select-dropdown__list1, .select-dropdown__list3').removeClass('active');
});

$('.select-dropdown__button3').click(function (e) {
    e.stopPropagation();
    $('.select-dropdown__list3').toggleClass('active');
    $(this).attr('aria-expanded', $('.select-dropdown__list3').hasClass('active'));
    $('.select-dropdown__list, .select-dropdown__list2, .select-dropdown__list1').removeClass('active');
});


// Reset all filters except the currently selected one
// Updated resetFilters to handle region-selected and region properly
function resetFilters(exceptButton) {
    $('.select-dropdown__button1, .select-dropdown__button, .select-dropdown__button2, .select-dropdown__button3').each(function() {
        if (!$(this).is(exceptButton)) {
            $(this).attr('data-value', 'All');
            $(this).removeAttr('data-region-selected'); // Clear the data-region-selected
            $(this).removeAttr('data-region'); // Clear the data-region
            $(this).find('span').text('All');
        }
    });
}

$('.select-dropdown__list-item1').click(function () {
    var selectedValue = $(this).attr('data-value');
    var selectedRegion = $(this).attr('data-region-selected');

    // Update the dropdown button with the selected values
    $('.select-dropdown__button1 span').text($(this).text());
    $('.select-dropdown__button1').attr('data-value', selectedValue);
    $('.select-dropdown__button1').attr('data-region-selected', selectedRegion);

    // Reset other filters
    resetFilters('.select-dropdown__button1');
    $('.select-dropdown__list1').removeClass('active');
    
    filterJobs();
});

$('.select-dropdown__list-item').click(function () {
    var selectedValue = $(this).attr('data-value');

    // Update the dropdown button with the selected values
    $('.select-dropdown__button span').text($(this).text());
    $('.select-dropdown__button').attr('data-value', selectedValue);

    // Reset other filters
    resetFilters('.select-dropdown__button');
    $('.select-dropdown__list').removeClass('active');

    filterJobs();
});

$('.select-dropdown__list-item2').click(function () {
    var selectedValue = $(this).attr('data-value');
    var selectedDepartment = $(this).attr('data-region');

    // Update the dropdown button with the selected values
    $('.select-dropdown__button2 span').text($(this).text());
    $('.select-dropdown__button2').attr('data-value', selectedValue);
    $('.select-dropdown__button2').attr('data-region', selectedDepartment);

    // Reset other filters
    resetFilters('.select-dropdown__button2');
    $('.select-dropdown__list2').removeClass('active');

    filterJobs();
});

$('.select-dropdown__list-item3').click(function () {
    var selectedValue = $(this).attr('data-value');

    // Update the dropdown button with the selected values
    $('.select-dropdown__button3 span').text($(this).text());
    $('.select-dropdown__button3').attr('data-value', selectedValue);

    // Reset other filters
    resetFilters('.select-dropdown__button3');
    $('.select-dropdown__list3').removeClass('active');

    filterJobs();
});
// End of Reset all filters except the currently selected one

// Close dropdowns when clicking outside
$(document).click(function () {
    closeAllDropdowns();
});

// Clear all filters
$('#clear-filters').click(function () {
    // Reset dropdown values to 'All'
    $('.select-dropdown__button1, .select-dropdown__button, .select-dropdown__button2, .select-dropdown__button3').each(function() {
        $(this).attr('data-value', 'All');
        $(this).find('span').text('All');
    });

    // Hide the clear filters button
    $(this).hide();

    // Show all job listings
    $('.careers--listings li').show();
});
// End of Select with Filter
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


// Direct Scroll to Section
document.addEventListener("DOMContentLoaded", function() {
    document.body.style.visibility = "visible";
// Rest of the scroll code here
});