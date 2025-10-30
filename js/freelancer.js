/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('.page-scroll a').bind('click', function(event) {
    var $anchor = $(this);
    var target = $($anchor.attr('href'));

    if (target.length) {
      var windowHeight = $(window).height();
      var targetHeight = target.outerHeight();
      var targetOffset = target.offset().top;

      var scrollTo;
      if ($anchor.attr('href') === '#page-top') {
        // Scroll exactly to the top when clicking your name/logo
        scrollTo = 0;
      } else {
        // Center other sections in the viewport
        scrollTo = targetOffset - (windowHeight / 2) + (targetHeight / 2);
      }

      $('html, body').stop().animate({
        scrollTop: scrollTo
      }, 1200, 'easeInOutExpo');
      event.preventDefault();
    }
  });
});




// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
