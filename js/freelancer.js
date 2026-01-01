/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('.page-scroll a').on('click', function(event) {
    var $anchor = $(this);
    var target = $($anchor.attr('href'));

    if (target.length) {
      var windowHeight = $(window).height();
      var targetHeight = target.outerHeight();
      var targetOffset = target.offset().top;
      var scrollTo;

      // Calculate target scroll position
      if ($anchor.attr('href') === '#page-top') {
        scrollTo = 0;
      } else {
        scrollTo = targetOffset - (windowHeight / 2) + (targetHeight / 2);
      }

      // Prevent scrolling if already near the target (within 10px threshold)
      if (Math.abs($(window).scrollTop() - scrollTo) < 10) {
        event.preventDefault();
        return;
      }

      // Smooth scroll to target
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
    target: '.navbar-fixed-top',
    offset: $('.navbar-fixed-top').outerHeight() + 500 // small extra buffer
});

// Closes the Responsive Menu on Menu Item Click
$(function() {
  // When any portfolio modal opens
  $('.portfolio-modal').on('show.bs.modal', function () {
    const modalId = this.id;
    history.pushState({ modal: modalId }, null, '#' + modalId);
  });

  // When any portfolio modal closes
  $('.portfolio-modal').on('hide.bs.modal', function () {
    if (history.state && history.state.modal === this.id) {
      history.back(); // remove the modal state
    }
  });

  // Handle back button
  window.onpopstate = function (event) {
    if (event.state && event.state.modal) {
      $('#' + event.state.modal).modal('hide'); // close the specific modal
    } else {
      // No modal state → ensure all modals are closed
      $('.portfolio-modal').modal('hide');
    }
  };
});
